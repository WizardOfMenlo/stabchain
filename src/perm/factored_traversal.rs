use super::Permutation;
use std::collections::hash_map::Entry;
use std::collections::{HashMap, HashSet};

use std::rc::Rc;

pub struct FactoredTraversal {
    base: usize,
    traversal: HashMap<usize, Rc<Permutation>>,
}

impl FactoredTraversal {
    pub fn from_generators(base: usize, gens: Vec<&Permutation>) -> Self {
        let mut traversal = HashMap::new();
        let id = Permutation::id();
        let id_ref = Rc::new(id);
        traversal.insert(base, id_ref);
        // Orbit elements that have not been used yet.
        let mut to_traverse = vec![base];
        // While there are still elements of the orbit unused.
        while !to_traverse.is_empty() {
            //Take an unused element.
            let delta = to_traverse.pop().unwrap();
            for g in &gens {
                let gamma = g.apply(delta);
                // If the orbit doensn't contain this value, then add it to the factored traversal.
                if let Entry::Vacant(v) = traversal.entry(gamma) {
                    //Insert the inverse, to make calculating representatives
                    v.insert(Rc::new(g.inv()));
                    to_traverse.push(gamma);
                } else {
                    //TODO stabiliser
                }
            }
        }
        FactoredTraversal { base, traversal }
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
    // the traversal of the orbit.
    let mut traversal: Vec<Rc<Permutation>> = vec![id_ref.clone()];
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
                //element to add to the traversal.
                let new_traversal_element = traversal[delta].multiply(gen_set[i]);
                traversal.push(Rc::new(new_traversal_element));
            } else {
                // Otherwise update the stabilizer
                let new_stab_elem = traversal[delta]
                    .multiply(gen_set[i])
                    .multiply(&traversal[gamma].inv());
                stablizer.push(Rc::new(new_stab_elem));
            }
        }
    }
    (orbit_set, traversal, stablizer)
}
