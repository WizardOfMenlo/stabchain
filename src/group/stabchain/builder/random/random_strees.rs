use super::parameters::RandomAlgoParameters;
use crate::group::orbit::abstraction::FactoredTransversalResolver;
use crate::group::orbit::transversal::shallow_transversal::{
    representative_raw_as_word, shallow_transversal,
};
use crate::group::stabchain::element_testing::residue_as_words_from_words;
use crate::group::stabchain::{base::selectors::BaseSelector, order, Stabchain, StabchainRecord};
use crate::group::utils::{random_subproduct_word_full, random_subproduct_word_subset};
use crate::group::Group;
use crate::perm::actions::SimpleApplication;
use crate::perm::{impls::word::WordPermutation, Action, Permutation};
use crate::DetHashMap;
use itertools::Itertools;
use rand::prelude::SliceRandom;
use rand::rngs::ThreadRng;
use rand::{seq::IteratorRandom, Rng};
use std::cell::RefCell;
use std::collections::hash_map::Entry;
use std::collections::VecDeque;
use std::iter::{repeat_with, Iterator};

use std::fmt::Debug;

use tracing::{debug, trace};

// Helper struct, used to build the stabilizer chain
#[derive(Debug)]
pub struct StabchainBuilderRandomSTrees<P, S, A = SimpleApplication<P>, R = ThreadRng>
where
    A: Action<P, OrbitT = usize>,
    R: rand::Rng,
    P: Permutation,
{
    current_pos: usize,
    chain: Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>>,
    selector: S,
    action: A,
    // The maximum degree of the permutations this group generates.
    n: usize,
    base: Vec<A::OrbitT>,
    rng: RefCell<R>,
    //The chain is zero indexed, but this field is 1 indexed.
    //This is due to the end condition being when the chain is up to date below the index of the first record position, and this would be -1 with zero indexing.
    //For zero indexing this would have to be a signed type, which doesn't really seem worth it just to require one negative value at the end condition.
    up_to_date: usize,
    //Store the depths of each of the schrier trees.
    depths: Vec<DetHashMap<A::OrbitT, usize>>,
    max_depths: Vec<usize>,
    original_generators: Group<P>,
    constants: super::parameters::Constants,
}

impl<P, S, A, R> StabchainBuilderRandomSTrees<P, S, A, R>
where
    P: Permutation,
    S: BaseSelector<P, A::OrbitT>,
    A: Action<P, OrbitT = usize>,
    R: Rng + Clone,
{
    pub fn new(selector: S, action: A, params: RandomAlgoParameters<R>) -> Self {
        let (constants, random) = params.consts();
        StabchainBuilderRandomSTrees {
            current_pos: 0,
            chain: Vec::new(),
            selector,
            action,
            n: 0,
            base: Vec::new(),
            rng: RefCell::new(random),
            up_to_date: 1,
            depths: Vec::new(),
            max_depths: Vec::new(),
            original_generators: Group::new(&[]),
            constants,
        }
    }

    fn current_chain(
        &self,
    ) -> impl Iterator<Item = &StabchainRecord<P, FactoredTransversalResolver<A>, A>> {
        self.chain.iter().skip(self.current_pos)
    }

    pub(super) fn build(self) -> Stabchain<P, FactoredTransversalResolver<A>, A> {
        Stabchain { chain: self.chain }
    }

    fn construct_strong_generating_set(&mut self, group: &Group<P>) {
        trace!(group = %group, "Constructing Strong Generating Set");
        //Edge case for trivial group.
        if group.generators().is_empty() {
            return;
        }
        //Find the largest moved point of any generator, i.e find which size of the symmetric group the generators form a subgroup of.
        // The minus 1 is to account for this being zero indexed, e.g S_4 moves points 0..3.
        self.n = group.symmetric_super_order() - 1;
        //Pick the initial moved point.
        let moved_point = group
            .generators()
            .iter()
            .map(|p| self.selector.moved_point(p, 0))
            .min()
            .unwrap();
        //Create the top level record for this chain, and add it to the chain.
        let mut initial_gens = group.clone();
        self.original_generators = initial_gens.clone();
        let (transversal, initial_depth) = shallow_transversal(
            &mut initial_gens,
            moved_point,
            &self.action,
            &mut *self.rng.borrow_mut(),
        );
        debug!(group = %initial_gens, moved_point = moved_point, orbit=?transversal.keys(), "Adding initial record");
        let initial_record = StabchainRecord::new(moved_point, initial_gens, transversal);
        self.base.push(moved_point);
        self.max_depths.push(*initial_depth.values().max().unwrap());
        self.depths.push(initial_depth);
        self.chain.push(initial_record);
        self.sgc();
    }

    /// Generate a permutation that is with high probably a schrier generator for the current subgroup.
    fn random_schrier_generators_as_word(
        &self,
        subproducts: usize,
        coset_representatives: usize,
        gens: &[P],
    ) -> Vec<WordPermutation<P>> {
        debug!(
            level = self.current_pos,
            "Random generation of Schrier Generators"
        );
        // Sum of all the depths in the tree.
        let t: usize = self.max_depths.iter().sum();
        let record = &self.chain[self.current_pos];
        let k = rand::Rng::gen_range(&mut *self.rng.borrow_mut(), 0..1 + gens.len() / 2);
        //Create an iterator of subproducts w and w2
        let subproduct_w1_iter =
            repeat_with(|| random_subproduct_word_full(&mut *self.rng.borrow_mut(), gens));
        let subproduct_w2_iter =
            repeat_with(|| random_subproduct_word_subset(&mut *self.rng.borrow_mut(), gens, k));
        //Iterleave the two iterators.
        let subproduct_iter = subproduct_w1_iter
            .interleave(subproduct_w2_iter)
            .take(2 * subproducts);
        let cache = &mut *record.representative_cache.borrow_mut();
        //Precompute all coset representatives.
        let coset_reps: Vec<WordPermutation<P>> = record
            .transversal
            .keys()
            .map(|point| {
                cache
                    .entry(*point)
                    .or_insert_with(|| {
                        representative_raw_as_word(
                            &record.transversal,
                            record.base,
                            *point,
                            &self.action,
                            self.max_depths[self.current_pos],
                        )
                        .unwrap()
                    })
                    .clone()
            })
            .collect();
        // Iterator of random coset representatives.
        let g_iter =
            coset_reps.choose_multiple(&mut *self.rng.borrow_mut(), coset_representatives * t);
        //Create an iterator that contains combintations of each coset representative with each pair of subproducts.
        g_iter
            .zip(subproduct_iter.cycle())
            .map(|(g, w)| g.multiply(&w))
            .collect()
    }

    /// Check if adding a new element modifies the current layer of the chain.
    fn check_transversal_augmentation(&mut self, p: &P, level: usize, check_transversal: bool) {
        debug!(level = level, perm = %p, "Checking transversal augmentation with perm");
        let mut record = &mut self.chain[level];
        // We optionally check if this element alters the transversal
        if check_transversal
            && record
                .transversal
                .keys()
                .all(|x| record.transversal.contains_key(&p.apply(*x)))
        {
            // If there are any new orbit elements found, then we add this generator to this level.
            return;
        }
        debug_assert!(!record.gens.generators.contains(p));
        record.gens.generators.push(p.clone());
        // We now check if a new shallow transversal is required, or the new one will not exceed the depth.
        let mut recompute_transversal = false;
        // First partion points at maximum depth and those not.
        let max_depth = self.max_depths[self.current_pos];
        let (max_depth_points, mut to_check): (VecDeque<usize>, VecDeque<usize>) = self.depths
            [level]
            .keys()
            .cloned()
            .partition(|&x| x == max_depth);
        // If any point at maximum depth is augmented then we recompute, as this exceeds the current maximum depth.
        for x in max_depth_points {
            let application = self.action.apply(p, x);
            // If we find a point that exceeds the depth, then we need a new shallow transversal.
            if !record.transversal.contains_key(&application) {
                recompute_transversal = true;
                break;
            }
        }
        // If all points at max depth are fine, then check points at depth less than
        if !recompute_transversal {
            let mut new_transversal = DetHashMap::default();
            let mut new_depths = DetHashMap::default();
            while !to_check.is_empty() {
                let x = to_check.pop_front().unwrap();
                let current_depth = self.depths[level].get(&x).unwrap();
                let new_image = self.action.apply(p, x);
                if !(record.transversal.contains_key(&new_image)
                    || new_transversal.contains_key(&new_image))
                {
                    new_transversal.insert(new_image, p.inv());
                    new_depths.insert(new_image, current_depth + 1);
                }
            }
            to_check.extend(new_transversal.keys().cloned());
            // Update the transversal
            record.transversal.extend(new_transversal);
            self.depths[level].extend(new_depths);
            // Check the newly added points
            'element_checking: while !to_check.is_empty() {
                // Get the pair
                let orbit_element = to_check.pop_front().unwrap();
                let orbit_depth = *self.depths[level].get(&orbit_element).unwrap();
                // For each generator (and p)
                for generator in record.gens.generators() {
                    let new_image = self.action.apply(generator, orbit_element);
                    // If we haven't already seen the image
                    if let Entry::Vacant(e) = record.transversal.entry(new_image) {
                        // If we've reached the maximum depth then we need to stop and recompute.
                        if orbit_depth == max_depth {
                            recompute_transversal = true;
                            break 'element_checking;
                        } else {
                            e.insert(generator.inv());
                            self.depths[level].insert(new_image, orbit_depth + 1);
                            to_check.push_back(new_image)
                        }
                    }
                }
            }
        }
        //Calculate a new shallow transversal.
        if recompute_transversal {
            let (transversal, new_depth) = shallow_transversal(
                &mut record.gens,
                record.base,
                &self.action,
                &mut *self.rng.borrow_mut(),
            );
            record.transversal = transversal;
            //Update the depths of the current position.
            self.max_depths.push(*new_depth.values().max().unwrap());
            self.depths[level] = new_depth;
            // Clear the cache
            record.representative_cache.borrow_mut().clear();
        }
    }

    ///Check if the permutation augments the orbit at a level, resetting the position afterwards.
    fn check_transversal_augmentation_from_level(&mut self, level: usize, p: P) {
        // First check if this element alters any orbits higher up. We don't need to top level, as this is always complete from the initial gens.
        for i in 1..level {
            self.check_transversal_augmentation(&p, i, true)
        }
        self.check_transversal_augmentation(&p, level, false);
    }

    fn sgc(&mut self) {
        trace!(
            level = self.current_pos,
            "Strong Generating Set Construction"
        );
        let record = self.chain[self.current_pos].clone();
        //Number of base points than are in the current orbit.
        let b_star = self
            .base
            .iter()
            .filter(|&b| record.transversal.contains_key(b))
            .count();
        let gens = self.union_gen_set();
        //Random products of the form gw
        let mut random_gens =
            self.random_schrier_generators_as_word(self.constants.c1, self.constants.c2, &gens[..]);
        //Convert these into random schrier generators, by concatenating the resdiue of the inverse to it.
        random_gens.iter_mut().for_each(|gw| {
            //Get the residue of this word
            let (_, gw_bar) = residue_as_words_from_words(self.current_chain(), gw);
            //Append the inverse of the residue to the word, to get a schrier generator.
            gw_bar
                .into_iter()
                .map(|p| p.inv())
                .rev()
                .for_each(|p| gw.multiply_mut(&p));
        });
        //To see if all generators are discarded.
        let mut all_discarded = true;
        //If the element we are testing is the first schrier generator tested.
        let mut first_test = true;
        debug!(generators = random_gens.len(), "Sifting generators");
        for h in random_gens {
            let (drop_out_level, h_residue) = residue_as_words_from_words(self.current_chain(), &h);
            if self.sifted(drop_out_level) {
                //Pick the points that should be evaluated. This is a heuristic to speed up run times.
                let evaluated_points: Vec<A::OrbitT> =
                    if record.transversal.len() <= self.constants.orbit_bound {
                        //Evaluate on all points of the current orbit.
                        record.transversal.keys().cloned().collect()
                    } else if self.base.len() <= self.constants.base_bound {
                        //Evaluate on BASE_BOUND randomly chosen points.
                        record
                            .transversal
                            .keys()
                            .choose_multiple(&mut *self.rng.borrow_mut(), self.constants.base_bound)
                            .into_iter()
                            .cloned()
                            .collect()
                    } else {
                        //Evaluate on b_star randomly chosen points.
                        record
                            .transversal
                            .keys()
                            .choose_multiple(&mut *self.rng.borrow_mut(), b_star)
                            .into_iter()
                            .cloned()
                            .collect()
                    };
                //We have found a residue that has not sifted through, so we add a new base point with this point as a generator.
                if !h_residue.id_on_iter(evaluated_points) {
                    //Not all permutations have been discarded
                    all_discarded = false;
                    let h_star = h_residue.evaluate();
                    //Add a new base point, along with a new record for that base point.
                    self.add_new_record(h_star);
                } else if self.constants.quick_test && first_test {
                    //The quick test is only sifting one generator, and early exit if this sifts through.
                    break;
                }
            } else {
                //If any point is not fixed by the residue, then we add the residue as a generator.
                let h_star = h_residue.evaluate();
                //Find the position at which this didn't sift through.
                let j = self.current_pos + drop_out_level;
                debug!(perm = %h_star, level = j, "Permutation not sifting through");
                //Add as a generator and update the transversal.
                self.check_transversal_augmentation_from_level(j, h_star);
                //Consider the chain now up to date below level j + 1. The +1 is for 1 indexing.
                self.up_to_date = j + 1;
            }
            //This is now not the first element to be tested.
            first_test = false;
        }
        if all_discarded {
            debug!(level = self.current_pos, "All generators discarded");
            //Really is setting this to i - 1, but as the position is zero indexed it would be doing (i - 1 + 1).
            self.up_to_date = self.current_pos;
        }
        //SGC terminates if it is up to date at position 0; otherwise moving onto the next layers. Stop if we have reached the bottom of the chain
        if self.up_to_date != 0 && self.current_pos != self.chain.len() - 1 {
            self.current_pos += 1;
            self.sgc();
        } else {
            self.sgt();
        }
    }

    /// Test that the current strong generating set is indeed a strong generating set, returning true if it (probably) is.
    fn sgt(&mut self) {
        trace!("Strong Generating Test");
        let original_position = self.current_pos;
        //Should be at the top of the chain, I think.
        self.current_pos = 0;
        // If we know the order we can just check if the order is correct.
        if let Some(known_order) = self.constants.order.as_ref() {
            let current_order_val = order(self.chain.iter());
            if *known_order == current_order_val {
                // Call the sgc starting from the top level
                return;
            }
        }
        //The union of the generator sets in the chain to this point.
        let gens = self.union_gen_set();
        //Create an iterator that first has the original generators, and then the random schrier generators.
        let products: Vec<WordPermutation<P>> = self
            .original_generators
            .generators()
            .iter()
            .map(|p| WordPermutation::from_perm(p))
            .chain(self.random_schrier_generators_as_word(
                self.constants.c3,
                self.constants.c4,
                &gens[..],
            ))
            .collect();
        //Sift the original generators, and all products of the form g*w_{1,2}.
        for p in products {
            //If we have found a non-trivial element, then invoke the sgc at the specified level.
            if let Some(sgc_invoke_level) = self.sgt_test(&p) {
                self.current_pos = sgc_invoke_level;
                debug!(level = sgc_invoke_level, "SGT failed");
                self.sgc();
                break;
            };
        }
        // Make sure we don't exit without having the correct order.
        if let Some(known_order) = self.constants.order.as_ref() {
            if *known_order != order(self.chain.iter()) {
                // Call the sgc starting from the top level
                self.sgc();
            }
        }
        self.current_pos = original_position;
    }

    fn sgt_test(&mut self, p: &WordPermutation<P>) -> Option<usize> {
        let (drop_out_level, residue) = residue_as_words_from_words(self.current_chain(), p);
        //Check if this is a non-trivial residue. If it is then the output of the SGC is correct for this element.
        if !residue.id_on_iter(0..self.n) {
            let invoke_level = self.current_pos + drop_out_level;
            let collapsed_residue = residue.evaluate();
            //If this point sifted through but isn't trivial, then we need a new record and base point.
            if self.sifted(drop_out_level) {
                self.add_new_record(collapsed_residue);
            } else {
                //Otherwise add it to the generators at that level, and invoke the SGC at that level.
                self.check_transversal_augmentation_from_level(invoke_level, collapsed_residue);
                self.up_to_date = self.current_pos + drop_out_level + 1
            }
            Some(self.current_pos + drop_out_level)
        } else {
            None
        }
    }

    /// Add a new level to the chain, starting with this permutation.
    fn add_new_record(&mut self, gen: P) {
        let moved_point = self.selector.moved_point(&gen, self.current_pos);
        debug!(perm = %gen, moved_point = moved_point, "Extending chain");
        let mut gens = Group::new(&[gen]);
        let (transversal, depth) = shallow_transversal(
            &mut gens,
            moved_point,
            &self.action,
            &mut *self.rng.borrow_mut(),
        );
        let initial_record = StabchainRecord::new(moved_point, gens, transversal);
        self.base.push(moved_point);
        self.max_depths.push(*depth.values().max().unwrap());
        self.depths.push(depth);
        self.chain.push(initial_record);
        self.up_to_date = self.base.len() + 1;
    }

    //Utility function to check if a given drop out level is the bottom of the chain.
    fn sifted(&self, drop_out_level: usize) -> bool {
        self.current_pos + drop_out_level == self.chain.len()
    }

    // Take the union of the generating sets from current position onwards.
    fn union_gen_set(&self) -> Vec<P> {
        let mut gen_set = Vec::new();
        for p in self
            .current_chain()
            .flat_map(|record| record.gens.generators())
        {
            if !gen_set.contains(p) {
                gen_set.push(p.clone())
            }
        }
        gen_set
    }
}

impl<P, S, A, R> crate::group::stabchain::builder::Builder<P, FactoredTransversalResolver<A>, A>
    for StabchainBuilderRandomSTrees<P, S, A, R>
where
    P: Permutation,
    A: Action<P, OrbitT = usize>,
    S: BaseSelector<P, A::OrbitT>,
    R: Rng + Clone + Debug,
{
    fn set_generators(&mut self, gens: &Group<P>) {
        self.construct_strong_generating_set(gens);
    }

    fn build(self) -> Stabchain<P, FactoredTransversalResolver<A>, A> {
        self.build()
    }
}
