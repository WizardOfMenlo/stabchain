use crate::group::Group;
use crate::perm::Permutation;
use std::collections::{HashMap, VecDeque};

/// w^G = { w^g | g \in G }
pub struct Transversal {
    base: usize,
    orbit: HashMap<usize, Permutation>,
}

impl Transversal {
    /// Build an orbit from a group
    pub fn new(g: &Group, w: usize) -> Self {
        Self {
            base: w,
            orbit: transversal(g, w),
        }
    }

    /// Get the base (w)
    pub fn base(&self) -> usize {
        self.base
    }

    /// Get the computed orbit
    pub fn orbit(&self) -> &HashMap<usize, Permutation> {
        &self.orbit
    }
}

/// Algorithm to compute orbit from a group
pub fn transversal(g: &Group, w: usize) -> HashMap<usize, Permutation> {
    let gens = g.generators();

    // Orbit are the ones that have been acted on by the generators
    let mut orbit: HashMap<usize, Permutation> = HashMap::new();

    // To traverse are those still to be expanded
    let mut to_traverse = VecDeque::new();
    to_traverse.push_back(w);

    // Get unused
    while !to_traverse.is_empty() {
        let delta = to_traverse.pop_front().unwrap();
        for g in gens {
            // Apply generator and insert
            let gamma = g.apply(delta);
            if !orbit.contains_key(&gamma) {
                let t_delta = orbit.get(&delta).unwrap().clone();
                to_traverse.push_back(gamma);
                orbit.insert(gamma, t_delta.multiply(g));
            }
        }
    }

    orbit
}
