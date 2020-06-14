pub mod factored_transversal;
pub mod transversal;

use crate::group::Group;
use std::collections::{HashSet, VecDeque};

/// w^G = { w^g | g \in G }
#[derive(Debug, PartialEq)]
pub struct Orbit {
    base: usize,
    orbit: HashSet<usize>,
}

#[allow(clippy::len_without_is_empty)]
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

    /// Computes the number of elements in the orbit
    pub fn len(&self) -> usize {
        self.orbit.len()
    }
}

impl From<&factored_transversal::FactoredTransversal> for Orbit {
    fn from(t: &factored_transversal::FactoredTransversal) -> Self {
        Orbit {
            base: t.base(),
            orbit: t.transversal.keys().copied().collect(),
        }
    }
}

impl From<&transversal::Transversal> for Orbit {
    fn from(t: &transversal::Transversal) -> Self {
        Orbit {
            base: t.base(),
            orbit: t.transversal.keys().copied().collect(),
        }
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
mod test {
    use super::*;
    #[test]
    fn orbit_of_identity() {
        use std::iter::FromIterator;

        let g = Group::trivial();
        // No points is deranged
        assert_eq!(orbit(&g, 1), HashSet::from_iter(vec![1]));
        assert_eq!(orbit(&g, 2), HashSet::from_iter(vec![2]));
        assert_eq!(orbit(&g, 3), HashSet::from_iter(vec![3]));
    }

    #[test]
    fn orbit_of_cyclic() {
        let g = Group::cyclic(8);
        assert_eq!(orbit(&g, 1).len(), 8);
    }

    #[test]
    fn orbit_of_dihedral() {
        use std::iter::FromIterator;
        let g = Group::dihedral_2n(5);
        // All points are deranged

        dbg!(orbit(&g, 1));

        assert_eq!(orbit(&g, 1), HashSet::from_iter(0..10));
    }

    #[test]
    fn orbit_of_symmetric() {
        use std::iter::FromIterator;

        let g = Group::symmetric(10);
        // All points are deranged
        assert_eq!(orbit(&g, 1), HashSet::from_iter(0..10));
        assert_eq!(orbit(&g, 2), HashSet::from_iter(0..10));
    }
}
