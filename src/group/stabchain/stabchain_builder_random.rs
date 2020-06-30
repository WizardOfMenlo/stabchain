use super::{element_testing, MovedPointSelector, Stabchain, StabchainRecord};
use crate::group::orbit::factored_transversal::representative_raw;
use crate::group::Group;
use crate::perm::Permutation;
use std::collections::{HashMap, VecDeque};
use std::iter::FromIterator;

// Helper struct, used to build the stabilizer chain
pub(super) struct StabchainBuilderRandom<T: MovedPointSelector> {
    current_pos: usize,
    chain: Vec<StabchainRecord>,
    selector: T,
    n: usize,
}

impl<T: MovedPointSelector> StabchainBuilderRandom<T> {
    pub(super) fn new(selector: T) -> Self {
        StabchainBuilderRandom {
            current_pos: 0,
            chain: Vec::new(),
            selector,
            n: 0,
        }
    }

    fn bottom_of_the_chain(&self) -> bool {
        self.current_pos == self.chain.len()
    }

    fn current_chain(&self) -> impl Iterator<Item = &StabchainRecord> {
        self.chain.iter().skip(self.current_pos)
    }

    fn extend_lower_level(&mut self, p: Permutation) {
        self.current_pos += 1;
        self.extend_inner(p);
        self.current_pos -= 1;
    }

    #[allow(clippy::map_entry)]
    fn extend_inner(&mut self, p: Permutation) {
        // Note that id always in group
        if element_testing::is_in_group(self.current_chain(), &p) {
            return;
        }

        // Bottom of the chain
        if self.bottom_of_the_chain() {
            let moved_point = self.selector.moved_point(&p);
            let mut record = StabchainRecord {
                base: moved_point,
                gens: Group::new(&[p.clone()]),
                transversal: [(moved_point, Permutation::id())].iter().cloned().collect(),
            };

            let mut next_orbit_point = p.apply(moved_point);
            let mut representative = p.clone();
            while next_orbit_point != moved_point {
                record.transversal.insert(next_orbit_point, p.inv());
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
            let orbit_element_repr =
                representative_raw(&record.transversal, record.base, orbit_element).unwrap();
            let new_image = p.apply(orbit_element);

            // If we already saw the element
            if record.transversal.contains_key(&new_image)
                || new_transversal.contains_key(&new_image)
            {
                let image_repr = representative_raw(&record.transversal, record.base, new_image)
                    .or_else(|| representative_raw(&new_transversal, record.base, new_image))
                    .unwrap();

                let new_perm = orbit_element_repr.multiply(&p).multiply(&image_repr.inv());
                self.extend_lower_level(new_perm);
            } else {
                new_transversal.insert(new_image, p.inv());
            }
        }

        // We now want to check all the newly added elements
        let mut to_check = VecDeque::from_iter(new_transversal.keys().copied());

        // Update the record
        record.transversal.extend(new_transversal);

        // While we have orbit elements (and representatives to check)
        while !to_check.is_empty() {
            // Get the pair
            let orbit_element = to_check.pop_back().unwrap();
            let orbit_element_repr =
                representative_raw(&record.transversal, record.base, orbit_element).unwrap();

            // For each generator (and p)
            for generator in std::iter::once(&p).chain(record.gens.generators()) {
                let new_image = generator.apply(orbit_element);

                // If we have already seen the image
                if record.transversal.contains_key(&new_image) {
                    // Get the representative
                    let image_repr =
                        representative_raw(&record.transversal, record.base, new_image).unwrap();

                    // Extend lower level
                    let new_perm = orbit_element_repr
                        .multiply(generator)
                        .multiply(&image_repr.inv());
                    self.extend_lower_level(new_perm);
                } else {
                    // Store in transversal
                    record.transversal.insert(new_image, generator.inv());

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

    pub(super) fn extend(&mut self, p: Permutation) {
        self.current_pos = 0;
        self.extend_inner(p);
    }

    pub(super) fn build(self) -> Stabchain {
        Stabchain { chain: self.chain }
    }

    fn construct_strong_generating_set(&mut self, group: &Group, upper_bound: usize) {
        //Find the largest moved point of any generator, i.e find which size of the symmetric group the generators are from.
        self.n = group
            .generators
            .iter()
            .map(|gen| gen.lmp().expect("Should not be the identity."))
            .max()
            .unwrap_or(0);
        let mut upper_bound = upper_bound;
        let moved_point = 0; //todo check if this is correct?
        let record = StabchainRecord {
            base: moved_point,
            gens: group.clone(),
            transversal: [(moved_point, Permutation::id())].iter().cloned().collect(),
        };
        self.chain[self.current_pos] = record;
        for g in group.generators() {
            if !element_testing::is_in_group(self.current_chain(), &g) {
                let j = self.selector.moved_point(&g);
                //Evaluate points less than j.
                for i in (0..=j).rev() {
                    //Try complete the subgroup, increasing the upper bound if it fails.
                    while !self.complete_stabchain_subgroup(&g, i, upper_bound) {
                        upper_bound *= 2;
                    }
                }
            }
        }
        // The iterator we are using. We need a copy in case we need to reset due to failure.
        let orig_iter = (0..self.chain.len()).rev();
        let mut iter = orig_iter.clone();
        // TODO assume base e, but doesn't seem to b e specified.
        let passes_required = (self.n as f32).ln().ln().ceil() as i32;
        while let Some(i) = iter.next() {
            // If this fails, then we double the upper bound and reset.
            if !self.complete_stabchain_subgroup(&Permutation::id(), i, upper_bound) {
                upper_bound *= 2;
                //Reset the iterator back to the start.
                iter = orig_iter.clone();
                continue;
            }
            for _ in 0..(passes_required) {
                // Perform the strong generator test, resetting if we have failure.
                if !self.strong_generating_test() {
                    upper_bound *= 2;
                    //Reset the iterator back to the start.
                    iter = orig_iter.clone();
                    continue;
                }
            }
        }
    }

    fn complete_stabchain_subgroup(
        &mut self,
        g: &Permutation,
        point: usize,
        upper_bound: usize,
    ) -> bool {
        false
    }

    fn strong_generating_test(&self) -> bool {
        true
    }
}
