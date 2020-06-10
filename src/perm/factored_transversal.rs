use super::Permutation;
use std::collections::hash_map::Entry;
use std::collections::{HashMap, HashSet};

use std::rc::Rc;

pub struct FactoredTransversal {
    base: usize,
    transversal: HashMap<usize, Rc<Permutation>>,
}

impl FactoredTransversal {
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

    /// Calculate a representative of the given element.
    pub fn representative(&self, delta: usize) -> Permutation {
        let mut gamma = delta;
        let rep = Permutation::id();
        while gamma != self.base {
            let g_inv = self.transversal.get(&delta).unwrap();
            rep.multiply(g_inv).inv();
            gamma = g_inv.apply(gamma);
        }
        rep
    }

    pub fn base(&self) -> usize {
        self.base
    }

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
    fn small_fc() {
        let perm = Permutation::from_vec(vec![0, 3, 2, 1]);
        let fc = FactoredTransversal::from_generators(1, vec![perm]);
        assert_eq!(fc.base(), 1);
        assert!(fc.in_orbit(1));
        assert!(fc.in_orbit(3));
        assert!(!fc.in_orbit(0));
        assert!(!fc.in_orbit(2));
    }
}

pub fn orbit_stabilizer(
    gen_set: Vec<&Permutation>,
    omega: usize,
) -> (HashSet<usize>, Vec<Rc<Permutation>>, Vec<Rc<Permutation>>) {
    // Hashset containing the orbit.
    let mut orbit_set = HashSet::new();
    orbit_set.insert(omega);
    // Orbit elements that have not been used yet.
    let mut to_traverse = vec![omega];
    let id = Permutation::id();
    let id_ref = Rc::new(id);
    // the transversal of the orbit.
    let mut transversal: Vec<Rc<Permutation>> = vec![id_ref.clone()];
    // The stablizer.
    let mut stablizer: Vec<Rc<Permutation>> = vec![id_ref.clone()];
    // While there are still elements of the orbit unused.
    while !to_traverse.is_empty() {
        //Take an unused element.
        let delta = to_traverse.pop().unwrap();
        for i in 0..gen_set.len() {
            let gamma = gen_set[i].apply(delta);
            // If the orbit doesn't contain this value, then add it to the orbit.
            if !orbit_set.contains(&gamma) {
                orbit_set.insert(gamma);
                to_traverse.push(gamma);
                //element to add to the transversal.
                let new_traversal_element = transversal[delta].multiply(gen_set[i]);
                transversal.push(Rc::new(new_traversal_element));
            } else {
                // Otherwise update the stabilizer
                let new_stab_elem = transversal[delta]
                    .multiply(gen_set[i])
                    .multiply(&transversal[gamma].inv());
                stablizer.push(Rc::new(new_stab_elem));
            }
        }
    }
    (orbit_set, transversal, stablizer)
}
