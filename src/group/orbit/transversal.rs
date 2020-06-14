use crate::group::Group;
use crate::perm::Permutation;

use std::collections::{HashMap, VecDeque};

/// Transversal using the naive algorithm
/// Should be quicker computation wise but possibly much more
/// memory intensive. In applications please use FactoredTransversal
pub struct Transversal {
    base: usize,
    pub(super) transversal: HashMap<usize, Permutation>,
}

#[allow(clippy::len_without_is_empty)]
impl Transversal {
    pub fn new(g: &Group, base: usize) -> Self {
        Transversal {
            base,
            transversal: transversal(g, base),
        }
    }

    pub fn base(&self) -> usize {
        self.base
    }

    pub fn orbit(&self) -> super::Orbit {
        self.into()
    }

    pub fn representative(&self, delta: usize) -> Option<Permutation> {
        self.transversal.get(&delta).cloned()
    }

    pub fn len(&self) -> usize {
        self.transversal.len()
    }

    pub fn in_orbit(&self, delta: usize) -> bool {
        self.transversal.contains_key(&delta)
    }
}

pub fn transversal(g: &Group, base: usize) -> HashMap<usize, Permutation> {
    let gens = &g.generators[..];
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
            if !transversal.contains_key(&gamma) {
                to_traverse.push_back(gamma);
                let delta_repr = transversal.get(&delta).cloned().unwrap();
                transversal.insert(gamma, delta_repr.multiply(g));
            }
        }
    }

    transversal
}
