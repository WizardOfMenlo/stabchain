use crate::group::orbit::abstraction::FactoredTransversalResolver;
use crate::group::orbit::transversal::factored_transversal::{
    factored_transversal_complete_opt, representative_raw, representative_raw_as_word,
};
use crate::group::stabchain::element_testing::{
    is_in_group, residue_as_words, residue_as_words_from_words,
};
use crate::group::stabchain::{MovedPointSelector, Stabchain, StabchainRecord};
use crate::group::utils::{
    apply_permutation_word, collapse_perm_word, random_subproduct_full, random_subproduct_subset,
    random_subproduct_word_full, random_subproduct_word_subset,
};
use crate::group::Group;
use crate::perm::Permutation;
use itertools::Itertools;
use rand::rngs::ThreadRng;
use rand::seq::{IteratorRandom, SliceRandom};
use rand::thread_rng;
use std::cmp::min;
use std::collections::{HashMap, VecDeque};
use std::iter::Iterator;
use std::iter::{repeat_with, FromIterator};

const C: f32 = 10.0;
//Constants for subproduct generation
const C1: usize = 10;
const C2: usize = 10;
const ORBIT_BOUND: usize = 50;
const BASE_BOUND: usize = 5;
// Cosntants for the Strong Generating Test.
const C3: usize = 10;
const C4: usize = 10;

// Helper struct, used to build the stabilizer chain

pub struct StabchainBuilderRandom<T: MovedPointSelector> {
    current_pos: usize,
    chain: Vec<StabchainRecord<FactoredTransversalResolver>>,
    selector: T,
    n: usize,
    base: Vec<usize>,
    rng: ThreadRng,
    up_to_date: usize,
}
#[allow(dead_code)] //TODO remove
impl<T: MovedPointSelector> StabchainBuilderRandom<T> {
    pub fn new(selector: T) -> Self {
        StabchainBuilderRandom {
            current_pos: 0,
            chain: Vec::new(),
            selector,
            n: 0,
            base: Vec::new(),
            rng: thread_rng(),
            up_to_date: 0,
        }
    }

    fn bottom_of_the_chain(&self) -> bool {
        self.current_pos == self.chain.len()
    }

    fn current_chain(&self) -> impl Iterator<Item = &StabchainRecord<FactoredTransversalResolver>> {
        self.chain.iter().skip(self.current_pos)
    }

    pub(super) fn build(self) -> Stabchain<FactoredTransversalResolver> {
        Stabchain { chain: self.chain }
    }

    fn construct_strong_generating_set(&mut self, group: &Group, upper_bound: usize) {
        //Edge case for trivial group.
        if group.generators().is_empty() {
            return;
        }
        //Find the largest moved point of any generator, i.e find which size of the symmetric group the generators are from.
        self.n = group
            .generators
            .iter()
            .map(|gen| gen.lmp().expect("Should not be the identity."))
            .max()
            .unwrap_or(0);
        let mut upper_bound = upper_bound;
        let moved_point = 0; //todo check if this is correct?
        let record = StabchainRecord::new(
            moved_point,
            group.clone(),
            [(moved_point, Permutation::id())].iter().cloned().collect(),
        );
        self.base.push(moved_point);
        debug_assert!(self.base.len() == 1);
        self.chain.push(record);
        for g in group.generators() {
            // If g has a non trivial residue
            if !is_in_group(self.current_chain(), &g) {
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
                // Perform the strong generator test
                self.strong_generating_test();
            }
        }
    }

    /// Generate new elements of the subgroup in order to complete it.
    fn complete_stabchain_subgroup(
        &mut self,
        g: Permutation,
        layer: usize,
        upper_bound: usize,
    ) -> bool {
        let previous_pos = self.current_pos;
        self.current_pos = layer;
        self.check_transversal_augmentation(g);
        let mut trivial_residues = 0;
        let trivial_residues_required = (C * (self.n as f32).ln()).ceil() as i32;
        let subset_size = min(
            self.n,
            upper_bound * (upper_bound as f32).ln().floor() as usize,
        );
        //Repeat until we have a certain number of random schrier generators result in trivial residues.
        while trivial_residues < trivial_residues_required {
            //TODO move 64 to constant
            let random_generations = 64.0
                * self
                    .current_chain()
                    .map(|record| (record.transversal.len() as f64).ln())
                    .sum::<f64>();
            for _ in 0..random_generations as i32 {
                let h = self.random_schrier_generator();
                //Get the coset representation of h.
                let h_as_words = residue_as_words(self.current_chain(), &h);
                let b_dash = (0..self.n).choose_multiple(&mut self.rng, subset_size);
                //Check if any points in base union base_dash are fixed by the permutation h.
                //TODO should only be union of base and b_dash. Won't affect things, just wasted effort.
                if self
                    .base
                    .clone()
                    .into_iter()
                    .chain(b_dash.clone())
                    .any(|b| h_as_words.iter().fold(b, |x, perm| perm.apply(x)) != b)
                {
                    //Check if h fixes all points of B, then add it as a base point.
                    if self
                        .base
                        .clone()
                        .into_iter()
                        .all(|b| h_as_words.iter().fold(b, |x, perm| perm.apply(x)) == b)
                    {
                        //Search for a new base point that h moves.
                        let new_base_point = b_dash
                            .into_iter()
                            .find(|&b| h_as_words.iter().fold(b, |x, perm| perm.apply(x)) != b)
                            .expect("This point should exist");
                        debug_assert!(!self.base.contains(&new_base_point));
                        self.base.push(new_base_point);
                        dbg!(&self.base);
                        let record = StabchainRecord::new(
                            new_base_point,
                            Group::new(&[]),
                            [(new_base_point, Permutation::id())]
                                .iter()
                                .cloned()
                                .collect(),
                        );
                        self.chain.push(record);
                    }
                    //Evaluate h as a permutation.
                    let h = h_as_words
                        .iter()
                        .fold(Permutation::id(), |accum, perm| accum.multiply(perm));
                    //h should not be the identity, as it moves a point of the base.
                    debug_assert!(!h.is_id());
                    let j_dash = self.selector.moved_point(&h);
                    for k in (layer + 1..=j_dash).rev() {
                        self.complete_stabchain_subgroup(h.clone(), k, upper_bound);
                    }
                } else {
                    trivial_residues += 1;
                }
            }
        }
        //Reset the current position to what it was previously.
        self.current_pos = previous_pos;
        true
    }

    /// Generate a permutation that is with high probably a schrier generator for the current subgroup.
    fn random_schrier_generator_word(
        &mut self,
        subproducts: usize,
        coset_representatives: usize,
        gens: &[Permutation],
    ) -> Vec<Vec<Permutation>> {
        //Sum of all "depths". In reality the transversal doesn't have a depth, so we use this as a upper bound.
        let t = self
            .current_chain()
            .map(|record| (record.transversal.len() as f64).log2())
            .sum::<f64>()
            .floor() as usize;
        let record = &self.chain[self.current_pos];
        let k = rand::Rng::gen_range(&mut self.rng, 0, gens.len() / 2 + 1);
        //Create an iterator of subproducts w and w2
        let subproduct_w1_iter =
            repeat_with(|| random_subproduct_word_full(&mut self.rng.clone(), &gens[..]))
                .take(subproducts);
        let subproduct_w2_iter =
            repeat_with(|| random_subproduct_word_subset(&mut self.rng.clone(), &gens[..], k))
                .take(subproducts);
        //Iterleave the two iterators.
        let subproduct_iter: Vec<Vec<Permutation>> =
            subproduct_w1_iter.interleave(subproduct_w2_iter).collect();
        // Iterator of random coset representatives.
        let g_iter = repeat_with(|| {
            record
                .transversal
                .keys()
                .choose(&mut self.rng.clone())
                .map(|point| {
                    vec![
                        representative_raw(&record.transversal, record.base, point.clone())
                            .unwrap(),
                    ]
                })
                .expect("should be present")
        })
        .take(subproducts * t);
        //Create an iterator that contains combintations of each coset representative with each pair of subproducts.
        g_iter
            .flat_map(|g| {
                subproduct_iter.iter().map(move |w| {
                    let mut gw = g.clone();
                    gw.extend(w.clone());
                    gw
                })
            })
            .collect()
    }

    /// Generate a permutation that is with high probably a schrier generator for the current subgroup.
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
        debug_assert!(coset_representative.apply(record.base) == *point);
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
        //This is equivalent to w1*(*g^e)*w2 where e is generated from a uniform distribution in [0,1]
        let subword = if rand::Rng::gen::<bool>(&mut self.rng) {
            w1.multiply(&w2)
        } else {
            w1.multiply(&g).multiply(&w2)
        };
        let uw = coset_representative.multiply(&subword);
        //Get the residue of coset_representative*subword
        let residue_as_words = residue_as_words(self.current_chain(), &uw);
        //Take it's inverse as a word, i.e reverse the order and replace each entry with the inverse.
        let residue_inverse_as_word = residue_as_words.iter().map(|p| p.inv()).rev();
        //Combine everything together as a single permutation.
        residue_inverse_as_word.fold(uw, |accum, p| accum.multiply(&p))
    }

    /// Check if adding a new element modifies the current layer of the chain.
    fn check_transversal_augmentation(&mut self, p: Permutation) {
        let mut record = self.chain[self.current_pos].clone();
        // If this element is already a generator, then we can exit
        let mut to_check = VecDeque::from_iter(record.transversal.keys().copied());
        let mut new_transversal = HashMap::new();
        while !to_check.is_empty() {
            let orbit_element = to_check.pop_back().unwrap();
            let new_image = p.apply(orbit_element);

            // If we haven't seen this element.
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

                // If we haven't already seen the image
                if !record.transversal.contains_key(&new_image) {
                    // Store in transversal
                    record.transversal.insert(new_image, generator.inv());

                    // Update and ask to check the new image
                    to_check.push_back(new_image);
                }
            }
        }
        // Update the generators adding p if it isn't already present.
        if !record.gens.generators().contains(&p) {
            record.gens =
                Group::from_iter(std::iter::once(&p).chain(record.gens.generators()).cloned());
        }
        // Store the updated record in the chain
        self.chain[self.current_pos] = record;
    }

    fn sgc(&mut self) {
        let mut record = self.chain[self.current_pos].clone();
        //If the transvesal hasn't been calculated, then calculate it. Shouldn't need the second check, as the trivial group should have an orbit?
        if record.transversal.is_empty() && record.group().generators().is_empty() {
            record.transversal = factored_transversal_complete_opt(&record.group(), record.base);
        }
        let random_generations = 64.0
            * self
                .current_chain()
                .map(|record| (record.transversal.len() as f64).ln())
                .sum::<f64>();
        //To see if all generators are discarded.
        let mut all_discarded = true;
        let gens = self
            .current_chain()
            .flat_map(|record| record.gens.generators())
            .map(|f| f.clone())
            .collect::<Vec<Permutation>>();
        for h in self.random_schrier_generator_word(C1, C2, &gens[..]) {
            let (sift, h_residue) = residue_as_words_from_words(self.current_chain(), &h);
            if sift {
                //Pick the points that should be evaluated.
                let evaluated_points: Vec<usize> = if record.transversal.len() <= ORBIT_BOUND {
                    (0..self.n).collect()
                } else if self.base.len() <= BASE_BOUND {
                    record
                        .transversal
                        .keys()
                        .choose_multiple(&mut self.rng, BASE_BOUND)
                        .into_iter()
                        .map(|x| x.clone())
                        .collect()
                } else {
                    record
                        .transversal
                        .keys()
                        .choose_multiple(&mut self.rng, self.base.len())
                        .into_iter()
                        .map(|x| x.clone())
                        .collect()
                };
                //If any point is not fixed by the residue
                if !self.is_trivial_residue(&h_residue, evaluated_points) {
                    //Not all permutations have been discarded
                    all_discarded = false;
                    let h_star = h_residue
                        .iter()
                        .fold(Permutation::id(), |accum, perm| accum.multiply(perm));
                    //Add this residue as a generator
                    record.gens.generators.push(h_star.clone());
                    //TODO check if this is the correct location
                    self.check_transversal_augmentation(h_star.clone());
                    //Add a new base point, along with a new record for that base point.
                    let new_base_point = self.selector.moved_point(&h_star);
                    debug_assert!(!self.base.contains(&new_base_point));
                    self.base.push(new_base_point);
                    let record = StabchainRecord::new(
                        new_base_point,
                        Group::new(&[]),
                        [(new_base_point, Permutation::id())]
                            .iter()
                            .cloned()
                            .collect(),
                    );
                    self.chain.push(record);
                    //Now up to date beneath the newly added point.
                    self.up_to_date = self.base.len();
                }
            } else {
                let h_star = h_residue
                    .iter()
                    .fold(Permutation::id(), |accum, perm| accum.multiply(perm));
                record.gens.generators.push(h_star);
                //Find the position at which this didn't sift through.
                let j = self.current_pos + h_residue.len() - h.len();
                //Consider the chain now up to date below level j.
                self.up_to_date = j;
            }
            if all_discarded {
                self.up_to_date = self.current_pos - 1;
            }
        }
        self.sgt();
        //SGC terminates if it is up to date at position 0; otherwise moving onto the next layers.
        if self.up_to_date != 0 {
            self.current_pos += 1;
            self.sgc();
        }
    }

    fn sgt(&mut self) {
        //Should be at the top of the chain, I think.
        debug_assert!(self.current_pos == 0);
        //The union of the generator sets in the chain to this point.
        let gens = self
            .current_chain()
            .flat_map(|record| record.gens.generators())
            .map(|f| f.clone())
            .collect::<Vec<Permutation>>();
        //Create an iterator that first has the original generators, and then the random schrier generators.
        let products: Vec<Vec<Permutation>> = self.chain[0]
            .gens
            .generators
            .clone()
            .iter()
            .map(|p| vec![p.clone()])
            .chain(self.random_schrier_generator_word(C3, C4, &gens[..]))
            .collect();
        //Sift the original generators, and all products of the form g*w_{1,2}.
        for p in products {
            self.sgt_test(&p);
        }
    }

    fn sgt_test(&mut self, p: &Vec<Permutation>) {
        let (sift, residue) = residue_as_words_from_words(self.current_chain(), p);
        let original_position = self.current_pos;
        //This acts trivially on the current orbit.
        if self.is_trivial_residue_all_points(&residue) {
            //Can exit if the point sifted through, as it is the identity.
            if sift {
                return;
            }
            //Find the position at which this acted non-trivially.
            let j = self.current_pos + residue.len() - p.len();
            self.current_pos = j;
        } else {
            //This acts non-trivially on the current orbit.
            //Add this permutation to the generators of the current orbit, then invoke the strong generator constructor.
            self.chain[self.current_pos]
                .gens
                .generators
                .push(collapse_perm_word(p));
        }
        self.sgc();
        //Reset the position.
        self.current_pos = original_position;
    }

    /// Wrapper function to check all points of the permutation domain.
    fn is_trivial_residue_all_points(&self, p_as_words: &Vec<Permutation>) -> bool {
        self.is_trivial_residue(p_as_words, 0..self.n)
    }

    /// Check if a residue acts trivially on a set of points.
    fn is_trivial_residue(
        &self,
        p_as_words: &Vec<Permutation>,
        points: impl IntoIterator<Item = usize>,
    ) -> bool {
        points
            .into_iter()
            .all(|x| apply_permutation_word(p_as_words.iter(), x) == x)
    }

    /// Test that we have a base and strong generating set, rectifying this if we do not.
    fn strong_generating_test(&mut self) {
        //Current position should be 0
        debug_assert!(self.current_pos == 0);
        for i in 0..self.chain.len() {
            //TODO see if a better bound can be achieved.
            let random_generations = 64.0
                * self
                    .current_chain()
                    .map(|record| (record.transversal.len() as f64).ln())
                    .sum::<f64>();
            for _ in 0..random_generations as i32 {
                let h = self.random_schrier_generator();
                let h_as_words = residue_as_words(self.current_chain(), &h);
                //TODO change to not evaluate all n points.
                let mut b_dash = 0..self.n;
                //Check if any points in base union base_dash are fixed by the permutation h.
                //TODO should only be union of base and b_dash. Won't affect things, just wasted effort.
                if b_dash.any(|b| h_as_words.iter().fold(b, |x, perm| perm.apply(x)) != b) {
                    //Check if h fixes all points of B, then add it as a base point.
                    if self
                        .base
                        .clone()
                        .into_iter()
                        .all(|b| h_as_words.iter().fold(b, |x, perm| perm.apply(x)) == b)
                    {
                        //Search for a new base point that h moves.
                        let new_base_point = b_dash
                            .into_iter()
                            .find(|&b| h_as_words.iter().fold(b, |x, perm| perm.apply(x)) != b)
                            .expect("This point should exist");
                        debug_assert!(!self.base.contains(&new_base_point));
                        self.base.push(new_base_point);
                        dbg!(&self.base);
                        let record = StabchainRecord::new(
                            new_base_point,
                            Group::new(&[]),
                            [(new_base_point, Permutation::id())]
                                .iter()
                                .cloned()
                                .collect(),
                        );
                        self.chain.push(record);
                    }
                    //Evaluate h as a permutation.
                    let h = h_as_words
                        .iter()
                        .fold(Permutation::id(), |accum, perm| accum.multiply(perm));
                    let i_dash = self.selector.moved_point(&h);
                    for k in (i + 1..=i_dash).rev() {
                        self.complete_stabchain_subgroup(h.clone(), k, self.n);
                    }
                }
            }
        }
    }
}

impl<M> super::Builder<FactoredTransversalResolver> for StabchainBuilderRandom<M>
where
    M: MovedPointSelector,
{
    fn set_generators(&mut self, gens: &Group) {
        self.construct_strong_generating_set(gens, 50); //TODO update upper bound
    }

    fn build(self) -> Stabchain<FactoredTransversalResolver> {
        Stabchain { chain: self.chain }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::group::orbit::abstraction::TransversalResolver;
    use crate::group::orbit::transversal::Transversal;
    use crate::group::stabchain::moved_point_selector::FmpSelector;
    fn check_well_formed_chain<V: TransversalResolver>(s: &Stabchain<V>) {
        let mut previous = None;
        for record in s.chain.iter() {
            let gens = record.group();
            let transversal = record.transversal();

            // Check the computed transversal, and the one computed from generators agree
            // We do not directly check the transversal since representatives are not unique
            assert_eq!(transversal.orbit(), gens.orbit(record.base));

            for elem in transversal.orbit().iter().copied() {
                assert_eq!(
                    elem,
                    transversal
                        .representative(elem)
                        .unwrap()
                        .apply(record.base())
                );
            }

            // Check that everything is stabilized correctly
            if !previous.is_none() {
                let stabilized = previous.unwrap();
                assert_eq!(gens.orbit(stabilized).len(), 1);
            }

            previous = Some(record.base);
        }
    }

    #[test]
    fn trivial_chain() {
        let g = Group::trivial();
        let mut builder = StabchainBuilderRandom::new(FmpSelector);
        builder.construct_strong_generating_set(&g, 10);
        let chain = builder.build();
        println!("{}", &chain);
        check_well_formed_chain(&chain);
        assert!(chain.is_empty());
    }

    #[test]
    fn symmetric_chain() {
        let g = Group::symmetric(4);
        let mut builder = StabchainBuilderRandom::new(FmpSelector);
        builder.construct_strong_generating_set(&g, 10);
        println!("{:?}", builder.base.clone());
        let chain = builder.build();
        check_well_formed_chain(&chain);
        println!("{}", chain);
        assert_eq!(24, chain.order())
    }
}
