//! Collection of functions that will compute shallow(er) transversals.

use crate::group::random_perm::RandPerm;
use crate::group::{Action, Group};
use crate::perm::Permutation;
use rand::Rng;
use std::collections::{HashMap, VecDeque};
use std::iter::once;

//Make a transversal with depths at most max_depth + 1.
pub(crate) fn random_transversal<P, A, R>(
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
