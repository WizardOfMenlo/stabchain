//! Collection of functions that will compute shallow(er) transversals.

use crate::group::random_perm::RandPerm;
use crate::group::{Action, Group};
use crate::perm::Permutation;
use rand::Rng;
use std::collections::{HashMap, VecDeque};
use std::iter::once;

//Make a transversal with depths at most max_depth + 1.
pub fn random_transversal<P, A, R>(
    g: &mut Group<P>,
    base: A::OrbitT,
    strat: &A,
    rng: &mut R,
    set_depth: usize,
) -> (HashMap<A::OrbitT, P>, usize)
where
    P: Permutation,
    A: Action<P>,
    R: Rng + Clone,
{
    let maximal_orbit_size = g.symmetric_super_order();
    let gens = g.generators();
    let mut transversal = HashMap::new();
    //Store the depth of each element.
    let mut depths = HashMap::new();
    let id = P::id();
    transversal.insert(base.clone(), id);
    depths.insert(base.clone(), 0);
    // Orbit elements that have not been used yet.
    let mut to_traverse = VecDeque::new();
    to_traverse.push_back(base.clone());
    // While there are still elements of the orbit unused.
    'element_checking: while !to_traverse.is_empty() {
        //Take an unused element.
        let delta = to_traverse.pop_front().unwrap();
        for g in gens {
            let point = strat.apply(g, delta.clone());

            // If the orbit doensn't contain this value, then add it to the factored transversal.
            transversal.entry(point.clone()).or_insert_with(|| {
                //Update the depths of this element.
                depths.insert(point.clone(), depths.get(&delta).unwrap() + 1);
                to_traverse.push_back(point);
                g.inv()
            });

            if transversal.len() == maximal_orbit_size {
                break 'element_checking;
            }
        }
    }
    let max_depth = depths.values().into_iter().max().unwrap().clone();
    dbg!(&max_depth);
    if max_depth > set_depth {
        //TODO perhaps use a more efficient method than creating the entire thing.
        let new_gen = RandPerm::new(10, g, 50, rng.clone()).random_permutation();
        if !gens.contains(&new_gen) {
            //Update the generating set to contain the new generating element.
            g.generators.push(new_gen);
        }
        random_transversal(g, base, strat, rng, set_depth)
    } else {
        (transversal, max_depth)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::group::orbit::transversal::factored_transversal::representative_raw;
    use crate::perm::actions::SimpleApplication;
    use crate::perm::export::CyclePermutation;
    use crate::perm::{DefaultPermutation, Permutation};

    /// Test the factored transversal calculation for a generating set with multiple generators.
    #[test]
    fn multiple_generators() {
        // Cycle notation is used for conveninece, but we do need to switch to 0 indexed for assertions.
        let gens: Vec<DefaultPermutation> = vec![
            CyclePermutation::from_vec(vec![vec![1, 6, 4, 3], vec![2, 7, 5]]).into(),
            CyclePermutation::from_vec(vec![vec![1, 4], vec![2, 6, 3]]).into(),
        ];
        let g = Group::from_list(gens);
        let mut rng = rand::thread_rng();
        let set_depth = 3;
        let strat = SimpleApplication::default();
        //All points should be in the orbit (according to GAP)
        for i in 0_usize..6 {
            let (transversal, max_depth) =
                random_transversal(&mut g.clone(), i, &strat, &mut rng, set_depth);
            assert!(max_depth < set_depth + 1);
            for j in 0_usize..6 {
                assert!(transversal.contains_key(&j));
                assert_eq!(
                    j,
                    representative_raw(&transversal, i, j, &strat)
                        .unwrap()
                        .apply(i)
                );
            }
        }
    }

    /// Test the factored transversal calculation for a generating set with multiple generators
    /// when not all elements are in the orbit.
    #[test]
    fn multiple_generators_non_full_orbit() {
        use crate::perm::export::CyclePermutation;
        // Cycle notation is used for conveninece, but we do need to switch to 0 indexed for assertions.
        let gens: Vec<DefaultPermutation> = vec![
            CyclePermutation::single_cycle(&[1, 2, 6]).into(),
            CyclePermutation::single_cycle(&[3, 5, 7]).into(),
        ];
        let g = Group::from_list(gens);
        let mut rng = rand::thread_rng();
        let set_depth = 3;
        let strat = SimpleApplication::default();
        let (fc1, max_depth) = random_transversal(&mut g.clone(), 5, &strat, &mut rng, set_depth);
        assert_eq!(3, fc1.len());
        let (fc2, max_depth) = random_transversal(&mut g.clone(), 4, &strat, &mut rng, set_depth);
        assert_eq!(3, fc2.len());
        let (fc3, max_depth) = random_transversal(&mut g.clone(), 3, &strat, &mut rng, set_depth);
        assert_eq!(1, fc3.len());
        assert!(max_depth < set_depth + 1);
        for i in [0, 1, 5].iter() {
            // Tests for fc1
            assert!(fc1.contains_key(i));
            assert_eq!(
                *i,
                representative_raw(&fc1, 5, *i, &strat).unwrap().apply(5)
            );
            // Tests for fc2
            assert!(!fc2.contains_key(i));
            assert_eq!(None, representative_raw(&fc2, 4, *i, &strat));
            // Tests for fc3
            assert!(!fc3.contains_key(i));
            assert_eq!(None, representative_raw(&fc3, 3, *i, &strat));
        }
        for i in [2, 4, 6].iter() {
            // Tests for fc1
            assert!(!fc1.contains_key(i));
            assert_eq!(None, representative_raw(&fc1, 5, *i, &strat));
            // Tests for fc2
            assert!(fc2.contains_key(i));
            assert_eq!(
                *i,
                representative_raw(&fc2, 4, *i, &strat).unwrap().apply(4)
            );
            // Tests for fc3
            assert!(!fc3.contains_key(i));
            assert_eq!(None, representative_raw(&fc3, 3, *i, &strat));
        }
        // Now to test for element 3
        // Tests for fc1
        assert!(!fc1.contains_key(&3));
        assert_eq!(None, representative_raw(&fc1, 5, 3, &strat));
        // Tests for fc2
        assert!(!fc2.contains_key(&3));
        assert_eq!(None, representative_raw(&fc2, 4, 3, &strat));
        // Tests for fc3
        assert!(fc3.contains_key(&3));
        assert_eq!(3, representative_raw(&fc3, 3, 3, &strat).unwrap().apply(3));
    }
}
