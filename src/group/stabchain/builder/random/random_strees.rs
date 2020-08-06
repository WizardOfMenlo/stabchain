use crate::group::orbit::abstraction::FactoredTransversalResolver;
use crate::group::orbit::transversal::shallow_transversal::{
    representative_raw_as_word, shallow_transversal,
};
use crate::group::stabchain::element_testing::residue_as_words_from_words;
use crate::group::stabchain::{MovedPointSelector, Stabchain, StabchainRecord};
use crate::group::utils::{
    apply_permutation_word, collapse_perm_word, random_subproduct_word_full,
    random_subproduct_word_subset,
};
use crate::group::Group;
use crate::perm::actions::SimpleApplication;
use crate::perm::{Action, Permutation};
use itertools::Itertools;
use rand::rngs::ThreadRng;
use rand::{seq::IteratorRandom, Rng};
use std::cell::RefCell;
use std::iter::{repeat_with, Iterator};

//Constants for subproduct generation
const C1: usize = 1;
const C2: usize = 1;
const ORBIT_BOUND: usize = 50;
const BASE_BOUND: usize = 5;
// Cosntants for the Strong Generating Test.
const C3: usize = 1;
const C4: usize = 1;

// Helper struct, used to build the stabilizer chain

pub struct StabchainBuilderRandomSTrees<P, S, A = SimpleApplication<P>, R = ThreadRng>
where
    A: Action<P, OrbitT = usize>,
    R: rand::Rng,
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
    depths: Vec<usize>,
    original_generators: Group<P>,
}

impl<P, S, A, R> StabchainBuilderRandomSTrees<P, S, A, R>
where
    P: Permutation,
    S: MovedPointSelector<P, A::OrbitT>,
    A: Action<P, OrbitT = usize>,
    R: Rng + Clone,
{
    pub fn new(selector: S, action: A, random: R) -> Self {
        StabchainBuilderRandomSTrees {
            current_pos: 0,
            chain: Vec::new(),
            selector,
            action,
            n: 0,
            base: Vec::new(),
            rng: RefCell::new(random),
            up_to_date: 1,
            depths: vec![],
            original_generators: Group::new(&[]),
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
        //Edge case for trivial group.
        if group.generators().is_empty() {
            return;
        }
        //Find the largest moved point of any generator, i.e find which size of the symmetric group the generators form a subgroup of.
        // The minus 1 is to account for this being zero indexed, e.g S_4 moves points 0..3.
        self.n = group.symmetric_super_order() - 1;
        //Pick an initial generator for the moved point.
        //This is required so that the moved point selector can consume any fields it may have, e.g with a fixed base.
        let moved_point_generator = group
            .generators
            .iter()
            .min_by(|g1, g2| {
                self.selector
                    .clone()
                    .moved_point(g1)
                    .cmp(&self.selector.clone().moved_point(g2))
            })
            .unwrap();
        let moved_point = self.selector.moved_point(moved_point_generator);
        //Create the top level record for this chain, and add it to the chain.
        //TODO check if you should add generators 1 by 1, in case there are redundant generators.
        let mut initial_gens = group.clone();
        self.original_generators = initial_gens.clone();
        let (transversal, initial_depth) = shallow_transversal(
            &mut initial_gens,
            moved_point,
            &self.action,
            &mut *self.rng.borrow_mut(),
        );
        let initial_record = StabchainRecord::new(moved_point, initial_gens, transversal);
        self.base.push(moved_point);
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
    ) -> Vec<Vec<P>> {
        // Sum of all the depths in the tree.
        let t: usize = self.depths.iter().sum();
        let record = &self.chain[self.current_pos];
        let k = rand::Rng::gen_range(&mut *self.rng.borrow_mut(), 0, 1 + gens.len() / 2);
        //Create an iterator of subproducts w and w2
        let subproduct_w1_iter =
            repeat_with(|| random_subproduct_word_full(&mut *self.rng.borrow_mut(), &gens[..]));
        let subproduct_w2_iter = repeat_with(|| {
            random_subproduct_word_subset(&mut *self.rng.borrow_mut(), &gens[..], k)
        });
        //Iterleave the two iterators.
        let subproduct_iter: Vec<Vec<P>> = subproduct_w1_iter
            .interleave(subproduct_w2_iter)
            .take(2 * subproducts)
            .collect();
        //TODO check if precalculating all transversal elements would be faster.
        // Iterator of random coset representatives.
        let g_iter = repeat_with(|| {
            record
                .transversal
                .keys()
                .choose(&mut *self.rng.borrow_mut())
                .map(|point| {
                    representative_raw_as_word(
                        &record.transversal,
                        record.base,
                        *point,
                        &self.action,
                        self.depths[self.current_pos],
                    )
                    .unwrap()
                })
                .expect("should be present")
        })
        .take(coset_representatives * t);
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

    /// Check if adding a new element modifies the current layer of the chain.
    fn check_transversal_augmentation(&mut self, p: P) {
        let mut record = &mut self.chain[self.current_pos];
        debug_assert!(!record.gens.generators.contains(&p));
        record.gens.generators.push(p);
        //Calculate a new shallow transversal.
        let (transversal, new_depth) = shallow_transversal(
            &mut record.gens,
            record.base,
            &self.action,
            &mut *self.rng.borrow_mut(),
        );
        record.transversal = transversal;
        //Update the depths of the current position.
        self.depths[self.current_pos] = new_depth;
    }

    ///Check if the permutation augments the orbit at a level, resetting the position afterwards.
    fn check_transversal_augmentation_at_level(&mut self, level: usize, p: P) {
        let previous_pos = self.current_pos;
        self.current_pos = level;
        self.check_transversal_augmentation(p);
        self.current_pos = previous_pos;
    }

    fn sgc(&mut self) {
        let record = self.chain[self.current_pos].clone();
        //Number of base points than are in the current orbit.
        let b_star = self
            .base
            .iter()
            .filter(|&b| record.transversal.contains_key(b))
            .cloned()
            .collect::<Vec<A::OrbitT>>();
        let gens = self
            .current_chain()
            .flat_map(|record| record.gens.generators())
            .cloned()
            .collect::<Vec<P>>();
        //Random products of the form gw
        let mut random_gens = self.random_schrier_generators_as_word(C1, C2, &gens[..]);
        //Convert these into random schrier generators, by concatenating the resdiue of the inverse to it.
        random_gens.iter_mut().for_each(|gw| {
            //Get the residue of this word
            let (_, gw_bar) = residue_as_words_from_words(self.current_chain(), &gw.clone());
            //Append the inverse of the residue to the word, to get a schrier generator.
            gw.extend(gw_bar.iter().map(|p| p.inv()).rev());
        });
        //To see if all generators are discarded.
        let mut all_discarded = true;
        for h in random_gens {
            let (drop_out_level, h_residue) = residue_as_words_from_words(self.current_chain(), &h);
            if self.sifted(drop_out_level) {
                //Pick the points that should be evaluated. This is a heuristic to speed up run times.
                let evaluated_points: Vec<A::OrbitT> = if record.transversal.len() <= ORBIT_BOUND {
                    //Evaluate on all points of the current orbit.
                    record.transversal.keys().cloned().collect()
                } else if self.base.len() <= BASE_BOUND {
                    //Evaluate on BASE_BOUND randomly chosen points.
                    record
                        .transversal
                        .keys()
                        .choose_multiple(&mut *self.rng.borrow_mut(), BASE_BOUND)
                        .into_iter()
                        .cloned()
                        .collect()
                } else {
                    //Evaluate on b_star randomly chosen points.
                    record
                        .transversal
                        .keys()
                        .choose_multiple(&mut *self.rng.borrow_mut(), b_star.len())
                        .into_iter()
                        .cloned()
                        .collect()
                };
                //If any point is not fixed by the residue, then we add the residue as a generator.
                if !self.is_trivial_residue(&h_residue, evaluated_points) {
                    //Not all permutations have been discarded
                    all_discarded = false;
                    let h_star = collapse_perm_word(&h_residue);
                    //Add a new base point, along with a new record for that base point.
                    let new_base_point = self.selector.moved_point(&h_star);
                    //self.check_transversal_augmentation(h_star);
                    debug_assert!(!self.base.contains(&new_base_point));
                    self.base.push(new_base_point);
                    //Fields for the new record.
                    let mut gens = Group::new(&[h_star]);
                    let (transversal, depths) = shallow_transversal(
                        &mut gens,
                        new_base_point,
                        &self.action,
                        &mut *self.rng.borrow_mut(),
                    );
                    let record = StabchainRecord::new(new_base_point, gens, transversal);
                    self.depths.push(depths);
                    self.chain.push(record);
                    //Now up to date beneath the newly added point.
                    self.up_to_date = self.base.len() + 1;
                }
            } else {
                //We have found a residue that has not sifted through, so we add a new base point with this point as a generator.
                let h_star = collapse_perm_word(&h_residue);
                //Find the position at which this didn't sift through.
                let j = self.current_pos + drop_out_level;
                //Add as a generator and update the transversal.
                self.check_transversal_augmentation_at_level(j, h_star);
                //Consider the chain now up to date below level j + 1. The +1 is for 1 indexing.
                self.up_to_date = j + 1;
            }
        }
        if all_discarded {
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
        let original_position = self.current_pos;
        //Should be at the top of the chain, I think.
        self.current_pos = 0;
        //The union of the generator sets in the chain to this point.
        let gens = self
            .chain
            .iter()
            .flat_map(|record| record.gens.generators())
            .cloned()
            .collect::<Vec<P>>();
        //Create an iterator that first has the original generators, and then the random schrier generators.
        let products: Vec<Vec<P>> = self
            .original_generators
            .generators()
            .iter()
            .map(|p| vec![p.clone()])
            .chain(self.random_schrier_generators_as_word(C3, C4, &gens[..]))
            .collect();
        //Sift the original generators, and all products of the form g*w_{1,2}.
        for p in products {
            //If we have found a non-trivial element, then invoke the sgc at the specified level.
            if let Some(sgc_invoke_level) = self.sgt_test(&p[..]) {
                self.current_pos = sgc_invoke_level;
                self.sgc();
                break;
            };
        }
        self.current_pos = original_position;
    }

    fn sgt_test(&mut self, p: &[P]) -> Option<usize> {
        let (drop_out_level, residue) = residue_as_words_from_words(self.current_chain(), p);
        //Check if this is a non-trivial residue. If it is then the output of the SGC is correct for this element.
        if !self.is_trivial_residue_all_points(&residue) {
            let invoke_level = self.current_pos + drop_out_level;
            let collapsed_residue = collapse_perm_word(&residue);
            //If this point sifted through but isn't trivial, then we need a new record and base point.
            if self.sifted(drop_out_level) {
                //TODO add function to add a new level
                let moved_point = self.selector.moved_point(&collapsed_residue);
                let mut gens = Group::new(&[collapsed_residue]);
                let (transversal, depth) = shallow_transversal(
                    &mut gens,
                    moved_point,
                    &self.action,
                    &mut *self.rng.borrow_mut(),
                );
                let initial_record = StabchainRecord::new(moved_point, gens, transversal);
                self.base.push(moved_point);
                self.depths.push(depth);
                self.chain.push(initial_record);
                self.up_to_date = self.base.len() + 1;
            } else {
                //Otherwise add it to the generators at that level, and invoke the SGC at that level.
                self.check_transversal_augmentation_at_level(invoke_level, collapsed_residue);
                self.up_to_date = self.current_pos + drop_out_level + 1
            }
            Some(self.current_pos + drop_out_level)
        } else {
            None
        }
    }

    /// Wrapper function to check all points of the permutation domain.
    fn is_trivial_residue_all_points(&self, p_as_words: &[P]) -> bool {
        self.is_trivial_residue(p_as_words, 0..self.n)
    }

    /// Check if a residue acts trivially on a set of points.
    /// This is just done by checking that the given permutation fixes all given points.
    fn is_trivial_residue(
        &self,
        p_as_words: &[P],
        points: impl IntoIterator<Item = A::OrbitT>,
    ) -> bool {
        points
            .into_iter()
            .all(|x| apply_permutation_word(p_as_words, x, &self.action) == x)
    }

    //Utility function to check if a given drop out level is the bottom of the chain.
    fn sifted(&self, drop_out_level: usize) -> bool {
        self.current_pos + drop_out_level == self.chain.len()
    }
}

impl<P, S, A, R> crate::group::stabchain::builder::Builder<P, FactoredTransversalResolver<A>, A>
    for StabchainBuilderRandomSTrees<P, S, A, R>
where
    P: Permutation,
    A: Action<P, OrbitT = usize>,
    S: MovedPointSelector<P, A::OrbitT>,
    R: Rng + Clone,
{
    fn set_generators(&mut self, gens: &Group<P>) {
        self.construct_strong_generating_set(gens);
    }

    fn build(self) -> Stabchain<P, FactoredTransversalResolver<A>, A> {
        self.build()
    }
}
