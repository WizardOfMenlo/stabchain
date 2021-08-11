use super::parameters::RandomAlgoParameters;
use crate::group::orbit::abstraction::FactoredTransversalResolver;
use crate::group::orbit::transversal::shallow_transversal::{
    representative_raw_as_word, shallow_transversal,
};
use crate::group::random_perm::RandPerm;
use crate::group::stabchain::element_testing::residue_as_words_from_words;
use crate::group::stabchain::{base::selectors::BaseSelector, order, Stabchain, StabchainRecord};
use crate::group::utils::{random_subproduct_word_full, random_subproduct_word_subset};
use crate::group::Group;
use crate::perm::actions::SimpleApplication;
use crate::perm::{impls::word::WordPermutation, Action, Permutation};
use crate::DetHashMap;
use itertools::Itertools;
use num::BigUint;
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

    fn full_chain(
        &self,
    ) -> impl Iterator<Item = &StabchainRecord<P, FactoredTransversalResolver<A>, A>> {
        self.chain.iter()
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
        bar_func: bool,
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
        // First create coset_representative * t random coset reprensentatives.
        //Precompute all coset representatives if we'll be selecting more than there are in the orbit
        let mut gens: Vec<WordPermutation<P>> = {
            let cache = &mut *record.representative_cache.borrow_mut();
            if coset_representatives * t >= record.transversal.len() {
                record
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
                    .choose_multiple(&mut *self.rng.borrow_mut(), coset_representatives * t)
            } else {
                record
                    .transversal
                    .keys()
                    .choose_multiple(&mut *self.rng.borrow_mut(), coset_representatives * t)
                    .iter()
                    .map(|&&point| {
                        cache
                            .entry(point)
                            .or_insert_with(|| {
                                representative_raw_as_word(
                                    &record.transversal,
                                    record.base,
                                    point,
                                    &self.action,
                                    self.max_depths[self.current_pos],
                                )
                                .unwrap()
                            })
                            .clone()
                    })
                    .collect()
            }
        };
        //Combine each generator with a random subproduct.
        gens.iter_mut()
            .zip(subproduct_iter.cycle())
            .for_each(|(g, w)| g.multiply_mut_word(&w));
        // Optionally apply bar func to get possible schrier generators
        if bar_func {
            let mut bar_gens = Vec::with_capacity(gens.len());
            // Drain to avoid reallocation for words.
            for mut gw in gens.drain(0..gens.len() - 1) {
                let gw_bar_opt = self.bar_func(&gw);
                // We need to filter any cases where the bar function can fail.
                if let Some(mut gw_bar) = gw_bar_opt {
                    gw_bar.inv_lazy_mut();
                    gw.multiply_mut_word(&gw_bar);
                    bar_gens.push(gw_bar)
                }
            }
            bar_gens
        } else {
            gens
        }
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
        let random_gens = self.random_schrier_generators_as_word(
            self.constants.c1,
            self.constants.c2,
            &gens[..],
            true,
        );
        //To see if all generators are discarded.
        let mut all_discarded = true;
        //If the element we are testing is the first schrier generator tested.
        let mut first_test = true;
        debug!(generators = random_gens.len(), "Sifting generators");
        for h in random_gens {
            let (drop_out_level, h_residue) = residue_as_words_from_words(self.full_chain(), &h);
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
                // Not all permutation have been discarded.
                all_discarded = false;
                //If any point is not fixed by the residue, then we add the residue as a generator.
                let h_star = h_residue.evaluate();
                debug!(perm = %h_star, level = drop_out_level, "Permutation not sifting through");
                //Add as a generator and update the transversal.
                self.check_transversal_augmentation_from_level(drop_out_level, h_star);
                //Consider the chain now up to date below drop out level
                self.current_pos = drop_out_level;
            }
            //This is now not the first element to be tested.
            first_test = false;
        }
        if all_discarded {
            debug!(level = self.current_pos, "All generators discarded");
            // SGC terminates when we are up to date below position 0
            if self.current_pos == 0 {
                // Different strong generating tests depending on if we know the size or not.
                match self.constants.order.clone() {
                    Some(known_order) => {
                        self.sgt_size(known_order);
                    }
                    None => self.sgt(),
                }
                return;
            } else {
                self.current_pos -= 1;
            }
        // Check the order for an early exit, as we know that something new has been added.
        } else if self.constants.order.is_some()
            && self.constants.order == Some(order(self.full_chain()))
        {
            return;
        }
        // Continue with SGC.
        self.sgc();
    }

    /// Test that the current strong generating set is indeed a strong generating set, returning true if it (probably) is.
    fn sgt(&mut self) {
        trace!("Strong Generating Test");
        let original_position = self.current_pos;
        //Should be at the top of the chain, I think.
        debug_assert!(self.current_pos == 0);
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
                false,
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
        self.current_pos = original_position;
    }

    fn sgt_test(&mut self, p: &WordPermutation<P>) -> Option<usize> {
        let (drop_out_level, residue) = residue_as_words_from_words(self.full_chain(), p);
        //Check if this is a non-trivial residue. If it is then the output of the SGC is correct for this element.
        if !residue.id_on_iter(0..self.n) {
            let collapsed_residue = residue.evaluate();
            //If this point sifted through but isn't trivial, then we need a new record and base point.
            if self.sifted(drop_out_level) {
                self.add_new_record(collapsed_residue);
            } else {
                //Otherwise add it to the generators at that level, and invoke the SGC at that level.
                self.check_transversal_augmentation_from_level(drop_out_level, collapsed_residue);
                self.current_pos = drop_out_level;
            }
            Some(drop_out_level)
        } else {
            None
        }
    }

    /// Test that the current strong generating set is indeed a strong generating set using the size, returning true if it is.
    fn sgt_size(&mut self, size: BigUint) {
        trace!("Strong Generating Test");
        //Should be at the top of the chain, I think.
        self.current_pos = 0;
        if size == order(self.chain.iter()) {
            return;
        }
        //The union of the generator sets in the chain to this point.
        let mut gens = self.union_gen_set();
        let mut products: VecDeque<_> = self
            .original_generators
            .generators()
            .iter()
            .map(|p| WordPermutation::from_perm(p))
            .collect();
        gens.extend(self.original_generators.generators().iter().cloned());
        // // copy the rng to supply to the perm generator
        // let mut rng = self.rng.borrow().clone();
        // //Create an iterator that first has the original generators, and then the random schrier generators.
        // let mut random = RandPerm::new(11, &Group::new(&gens), 50, &mut rng);
        //Sift the original generators, and all products of the form g*w_{1,2}.
        while size != order(self.chain.iter()) {
            if products.is_empty() {
                products.extend(self.random_schrier_generators_as_word(
                    self.constants.c3,
                    self.constants.c4,
                    &gens[..],
                    false,
                ))
            }
            let p = products.pop_front().unwrap();
            let (drop_out_level, residue) = residue_as_words_from_words(self.full_chain(), &p);
            if !residue.id_on_iter(0..self.n) {
                let invoke_level = drop_out_level;
                let collapsed_residue = residue.evaluate();
                //If this point sifted through but isn't trivial, then we need a new record and base point.
                gens.push(collapsed_residue.clone());
                if self.sifted(drop_out_level) {
                    self.add_new_record(collapsed_residue);
                } else {
                    //Otherwise add it to the generators at that level, and invoke the SGC at that level.
                    self.check_transversal_augmentation_from_level(invoke_level, collapsed_residue);
                }
            }
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
        self.current_pos = self.base.len() - 1;
    }

    //Utility function to check if a given drop out level is the bottom of the chain.
    fn sifted(&self, drop_out_level: usize) -> bool {
        drop_out_level == self.chain.len()
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
    // Get permutation p_bar such that p.apply(base) == p_bar.apply(base)
    fn bar_func(&self, p: &WordPermutation<P>) -> Option<WordPermutation<P>> {
        let record = &self.chain[self.current_pos];
        let x = p.apply(record.base);
        if !record.transversal.contains_key(&x) {
            return None;
        }
        let p_bar = record
            .representative_cache
            .borrow_mut()
            .entry(x)
            .or_insert_with(|| {
                representative_raw_as_word(
                    &record.transversal,
                    record.base,
                    x,
                    &self.action,
                    self.max_depths[self.current_pos],
                )
                .unwrap()
            })
            .clone();
        debug_assert!(p.apply(record.base) == p_bar.apply(record.base));
        Some(p_bar)
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
