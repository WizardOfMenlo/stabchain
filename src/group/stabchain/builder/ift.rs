use super::{MovedPointSelector, Stabchain};
use crate::group::orbit::abstraction::FactoredTransversalResolver;
use crate::group::orbit::transversal::factored_transversal::representative_raw;
use crate::group::stabchain::{element_testing, StabchainRecord};
use crate::group::Group;
use crate::perm::{Action, Permutation};
use std::collections::{HashMap, VecDeque};
use std::iter::FromIterator;

// Helper struct, used to build the stabilizer chain
pub struct StabchainBuilderIFT<P, A, T>
where
    A: Action<P>,
{
    current_pos: usize,
    chain: Vec<StabchainRecord<P, A, FactoredTransversalResolver<A>>>,
    selector: T,
    action: A,
}

impl<P, A, T> StabchainBuilderIFT<P, A, T>
where
    A: Action<P>,
{
    pub(super) fn new(selector: T, action: A) -> Self {
        StabchainBuilderIFT {
            current_pos: 0,
            chain: Vec::new(),
            selector,
            action,
        }
    }

    fn bottom_of_the_chain(&self) -> bool {
        self.current_pos == self.chain.len()
    }

    fn current_chain(
        &self,
    ) -> impl Iterator<Item = &StabchainRecord<P, A, FactoredTransversalResolver<A>>> {
        self.chain.iter().skip(self.current_pos)
    }
}

impl<P, A, T> StabchainBuilderIFT<P, A, T>
where
    P: Permutation,
    T: MovedPointSelector<P, A::OrbitT>,
    A: Action<P>,
{
    fn extend_lower_level(&mut self, p: P) {
        self.current_pos += 1;
        self.extend_inner(p);
        self.current_pos -= 1;
    }

    #[allow(clippy::map_entry)]
    fn extend_inner(&mut self, p: P) {
        // Note that id always in group
        if element_testing::is_in_group(self.current_chain(), &p) {
            return;
        }

        // Bottom of the chain
        if self.bottom_of_the_chain() {
            let moved_point = self.selector.moved_point(&p);
            let mut record = StabchainRecord::new(
                moved_point.clone(),
                Group::new(&[p.clone()]),
                [(moved_point.clone(), P::id())].iter().cloned().collect(),
            );

            let mut next_orbit_point = self.action.apply(&p, moved_point.clone());
            let mut representative = p.clone();
            while next_orbit_point != moved_point {
                record.transversal.insert(next_orbit_point.clone(), p.inv());
                next_orbit_point = self.action.apply(&p, next_orbit_point);
                representative = representative.multiply(&p);
            }
            self.chain.push(record);
            self.extend_lower_level(representative);
            return;
        }

        // Then we already had something in this layer
        // Gets the record to be updated
        let mut record = self.chain[self.current_pos].clone();

        let mut to_check = VecDeque::from_iter(record.transversal.keys().cloned());
        let mut new_transversal = HashMap::new();
        while !to_check.is_empty() {
            let orbit_element = to_check.pop_back().unwrap();
            let orbit_element_repr = representative_raw(
                &record.transversal,
                record.base.clone(),
                orbit_element.clone(),
                &self.action,
            )
            .unwrap();
            let new_image = self.action.apply(&p, orbit_element);

            // If we already saw the element
            if record.transversal.contains_key(&new_image)
                || new_transversal.contains_key(&new_image)
            {
                let image_repr = representative_raw(
                    &record.transversal,
                    record.base.clone(),
                    new_image.clone(),
                    &self.action,
                )
                .or_else(|| {
                    representative_raw(
                        &new_transversal,
                        record.base.clone(),
                        new_image,
                        &self.action,
                    )
                })
                .unwrap();

                let new_perm = orbit_element_repr.multiply(&p).multiply(&image_repr.inv());
                self.extend_lower_level(new_perm);
            } else {
                new_transversal.insert(new_image, p.inv());
            }
        }

        // We now want to check all the newly added elements
        let mut to_check = VecDeque::from_iter(new_transversal.keys().cloned());

        // Update the record
        record.transversal.extend(new_transversal);

        // While we have orbit elements (and representatives to check)
        while !to_check.is_empty() {
            // Get the pair
            let orbit_element = to_check.pop_back().unwrap();
            let orbit_element_repr = representative_raw(
                &record.transversal,
                record.base.clone(),
                orbit_element.clone(),
                &self.action,
            )
            .unwrap();

            // For each generator (and p)
            for generator in std::iter::once(&p).chain(record.gens.generators()) {
                let new_image = self.action.apply(generator, orbit_element.clone());

                // If we have already seen the image
                if record.transversal.contains_key(&new_image) {
                    // Get the representative
                    let image_repr = representative_raw(
                        &record.transversal,
                        record.base.clone(),
                        new_image.clone(),
                        &self.action,
                    )
                    .unwrap();

                    // Extend lower level
                    let new_perm = orbit_element_repr
                        .multiply(generator)
                        .multiply(&image_repr.inv());
                    self.extend_lower_level(new_perm);
                } else {
                    // Store in transversal
                    record
                        .transversal
                        .insert(new_image.clone(), generator.inv());

                    // Update and ask to check the new image
                    to_check.push_back(new_image);
                }
            }
        }

        // Update the generators adding p
        record.gens =
            Group::from_iter(std::iter::once(&p).chain(record.gens.generators()).cloned());

        // Store the updated record in the chain
        self.chain[self.current_pos] = record;
    }
}

impl<P, A, M> super::Builder<P, A, FactoredTransversalResolver<A>> for StabchainBuilderIFT<P, A, M>
where
    P: Permutation,
    A: Action<P>,
    M: MovedPointSelector<P, A::OrbitT>,
{
    fn set_generators(&mut self, gens: &Group<P>) {
        for gen in gens.generators() {
            self.current_pos = 0;
            self.extend_inner(gen.clone());
        }
    }

    fn build(self) -> Stabchain<P, A, FactoredTransversalResolver<A>> {
        Stabchain { chain: self.chain }
    }
}
