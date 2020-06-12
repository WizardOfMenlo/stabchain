pub mod factored_transversal;

use crate::group::Group;
use std::collections::{HashSet, VecDeque};

pub fn naive_orbit(g: &Group, w: usize) -> Vec<usize> {
    let gens = g.generators();

    // Orbit are the ones that have been acted on by the generators
    let mut orbit = HashSet::new();

    // To traverse are those still to be expanded
    let mut to_traverse = VecDeque::new();
    to_traverse.push_back(w);

    // Get unused
    while !to_traverse.is_empty() {
        let delta = to_traverse.pop_front().unwrap();
        for g in gens {
            // Apply generator and insert
            let gamma = g.apply(delta);
            if orbit.insert(gamma) {
                to_traverse.push_back(gamma);
            }
        }
    }

    orbit.into_iter().collect()
}
