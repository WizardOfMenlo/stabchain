//! A transversal which naively stores the first representative it finds

use crate::group::Group;
use crate::perm::actions::SimpleApplication;
use crate::perm::*;

use super::skeleton::TransversalSkeleton;
use super::Transversal;
use crate::group::orbit::abstraction::SimpleTransversalResolver;

use std::collections::{HashMap, VecDeque};

/// Transversal using the naive algorithm
/// Should be quicker computation wise but possibly much more
/// memory intensive. In applications please use FactoredTransversal
/// (After some testing, it seems that it is also slower computationally,
/// so don't use unless wanting some pain)
pub type SimpleTransversal<P = DefaultPermutation, A = SimpleApplication<P>> =
    TransversalSkeleton<P, SimpleTransversalResolver, A>;

impl<P> SimpleTransversal<P>
where
    P: Permutation,
{
    /// Create from the group
    pub fn new(g: &Group<P>, base: usize) -> Self {
        Self::from_raw(
            base,
            transversal(g, base, &SimpleApplication::default()),
            SimpleTransversalResolver,
        )
    }
}

impl<P, A> SimpleTransversal<P, A>
where
    P: Permutation,
    A: Action<P>,
{
    /// Create from the group
    pub fn new_with_action(g: &Group<P>, base: A::OrbitT, strategy: &A) -> Self {
        Self::from_raw(
            base.clone(),
            transversal(g, base, strategy),
            SimpleTransversalResolver,
        )
    }
}

// Note, here I would like to have a specialized impl for the usize impl (as I want to add 1) and fallback to
// the normal impl otherwise
use std::fmt;
impl<P> fmt::Display for SimpleTransversal<P>
where
    P: fmt::Display + Permutation,
{
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "[Transversal: base := {}, elements := {{",
            self.base() + 1,
        )?;

        for (orbit, repr) in self.raw_elements() {
            write!(f, "({}, {}) ", orbit + 1, repr)?
        }

        write!(f, "}}]")
    }
}

/// Computes the transversal of the base. It computes the orbit and the corresponding
/// set of representatives

// Needed since entry requires &mut
#[allow(clippy::map_entry)]
pub fn transversal<P, A>(g: &Group<P>, base: A::OrbitT, strat: &A) -> HashMap<A::OrbitT, P>
where
    P: Permutation,
    A: Action<P>,
{
    // Get the generatos
    let gens = &g.generators[..];
    let mut transversal = HashMap::new();

    // Init the transversal
    transversal.insert(base.clone(), P::id());

    // We use this to store elements to expand
    let mut to_traverse = VecDeque::new();
    to_traverse.push_back(base);

    // While we have stuff to do
    while !to_traverse.is_empty() {
        let delta = to_traverse.pop_front().unwrap();
        for g in gens {
            let gamma = strat.apply(g, delta.clone());

            if !transversal.contains_key(&gamma) {
                to_traverse.push_back(gamma.clone());
                let delta_repr = transversal.get(&delta).cloned().unwrap();
                transversal.insert(gamma, delta_repr.multiply(g));
            }
        }
    }

    transversal
}

/// Optimized version of transversal which does less work on complete groups
// Needed since entry requires &mut
#[allow(clippy::map_entry)]
pub fn transversal_complete_opt<P, A>(
    g: &Group<P>,
    base: A::OrbitT,
    strat: &A,
) -> HashMap<A::OrbitT, P>
where
    P: Permutation,
    A: Action<P>,
{
    // Get the generatos
    let gens = &g.generators[..];
    let maximal_orbit_size = g.symmetric_super_order();
    let mut transversal = HashMap::new();

    // Init the transversal
    transversal.insert(base.clone(), P::id());

    // We use this to store elements to expand
    let mut to_traverse = VecDeque::new();
    to_traverse.push_back(base);

    // While we have stuff to do
    while !to_traverse.is_empty() {
        let delta = to_traverse.pop_front().unwrap();
        for g in gens {
            let gamma = strat.apply(g, delta.clone());

            if !transversal.contains_key(&gamma) {
                to_traverse.push_back(gamma.clone());
                let delta_repr = transversal.get(&delta).cloned().unwrap();
                transversal.insert(gamma, delta_repr.multiply(g));
            }

            if transversal.len() == maximal_orbit_size {
                return transversal;
            }
        }
    }

    transversal
}
