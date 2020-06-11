use super::Permutation;
use std::collections::hash_map::Entry;
use std::collections::HashMap;

use std::rc::Rc;
///Represents a Factored Traversal/Schrier Vector of an elements orbit.
/// Contains the base of this traversal, and a factored traversal of the orbit.
#[derive(Debug)]
pub struct FactoredTransversal {
    base: usize,
    transversal: HashMap<usize, Rc<Permutation>>,
}

impl FactoredTransversal {
    /// Given a set of generating elements and element, construct the factored traversal.
    ///```
    /// use stabchain::perm::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(1, vec![Permutation::from(vec![1, 0])]);
    ///```
    pub fn from_generators(base: usize, gens: Vec<Permutation>) -> Self {
        let mut transversal = HashMap::new();
        let id = Permutation::id();
        let id_ref = Rc::new(id);
        transversal.insert(base, id_ref);
        // Orbit elements that have not been used yet.
        let mut to_traverse = vec![base];
        // While there are still elements of the orbit unused.
        while !to_traverse.is_empty() {
            //Take an unused element.
            let delta = to_traverse.pop().unwrap();
            for g in &gens {
                let gamma = g.apply(delta);
                // If the orbit doensn't contain this value, then add it to the factored transversal.
                if let Entry::Vacant(v) = transversal.entry(gamma) {
                    //Insert the inverse, to make calculating representatives easier
                    v.insert(Rc::new(g.inv()));
                    to_traverse.push(gamma);
                } else {
                    //TODO stabiliser
                }
            }
        }
        FactoredTransversal { base, transversal }
    }

    /// Calculate a representative of the given element in the orbit, or None if this element isn't in the orbit.
    ///```
    /// use stabchain::perm::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(0, vec![Permutation::from(vec![1, 0])]);
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
            while gamma != self.base {
                let g_inv = self.transversal.get(&delta).unwrap();
                rep = rep.multiply(g_inv).inv();
                gamma = g_inv.apply(gamma);
            }
            Some(rep)
        }
    }

    /// Get the base element of the Factored Transversal.
    ///```
    /// use stabchain::perm::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(0, vec![Permutation::from(vec![1, 0])]);
    /// assert_eq!(0, fc.base());
    ///```
    pub fn base(&self) -> usize {
        self.base
    }

    /// Test if an element is in the orbit.
    ///```
    /// use stabchain::perm::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(1, vec![Permutation::from(vec![1, 0])]);
    /// assert_eq!(1, fc.base());
    /// assert!(fc.in_orbit(1));
    ///```
    pub fn in_orbit(&self, pos: usize) -> bool {
        self.transversal.contains_key(&pos)
    }
}

#[cfg(test)]
mod tests {
    use super::FactoredTransversal;
    use crate::perm::Permutation;

    #[test]
    fn id_transveral() {
        let fc = FactoredTransversal::from_generators(3, vec![]);
        assert_eq!(fc.base, 3);
        assert!(fc.in_orbit(3));
        assert!(!fc.in_orbit(2));
        assert!(!fc.in_orbit(1));
    }

    #[test]
    fn id_representatives() {
        let fc = FactoredTransversal::from_generators(3, vec![]);
        // The orbit for the base point should be 1.
        assert_eq!(Permutation::id(), fc.representative(3).unwrap());
        // The orbit will only contain the base element, as the group generated is the identity
        assert_eq!(None, fc.representative(2))
    }

    #[test]
    fn small_fc() {
        // This permutation is equivalant to (1, 3)
        let perm = Permutation::from_vec(vec![0, 3, 2, 1]);
        let fc = FactoredTransversal::from_generators(1, vec![perm]);
        assert_eq!(fc.base(), 1);
        // As the permutation is (1, 3), only 1 and 3 should be in the orbit of 1.
        assert!(fc.in_orbit(1));
        assert!(fc.in_orbit(3));
        assert!(!fc.in_orbit(0));
        assert!(!fc.in_orbit(2));
    }

    #[test]
    fn full_cycle() {
        // This permutation is equivalane to (1, 2, 3, 4)
        let perm = Permutation::from_vec(vec![1, 2, 3, 0]);
        let fc = FactoredTransversal::from_generators(3, vec![perm]);
        // Every element should be in the orbit
        for i in 0_usize..3 {
            assert!(fc.in_orbit(i));
        }
    }
}
