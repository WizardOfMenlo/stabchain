use super::{element_testing, MovedPointSelector, Stabchain, StabchainRecord};
use crate::group::orbit::factored_transversal::representative_raw;
use crate::group::utils::{random_subproduct_full, random_subproduct_subset};
use crate::group::Group;
use crate::perm::Permutation;
use rand::rngs::ThreadRng;
use rand::seq::{IteratorRandom, SliceRandom};
use rand::thread_rng;
use std::cmp::min;
use std::collections::{HashMap, VecDeque};
use std::iter::FromIterator;

const C: f32 = 10.0;

// Helper struct, used to build the stabilizer chain

pub(super) struct StabchainBuilderRandom<T: MovedPointSelector> {
    current_pos: usize,
    chain: Vec<StabchainRecord>,
    selector: T,
    n: usize,
    base: Vec<usize>,
    rng: ThreadRng,
}
#[allow(dead_code)] //TODO remove
impl<T: MovedPointSelector> StabchainBuilderRandom<T> {
    pub(super) fn new(selector: T) -> Self {
        StabchainBuilderRandom {
            current_pos: 0,
            chain: Vec::new(),
            selector,
            n: 0,
            base: Vec::new(),
            rng: thread_rng(),
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
        self.base.push(moved_point);
        self.chain[self.current_pos] = record;
        for g in group.generators() {
            // If g has a non trivial residue
            if !element_testing::is_in_group(self.current_chain(), &g) {
                let j = self.selector.moved_point(&g);
                //Evaluate points less than j.
                for i in (0..=j).rev() {
                    //Try complete the subgroup, increasing the upper bound if it fails.
                    while !self.complete_stabchain_subgroup(g.clone(), i, upper_bound) {
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
            if !self.complete_stabchain_subgroup(Permutation::id(), i, upper_bound) {
                upper_bound *= 2;
                //Reset the iterator back to the start.
                iter = orig_iter.clone();
                continue;
            }
            //Perform the strong generator test ceil(log(log(n))) times, resetting if there is any failure.
            for _ in 0..(passes_required) {
                // Perform the strong generator test, resetting if we have failure.
                if !self.strong_generating_test() {
                    upper_bound *= 2;
                    //Reset the iterator back to the start.
                    iter = orig_iter.clone();
                    break;
                }
            }
        }
    }

    fn complete_stabchain_subgroup(
        &mut self,
        g: Permutation,
        layer: usize,
        upper_bound: usize,
    ) -> bool {
        self.current_pos = layer;
        self.check_transversal_augmentation(g);
        let mut trivial_residues = 0;
        let trivial_residues_required = (C * (self.n as f32).ln()).ceil() as i32;
        let subset_size = min(
            self.n,
            upper_bound * (upper_bound as f32).ln().floor() as usize,
        );
        //
        while trivial_residues < trivial_residues_required {
            //TODO move 64 to constant
            let random_generations: usize = 64
                * self
                    .current_chain()
                    .map(|record| record.transversal.len())
                    .sum::<usize>();
            for _ in 0..random_generations {
                let u = self.random_schrier_generator();
                let h_as_words = element_testing::coset_representative(self.current_chain(), &u)
                    .expect("Should have a residue");
                let b_dash = (0..self.n).choose_multiple(&mut self.rng, subset_size);
                //Check if any points in base union base_dash are fixed by the permutation h.
                //TODO should only be union of base and b_dash. Won't affect things, just wasted effort.
                if self
                    .base
                    .clone()
                    .into_iter()
                    .chain(b_dash.clone())
                    .any(|b| h_as_words.iter().fold(b, |x, perm| perm.apply(x)) == b)
                {
                    //Check if h fixes all points of B, then add it as a base point.
                    if !self
                        .base
                        .clone()
                        .into_iter()
                        .any(|b| h_as_words.iter().fold(b, |x, perm| perm.apply(x)) == b)
                    {
                        //Search for a new base point that h moves.
                        let new_base_point = b_dash
                            .into_iter()
                            .find(|&b| h_as_words.iter().fold(b, |x, perm| perm.apply(x)) != b)
                            .expect("This point should exist");
                        self.base.push(new_base_point);
                        let record = StabchainRecord {
                            base: new_base_point,
                            gens: Group::new(&[]),
                            transversal: [(new_base_point, Permutation::id())]
                                .iter()
                                .cloned()
                                .collect(),
                        };
                        self.chain.push(record);
                    }
                    //Evaluate h as a permutation.
                    let h = h_as_words
                        .iter()
                        .fold(Permutation::id(), |accum, perm| accum.multiply(perm));
                    let j_dash = self.selector.moved_point(&h);
                    for k in (layer..=j_dash).rev() {
                        self.complete_stabchain_subgroup(h.clone(), k, upper_bound);
                    }
                } else {
                    trivial_residues += 1;
                }
            }
        }
        true
    }

    fn random_schrier_generator(&mut self) -> Permutation {
        //First pick a random coset representative of the group
        let record = &self.chain[self.current_pos];
        let point = record
            .transversal
            .keys()
            .choose(&mut self.rng)
            .expect("Should be non empty");
        let coset_representative = representative_raw(&record.transversal, record.base, *point)
            .expect("Should be in the orbit");
        //Generate a random subword.
        let gens = self
            .current_chain()
            .flat_map(|record| record.gens.generators())
            .map(|f| f.clone())
            .collect::<Vec<Permutation>>();
        let w1 = random_subproduct_full(&mut self.rng, &gens[..]);
        let k = rand::Rng::gen_range(&mut self.rng, 0, gens.len() / 2 + 1);
        let w2 = random_subproduct_subset(&mut self.rng, &gens[..], k);
        let g = gens.choose(&mut self.rng).expect("Should be non empty");
        //Combine this into a random subword, randomly including the generator or not.
        let subword = if rand::Rng::gen::<bool>(&mut self.rng) {
            w1.multiply(&w2)
        } else {
            w1.multiply(&g).multiply(&w2)
        };
        //Get the residue of coset_representative*subword
        let residue_as_words = element_testing::coset_representative(
            self.current_chain(),
            &coset_representative.multiply(&subword),
        )
        .expect("Should be present.");
        //Take it's inverse as a word, i.e reverse the order and replace each entry with the inverse.
        let residue_inverse_as_word = residue_as_words.iter().map(|p| p.inv()).rev();
        //Combine everything together as a single permutation.
        residue_inverse_as_word.fold(coset_representative.multiply(&subword), |accum, p| {
            accum.multiply(&p)
        })
    }

    /// Check if adding a new element modifies the current layer of the chain.
    fn check_transversal_augmentation(&mut self, p: Permutation) {
        let mut record = self.chain[self.current_pos].clone();
        let mut to_check = VecDeque::from_iter(record.transversal.keys().copied());
        let mut new_transversal = HashMap::new();
        while !to_check.is_empty() {
            let orbit_element = to_check.pop_back().unwrap();
            let new_image = p.apply(orbit_element);

            // If we already saw the element
            if !(record.transversal.contains_key(&new_image)
                || new_transversal.contains_key(&new_image))
            {
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
            // For each generator (and p)
            for generator in std::iter::once(&p).chain(record.gens.generators()) {
                let new_image = generator.apply(orbit_element);

                // If we have already seen the image
                if !record.transversal.contains_key(&new_image) {
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

    fn strong_generating_test(&self) -> bool {
        true
    }
}
