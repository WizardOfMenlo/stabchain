use super::{BaseSelector, Stabchain};
use crate::group::orbit::abstraction::SimpleTransversalResolver;
use crate::group::stabchain::{element_testing, StabchainRecord};
use crate::group::Group;
use crate::perm::actions::SimpleApplication;
use crate::perm::{Action, Permutation};
use crate::DetHashMap;
use std::collections::VecDeque;
use std::iter::FromIterator;

use tracing::{debug, trace};

// Helper struct, used to build the stabilizer chain
#[derive(Debug)]
pub struct StabchainBuilderNaive<P, S, A = SimpleApplication<P>>
where
    A: Action<P>,
{
    current_pos: usize,
    chain: Vec<StabchainRecord<P, SimpleTransversalResolver, A>>,
    selector: S,
    action: A,
}

impl<P, S, A> StabchainBuilderNaive<P, S, A>
where
    A: Action<P>,
{
    pub(super) fn new(selector: S, action: A) -> Self {
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
    ) -> impl Iterator<Item = &StabchainRecord<P, SimpleTransversalResolver, A>> {
        self.chain.iter().skip(self.current_pos)
    }
}

impl<P, S, A> StabchainBuilderNaive<P, S, A>
where
    P: Permutation,
    A: Action<P>,
    S: BaseSelector<P, A::OrbitT>,
{
    fn extend_lower_level(&mut self, p: P) {
        self.current_pos += 1;
        self.extend_inner(p);
        self.current_pos -= 1;
    }

    #[allow(clippy::map_entry)]
    fn extend_inner(&mut self, p: P) {
        trace!(perm = %p, level = self.current_pos, "Extending with perm");
        // Note that id always in group
        if element_testing::is_in_group(self.current_chain(), &p) {
            return;
        }

        // Bottom of the chain
        if self.bottom_of_the_chain() {
            debug!(level = self.current_pos, "Extending the chain at bottom");
            let moved_point = self.selector.moved_point(&p, self.current_pos);
            debug!(?moved_point, "Selected Moved Point");
            let mut record = StabchainRecord::new(
                moved_point.clone(),
                Group::new(&[p.clone()]),
                [(moved_point.clone(), P::id())].iter().cloned().collect(),
            );

            trace!("Computing orbit of {:?}", moved_point);
            let mut next_orbit_point = self.action.apply(&p, moved_point.clone());
            let mut representative = p.clone();
            while next_orbit_point != moved_point {
                record
                    .transversal
                    .insert(next_orbit_point.clone(), representative.clone());
                next_orbit_point = self.action.apply(&p, next_orbit_point);
                representative = representative.multiply(&p);
            }
            debug!(record = ?record, level = self.current_pos, "Chain extended");
            self.chain.push(record);
            self.extend_lower_level(representative);
            return;
        }

        debug!(level = self.current_pos, "Updating level");

        // Then we already had something in this layer
        // Gets the record to be updated
        let mut record = self.chain[self.current_pos].clone();

        let mut to_check = record.transversal.keys().cloned().collect::<VecDeque<_>>();
        let mut new_transversal = DetHashMap::default();
        while !to_check.is_empty() {
            let orbit_element = to_check.pop_back().unwrap();
            let orbit_element_repr = record.transversal.get(&orbit_element).unwrap();
            let new_image = self.action.apply(&p, orbit_element);

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
        let mut to_check = new_transversal
            .iter()
            .map(|(o, p)| (o.clone(), p.clone()))
            .collect::<VecDeque<_>>();

        // Update the record
        record.transversal.extend(new_transversal);

        // While we have orbit elements (and representatives to check)
        while !to_check.is_empty() {
            // Get the pair
            let (orbit_element, orbit_element_repr) = to_check.pop_back().unwrap();

            // For each generator (and p)
            for generator in std::iter::once(&p).chain(record.gens.generators()) {
                let new_image = self.action.apply(generator, orbit_element.clone());

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
                    record.transversal.insert(new_image.clone(), repr.clone());

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

impl<P, S, A> super::Builder<P, SimpleTransversalResolver, A> for StabchainBuilderNaive<P, S, A>
where
    P: Permutation,
    A: Action<P>,
    S: BaseSelector<P, A::OrbitT>,
{
    fn set_generators(&mut self, gens: &Group<P>) {
        for gen in gens.generators() {
            self.current_pos = 0;
            self.extend_inner(gen.clone());
        }
    }

    fn build(self) -> Stabchain<P, SimpleTransversalResolver, A> {
        Stabchain { chain: self.chain }
    }
}
