use crate::group::Group;
use crate::perm::Permutation;

use std::collections::{HashMap, VecDeque};

/// Transversal using the naive algorithm
/// Should be quicker computation wise but possibly much more
/// memory intensive. In applications please use FactoredTransversal
/// (After some testing, it seems that it is also slower computationally,
/// so don't use unless wanting some pain)
pub struct Transversal {
    base: usize,
    pub(super) transversal: HashMap<usize, Permutation>,
}

#[allow(clippy::len_without_is_empty)]
impl Transversal {
    /// Create from the group
    pub fn new(g: &Group, base: usize) -> Self {
        Transversal {
            base,
            transversal: transversal(g, base),
        }
    }

    /// Get the base of the transversal
    pub fn base(&self) -> usize {
        self.base
    }

    /// Get the orbit from the transversal
    pub fn orbit(&self) -> super::Orbit {
        self.into()
    }

    /// Get the computed representative
    pub fn representative(&self, delta: usize) -> Option<Permutation> {
        self.transversal.get(&delta).cloned()
    }

    /// Get the size of the orbit
    pub fn len(&self) -> usize {
        self.transversal.len()
    }

    /// Checks if element is in the orbit
    pub fn in_orbit(&self, delta: usize) -> bool {
        self.transversal.contains_key(&delta)
    }
}

/// Computes the transversal of the base. It computes the orbit and the corresponding
/// set of representatives

// Needed since entry requires &mut
#[allow(clippy::map_entry)]
pub fn transversal(g: &Group, base: usize) -> HashMap<usize, Permutation> {
    // Get the generatos
    let gens = &g.generators[..];
    let mut transversal = HashMap::new();

    // Init the transversal
    transversal.insert(base, Permutation::id());

    // We use this to store elements to expand
    let mut to_traverse = VecDeque::new();
    to_traverse.push_back(base);

    // While we have stuff to do
    while !to_traverse.is_empty() {
        let delta = to_traverse.pop_front().unwrap();
        for g in gens {
            let gamma = g.apply(delta);

            if !transversal.contains_key(&gamma) {
                to_traverse.push_back(gamma);
                let delta_repr = transversal.get(&delta).cloned().unwrap();
                transversal.insert(gamma, delta_repr.multiply(g));
            }
        }
    }

    transversal
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::perm::Permutation;

    #[test]
    fn id_transveral() {
        let g = Group::trivial();
        let fc = Transversal::new(&g, 3);
        assert_eq!(fc.base, 3);
        assert!(fc.in_orbit(3));
        assert!(!fc.in_orbit(2));
        assert!(!fc.in_orbit(1));
        //check orbit size
        assert_eq!(1, fc.len());
    }

    #[test]
    fn id_representatives() {
        let g = Group::trivial();
        let fc = Transversal::new(&g, 3);
        assert_eq!(Permutation::id(), fc.representative(3).unwrap());
        assert_eq!(None, fc.representative(2))
    }

    #[test]
    /// Test with a small permutation as the only generator.
    fn small_fc() {
        let perm = Permutation::from_vec(vec![0, 3, 2, 1]);
        let g = Group::new(&[perm]);
        let fc = Transversal::new(&g, 1);
        assert_eq!(fc.base(), 1);
        assert!(fc.in_orbit(1));
        assert!(fc.in_orbit(3));
        assert!(!fc.in_orbit(0));
        assert!(!fc.in_orbit(2));
        //check orbit size
        assert_eq!(2, fc.len());
    }

    #[test]
    /// Test with a permutation of 4 points that is a 4-cycle.
    fn full_cycle() {
        let perm = Permutation::from_vec(vec![1, 2, 3, 0]);
        let g = Group::new(&[perm]);
        let fc = Transversal::new(&g, 3);
        for i in 0_usize..=3 {
            assert!(fc.in_orbit(i));
            assert_eq!(i, fc.representative(i).unwrap().apply(3));
        }
        assert_eq!(4, fc.len());
    }
}
