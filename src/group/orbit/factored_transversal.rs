use super::Group;
use crate::perm::Permutation;

use std::collections::HashMap;
use std::collections::VecDeque;

///Represents a Factored Traversal/Schrier Vector of an elements orbit.
/// Contains the base of this traversal, and a factored traversal of the orbit.
#[derive(Debug)]
pub struct FactoredTransversal {
    // Base point of the orbit
    base: usize,
    // The factored traversal/Schrier vector of the orbit.
    pub(super) transversal: HashMap<usize, Permutation>,
}

#[allow(clippy::len_without_is_empty)]
impl FactoredTransversal {
    /// Given a group, construct the factored transversal
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::group::Group;
    /// let fc = FactoredTransversal::new(&Group::symmetric(10), 1);
    ///```
    pub fn new(g: &Group, base: usize) -> Self {
        let gens = &g.generators[..];
        Self::from_generators(base, gens)
    }

    /// Given a set of generating elements and element, construct the factored transversal.
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(1, &[Permutation::from(vec![1, 0])]);
    ///```
    pub fn from_generators(base: usize, gens: &[Permutation]) -> Self {
        let mut transversal = HashMap::new();
        let id = Permutation::id();
        transversal.insert(base, id);
        // Orbit elements that have not been used yet.
        let mut to_traverse = VecDeque::new();
        to_traverse.push_back(base);
        // While there are still elements of the orbit unused.
        while !to_traverse.is_empty() {
            //Take an unused element.
            let delta = to_traverse.pop_front().unwrap();
            for g in gens {
                let gamma = g.apply(delta);
                // If the orbit doensn't contain this value, then add it to the factored transversal.
                transversal.entry(gamma).or_insert_with(|| {
                    to_traverse.push_back(gamma);
                    g.inv()
                });
            }
        }
        FactoredTransversal { base, transversal }
    }

    /// Calculate a representative of the given element in the orbit, or None if this element isn't in the orbit.
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(0, &[Permutation::from(vec![1, 0])]);
    /// let rep = Permutation::from(vec![1, 0]);
    /// assert_eq!(rep, fc.representative(1).unwrap());
    /// assert_eq!(Permutation::id(), fc.representative(0).unwrap());
    ///```
    pub fn representative(&self, delta: usize) -> Option<Permutation> {
        // Check if the element is in the orbit.
        if !self.in_orbit(delta) {
            None
        } else {
            let mut gamma = delta;
            let mut rep = Permutation::id();
            // Move along the orbit till we reach a representative that the base moves to the point.
            while gamma != self.base {
                let g_inv = self.transversal.get(&delta).unwrap();
                rep = rep.multiply(g_inv);
                gamma = g_inv.apply(gamma);
            }
            // Invert at the end, as the inverses are used.
            // If we want fgh, then we can instead do (h^-1, g^-1, f^-1)^-1.
            Some(rep.inv())
        }
    }

    /// Get the base element of the Factored Transversal.
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(0, &[Permutation::from(vec![1, 0])]);
    /// assert_eq!(0, fc.base());
    ///```
    pub fn base(&self) -> usize {
        self.base
    }

    /// Get the orbit size.
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(0, &[Permutation::from(vec![1, 0])]);
    /// assert_eq!(2, fc.size());
    ///```
    pub fn len(&self) -> usize {
        self.transversal.len()
    }

    /// Test if an element is in the orbit.
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(1, &[Permutation::from(vec![1, 0])]);
    /// assert_eq!(1, fc.base());
    /// assert!(fc.in_orbit(1));
    ///```
    pub fn in_orbit(&self, pos: usize) -> bool {
        self.transversal.contains_key(&pos)
    }

    /// Gets the orbits
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(1, &[Permutation::from(vec![1, 0])]);
    /// assert_eq!(1, fc.base());
    /// let orbit = fc.orbit();
    /// assert_eq!(orbit.len(), 2);
    /// ```
    pub fn orbit(&self) -> super::Orbit {
        self.into()
    }
}

#[cfg(test)]
mod tests {
    use super::FactoredTransversal;
    use crate::perm::Permutation;

    #[test]
    /// Test the Factored Traversal of an empty set of generators.
    /// Each orbit should be a singleton, as the generators don't move any points.
    fn id_transveral() {
        let fc = FactoredTransversal::from_generators(3, &[]);
        assert_eq!(fc.base, 3);
        assert!(fc.in_orbit(3));
        assert!(!fc.in_orbit(2));
        assert!(!fc.in_orbit(1));
        //check orbit size
        assert_eq!(1, fc.len());
    }

    #[test]
    /// Test the representatives for the elements in the orbit of the empty set of generators.
    /// The only representative should be the identity permutation, as the orbit only has a single element.
    fn id_representatives() {
        let fc = FactoredTransversal::from_generators(3, &[]);
        // The orbit for the base point should be 1.
        assert_eq!(Permutation::id(), fc.representative(3).unwrap());
        // The orbit will only contain the base element, as the group generated is the identity
        assert_eq!(None, fc.representative(2))
    }

    #[test]
    /// Test with a small permutation as the only generator.
    fn small_fc() {
        // This permutation is equivalent to (1, 3)
        let perm = Permutation::from_vec(vec![0, 3, 2, 1]);
        let fc = FactoredTransversal::from_generators(1, &[perm]);
        assert_eq!(fc.base(), 1);
        // As the permutation is (1, 3), only 1 and 3 should be in the orbit of 1.
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
        // This permutation is equivalent to (1, 2, 3, 4)
        let perm = Permutation::from_vec(vec![1, 2, 3, 0]);
        let fc = FactoredTransversal::from_generators(3, &[perm]);
        // Every element should be in the orbit, and it's representative should move the base to that point.
        for i in 0_usize..=3 {
            assert!(fc.in_orbit(i));
            assert_eq!(i, fc.representative(i).unwrap().apply(3));
        }
        //check orbit size
        assert_eq!(4, fc.len());
    }
}
