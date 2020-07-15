pub mod abstraction;
pub mod transversal;

use crate::group::Group;
use crate::perm::actions::SimpleApplication;
use crate::perm::{Action, Permutation};
use std::collections::{HashSet, VecDeque};

/// w^G = { w^g | g \in G }
#[derive(Debug)]
pub struct Orbit<OrbitT = usize> {
    base: OrbitT,
    orbit: HashSet<OrbitT>,
}

impl<OrbitT> PartialEq for Orbit<OrbitT>
where
    OrbitT: std::hash::Hash + Eq,
{
    fn eq(&self, other: &Self) -> bool {
        self.base == other.base && self.orbit == other.orbit
    }
}

impl Orbit {
    /// Build an orbit from a group
    pub fn new<P: Permutation>(g: &Group<P>, w: usize) -> Self {
        Self::from_raw(w, orbit(g, w, SimpleApplication::default()))
    }
}

impl<OrbitT> Orbit<OrbitT>
where
    OrbitT: std::hash::Hash + Eq + Clone,
{
    pub fn new_with_action<P, A>(g: &Group<P>, w: OrbitT, strat: A) -> Self
    where
        P: Permutation,
        A: Action<P, OrbitT = OrbitT>,
    {
        Self::from_raw(w.clone(), orbit(g, w, strat))
    }
}

#[allow(clippy::len_without_is_empty)]
impl<OrbitT> Orbit<OrbitT>
where
    OrbitT: std::hash::Hash + Eq,
{
    pub(crate) fn from_raw(base: OrbitT, orbit: HashSet<OrbitT>) -> Self {
        Orbit { base, orbit }
    }

    /// Is this a complete orbit?
    pub fn complete<P: Permutation>(&self, g: &Group<P>) -> bool {
        // If subgroup of S_n can at most move n points, if we already have seen all of them
        // the orbit must be complete
        self.orbit.len() == g.symmetric_super_order()
    }

    /// Get the base (w)
    pub fn base(&self) -> &OrbitT {
        &self.base
    }

    /// Get the computed orbit
    pub fn to_set(&self) -> &HashSet<OrbitT> {
        &self.orbit
    }

    /// Computes the number of elements in the orbit
    pub fn len(&self) -> usize {
        self.orbit.len()
    }

    /// Get an iterator over orbit element
    pub fn iter(&self) -> impl Iterator<Item = &OrbitT> {
        self.orbit.iter()
    }
}

use std::fmt;
impl fmt::Display for Orbit {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "[Orbit: base := {}, elements := {:?} ]",
            self.base() + 1,
            self.orbit.iter().map(|i| i + 1).collect::<HashSet<_>>()
        )
    }
}

/// Algorithm to compute orbit from a group
pub fn orbit<P, A>(g: &Group<P>, w: A::OrbitT, strat: A) -> HashSet<A::OrbitT>
where
    P: Permutation,
    A: Action<P>,
{
    let gens = g.generators();

    // Orbit are the ones that have been acted on by the generators
    let mut orbit = HashSet::new();
    orbit.insert(w.clone());

    // To traverse are those still to be expanded
    let mut to_traverse = VecDeque::new();
    to_traverse.push_back(w);

    // Get unused
    while !to_traverse.is_empty() {
        let delta = to_traverse.pop_front().unwrap();
        for g in gens {
            // Apply generator and insert
            let gamma = strat.apply(g, delta.clone());

            if !orbit.contains(&gamma) {
                orbit.insert(gamma.clone());
                to_traverse.push_back(gamma);
            }
        }
    }

    orbit
}

/// Algorithm to compute orbit from a group. This variant optimizes by checking
/// if the orbit is complete before doing more work
pub fn orbit_complete_opt<P, A>(g: &Group<P>, w: A::OrbitT, strat: A) -> HashSet<A::OrbitT>
where
    P: Permutation,
    A: Action<P>,
{
    let maximal_orbit_size = g.symmetric_super_order();
    let gens = g.generators();

    // Orbit are the ones that have been acted on by the generators
    let mut orbit = HashSet::new();
    orbit.insert(w.clone());

    // To traverse are those still to be expanded
    let mut to_traverse = VecDeque::new();
    to_traverse.push_back(w);

    // Get unused
    while !to_traverse.is_empty() {
        let delta = to_traverse.pop_front().unwrap();
        for g in gens {
            // Apply generator and insert
            let gamma = strat.apply(g, delta.clone());
            if orbit.insert(gamma.clone()) {
                to_traverse.push_back(gamma);
            }

            // Check if the orbit complete, if so return
            if orbit.len() == maximal_orbit_size {
                return orbit;
            }
        }
    }

    orbit
}

#[cfg(test)]
mod tests {
    use super::*;

    fn orbit_simple<P: Permutation>(g: &Group<P>, w: usize) -> HashSet<usize> {
        orbit(g, w, SimpleApplication::default())
    }

    #[test]
    fn orbit_of_identity() {
        use std::iter::FromIterator;

        let g = Group::trivial();
        // No points is deranged
        assert_eq!(orbit_simple(&g, 1), HashSet::from_iter(vec![1]));
        assert_eq!(orbit_simple(&g, 2), HashSet::from_iter(vec![2]));
        assert_eq!(orbit_simple(&g, 3), HashSet::from_iter(vec![3]));
    }

    #[test]
    fn orbit_of_cyclic() {
        let g = Group::cyclic(8);
        assert_eq!(orbit_simple(&g, 1).len(), 8);
    }

    #[test]
    fn orbit_of_dihedral() {
        use std::iter::FromIterator;
        let g = Group::dihedral_2n(5);
        // All points are deranged

        assert_eq!(orbit_simple(&g, 1), HashSet::from_iter(0..5));
    }

    #[test]
    fn orbit_of_symmetric() {
        use std::iter::FromIterator;

        let g = Group::symmetric(10);
        // All points are deranged
        assert_eq!(orbit_simple(&g, 1), HashSet::from_iter(0..10));
        assert_eq!(orbit_simple(&g, 2), HashSet::from_iter(0..10));
    }
}
