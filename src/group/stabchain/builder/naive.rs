use super::{MovedPointSelector, Stabchain};
use crate::group::orbit::abstraction::SimpleTransversalResolver;
use crate::group::stabchain::{element_testing, StabchainRecord};
use crate::group::Group;
use crate::perm::{Action, Permutation};
use std::collections::{HashMap, VecDeque};
use std::iter::FromIterator;

// Helper struct, used to build the stabilizer chain
pub struct StabchainBuilderNaive<P, A, T> {
    current_pos: usize,
    chain: Vec<StabchainRecord<P, SimpleTransversalResolver>>,
    selector: T,
    action: A,
}

impl<P, A, T> StabchainBuilderNaive<P, A, T> {
    pub(super) fn new(selector: T, action: A) -> Self {
        StabchainBuilderNaive {
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
    ) -> impl Iterator<Item = &StabchainRecord<P, SimpleTransversalResolver>> {
        self.chain.iter().skip(self.current_pos)
    }
}

impl<P, A, T> StabchainBuilderNaive<P, A, T>
where
    P: Permutation,
    A: Action<P>,
    T: MovedPointSelector<P>,
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
                moved_point,
                Group::new(&[p.clone()]),
                [(moved_point, P::id())].iter().cloned().collect(),
            );

            let mut next_orbit_point = p.apply(moved_point);
            let mut representative = p.clone();
            while next_orbit_point != moved_point {
                record
                    .transversal
                    .insert(next_orbit_point, representative.clone());
                next_orbit_point = p.apply(next_orbit_point);
                representative = representative.multiply(&p);
            }
            self.chain.push(record);
            self.extend_lower_level(representative);
            return;
        }

        // Then we already had something in this layer
        // Gets the record to be updated
        let mut record = self.chain[self.current_pos].clone();

        let mut to_check = VecDeque::from_iter(record.transversal.keys().copied());
        let mut new_transversal = HashMap::new();
        while !to_check.is_empty() {
            let orbit_element = to_check.pop_back().unwrap();
            let orbit_element_repr = record.transversal.get(&orbit_element).unwrap();
            let new_image = p.apply(orbit_element);

            // If we already saw the element
            if record.transversal.contains_key(&new_image)
                || new_transversal.contains_key(&new_image)
            {
                let image_repr = record
                    .transversal
                    .get(&new_image)
                    .or_else(|| new_transversal.get(&new_image))
                    .unwrap();

                let new_perm = orbit_element_repr.multiply(&p).multiply(&image_repr.inv());
                self.extend_lower_level(new_perm);
            } else {
                new_transversal.insert(new_image, orbit_element_repr.multiply(&p));
            }
        }

        // We now want to check all the newly added elements
        let mut to_check =
            VecDeque::from_iter(new_transversal.iter().map(|(o, p)| (*o, p.clone())));

        // Update the record
        record.transversal.extend(new_transversal);

        // While we have orbit elements (and representatives to check)
        while !to_check.is_empty() {
            // Get the pair
            let (orbit_element, orbit_element_repr) = to_check.pop_back().unwrap();

            // For each generator (and p)
            for generator in std::iter::once(&p).chain(record.gens.generators()) {
                let new_image = generator.apply(orbit_element);

                // If we have already seen the image
                if record.transversal.contains_key(&new_image) {
                    // Get the representative
                    let image_repr = record.transversal.get(&new_image).unwrap();

                    // Extend lower level
                    let new_perm = orbit_element_repr
                        .multiply(generator)
                        .multiply(&image_repr.inv());
                    self.extend_lower_level(new_perm);
                } else {
                    // Compute the repr s.t. repr^(orbit_element_repr * generator) = orbit_element ^ generator = new_image
                    let repr = orbit_element_repr.multiply(generator);

                    // Store in transversal
                    record.transversal.insert(new_image, repr.clone());

                    // Update and ask to check the new image
                    to_check.push_back((new_image, repr));
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

impl<P, A, M> super::Builder<P, SimpleTransversalResolver> for StabchainBuilderNaive<P, A, M>
where
    P: Permutation,
    A: Action<P>,
    M: MovedPointSelector<P>,
{
    fn set_generators(&mut self, gens: &Group<P>) {
        for gen in gens.generators() {
            self.current_pos = 0;
            self.extend_inner(gen.clone());
        }
    }

    fn build(self) -> Stabchain<P, SimpleTransversalResolver> {
        Stabchain { chain: self.chain }
    }
}
