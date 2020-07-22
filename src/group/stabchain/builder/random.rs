use crate::group::orbit::abstraction::FactoredTransversalResolver;
use crate::group::orbit::transversal::factored_transversal::{
    factored_transversal_complete_opt, representative_raw_as_word,
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
use rand::seq::IteratorRandom;
use rand::thread_rng;
use std::collections::{HashMap, VecDeque};
use std::iter::Iterator;
use std::iter::{repeat_with, FromIterator};

//Constants for subproduct generation
const C1: usize = 10;
const C2: usize = 10;
const ORBIT_BOUND: usize = 50;
const BASE_BOUND: usize = 5;
// Cosntants for the Strong Generating Test.
const C3: usize = 10;
const C4: usize = 10;

// Helper struct, used to build the stabilizer chain

pub struct StabchainBuilderRandom<P, S, A = SimpleApplication<P>>
where
    A: Action<P, OrbitT = usize>,
{
    current_pos: usize,
    chain: Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>>,
    selector: S,
    action: A,
    n: usize,
    base: Vec<A::OrbitT>,
    rng: ThreadRng,
    //The chain is zero indexed, but this field is 1 indexed.
    //This is due to the end condition being when the chain is up to date below the index of the first record position, and this would be -1 with zero indexing.
    //For zero indexing this would have to be a signed type, which doesn't really seem worth it just to require one negative value at the end condition.
    up_to_date: usize,
}

impl<P, S, A> StabchainBuilderRandom<P, S, A>
where
    P: Permutation,
    S: MovedPointSelector<P, A::OrbitT>,
    A: Action<P, OrbitT = usize>,
{
    pub fn new(selector: S, action: A) -> Self {
        StabchainBuilderRandom {
            current_pos: 0,
            chain: Vec::new(),
            selector,
            action,
            n: 0,
            base: Vec::new(),
            rng: thread_rng(),
            up_to_date: 1,
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
        self.n = group
            .generators
            .iter()
            .map(|gen| gen.lmp().expect("Should not be the identity."))
            .max()
            .unwrap_or(0);
        let moved_point = self.selector.moved_point(&group.generators()[0]);
        //Create the top level record for this chain, and add it to the chain.
        //TODO check if you should add generators 1 by 1, in case there are redundant generators.
        let initial_record = StabchainRecord::new(
            moved_point,
            group.clone(),
            factored_transversal_complete_opt(&group, moved_point, &self.action),
        );
        self.base.push(moved_point);
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
        //Sum of all "depths". In reality the transversal doesn't have a depth, so we use this as a upper bound.
        let t = self
            .current_chain()
            .map(|record| (record.transversal.len() as f64).log2())
            .sum::<f64>()
            .floor() as usize;
        let record = &self.chain[self.current_pos];
        let k = rand::Rng::gen_range(&mut self.rng.clone(), 0, gens.len() / 2 + 1);
        //Create an iterator of subproducts w and w2
        let subproduct_w1_iter =
            repeat_with(|| random_subproduct_word_full(&mut self.rng.clone(), &gens[..]))
                .take(subproducts);
        let subproduct_w2_iter =
            repeat_with(|| random_subproduct_word_subset(&mut self.rng.clone(), &gens[..], k))
                .take(subproducts);
        //Iterleave the two iterators.
        let subproduct_iter: Vec<Vec<P>> =
            subproduct_w1_iter.interleave(subproduct_w2_iter).collect();
        // Iterator of random coset representatives.
        let g_iter = repeat_with(|| {
            record
                .transversal
                .keys()
                .choose(&mut self.rng.clone())
                .map(|point| {
                    representative_raw_as_word(
                        &record.transversal,
                        record.base,
                        *point,
                        &self.action,
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
        let mut record = self.chain[self.current_pos].clone();
        //debug_assert!(record.gens.generators().contains(&p));
        // If this element is already a generator, then we can exit
        let mut to_check = VecDeque::from_iter(record.transversal.keys().cloned());
        let mut new_transversal = HashMap::new();
        while !to_check.is_empty() {
            let orbit_element = to_check.pop_back().unwrap();
            let new_image = self.action.apply(&p, orbit_element);

            // If we haven't seen this element.
            if !(record.transversal.contains_key(&new_image)
                || new_transversal.contains_key(&new_image))
            {
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
            // For each generator (and p)
            for generator in std::iter::once(&p).chain(record.gens.generators()) {
                let new_image = self.action.apply(&generator, orbit_element);

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

    ///Check if the permutation augments the orbit at a level, resetting the position afterwards.
    fn check_transversal_augmentation_at_level(&mut self, level: usize, p: P) {
        let previous_pos = self.current_pos;
        self.current_pos = level;
        self.check_transversal_augmentation(p);
        self.current_pos = previous_pos;
    }

    fn sgc(&mut self) {
        println!("SGC {}/{}", self.current_pos, self.chain.len() - 1);
        let record = self.chain[self.current_pos].clone();
        //To see if all generators are discarded.
        let mut all_discarded = true;
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
                        .choose_multiple(&mut self.rng, BASE_BOUND)
                        .into_iter()
                        .cloned()
                        .collect()
                } else {
                    //Evaluate on b_star randomly chosen points.
                    record
                        .transversal
                        .keys()
                        .choose_multiple(&mut self.rng, b_star.len())
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
                    let gens = Group::new(&[h_star]);
                    let transversal =
                        factored_transversal_complete_opt(&gens, new_base_point, &self.action);
                    let record = StabchainRecord::new(new_base_point, gens, transversal);
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
            println!("All Discarded");
            //Really is setting this to i - 1, but as the position is zero indexed it would be doing (i - 1 + 1).
            self.up_to_date = self.current_pos;
        }
        //TODO check if this is wasting effort with repeated calls, when the SGT also invokes the SGC.
        self.sgt();
        //SGC terminates if it is up to date at position 0; otherwise moving onto the next layers. Stop if we have reached the bottom of the chain
        if self.up_to_date != 0 && self.current_pos != self.chain.len() - 1 {
            self.current_pos += 1;
            self.sgc();
        }
    }

    fn sgt(&mut self) {
        println!("SGT");
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
        let products: Vec<Vec<P>> = self.chain[0]
            .gens
            .generators
            .clone()
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

    fn sgt_test<'a>(&mut self, p: &[P]) -> Option<usize> {
        let (drop_out_level, residue) = residue_as_words_from_words(self.current_chain(), p);
        //Check if this is a non-trivial residue. If it is then the output of the SGC is correct for this element.
        if !self.is_trivial_residue_all_points(&residue) {
            let invoke_level = self.current_pos + drop_out_level;
            let collapsed_residue = collapse_perm_word(&residue);
            //If this point sifted through but isn't trivial, then we need a new record and base point.
            if self.sifted(drop_out_level) {
                return None;
            // let moved_point = self.selector.moved_point(&collapsed_residue);
            // let record = StabchainRecord::new(
            //     moved_point,
            //     Group::new(&[collapsed_residue]),
            //     [(moved_point, Permutation::id())].iter().cloned().collect(),
            // );
            // self.base.push(moved_point);
            // self.chain.push(record);
            } else {
                //Otherwise add it to the generators at that level, and invoke the SGC at that level.
                self.check_transversal_augmentation_at_level(invoke_level, collapsed_residue);
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

impl<P, S, A> super::Builder<P, FactoredTransversalResolver<A>, A>
    for StabchainBuilderRandom<P, S, A>
where
    P: Permutation,
    A: Action<P, OrbitT = usize>,
    S: MovedPointSelector<P, A::OrbitT>,
{
    fn set_generators(&mut self, gens: &Group<P>) {
        self.construct_strong_generating_set(gens);
    }

    fn build(self) -> Stabchain<P, FactoredTransversalResolver<A>, A> {
        Stabchain { chain: self.chain }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::group::stabchain::moved_point_selector::FmpSelector;
    use crate::group::stabchain::valid_stabchain;
    use crate::perm::actions::SimpleApplication;

    #[test]
    fn trivial_chain() {
        let g = Group::trivial();
        let application = SimpleApplication::default();
        let mut builder = StabchainBuilderRandom::new(FmpSelector, application);
        builder.construct_strong_generating_set(&g);
        let chain = builder.build();
        println!("{}", &chain);
        valid_stabchain(&chain).unwrap();
        assert!(chain.is_empty());
    }

    #[test]
    fn symmetric_chain() {
        let g = Group::symmetric(4);
        println!("{}", g);
        let application = SimpleApplication::default();
        let mut builder = StabchainBuilderRandom::new(FmpSelector, application);
        builder.construct_strong_generating_set(&g);
        println!("{:?}", builder.base.clone());
        let chain = builder.build();
        valid_stabchain(&chain).unwrap();
        println!("{}", chain);
        assert_eq!(num_bigint::BigUint::from(24_u32), chain.order())
    }
}