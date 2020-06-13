pub mod factored_transversal;
pub mod transversal;

use crate::group::Group;
use std::collections::{HashSet, VecDeque};

/// w^G = { w^g | g \in G }
pub struct Orbit {
    base: usize,
    orbit: HashSet<usize>,
}

impl Orbit {
    /// Build an orbit from a group
    pub fn new(g: &Group, w: usize) -> Self {
        Orbit {
            base: w,
            orbit: orbit(g, w),
        }
    }

    /// Get the base (w)
    pub fn base(&self) -> usize {
        self.base
    }

    /// Get the computed orbit
    pub fn orbit(&self) -> &HashSet<usize> {
        &self.orbit
    }
}

/// Algorithm to compute orbit from a group
pub fn orbit(g: &Group, w: usize) -> HashSet<usize> {
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

    orbit
}

#[cfg(test)]
mod test {}
