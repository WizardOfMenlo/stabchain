//! Transversal using a Schrier Vector approach to save memory over standard

use super::skeleton::TransversalSkeleton;
use crate::group::orbit::transversal::Transversal;
use crate::group::Group;
use crate::perm::actions::SimpleApplication;
use crate::perm::{Action, DefaultPermutation, Permutation};

use crate::DetHashMap;
use std::collections::{HashMap, VecDeque};

use crate::group::orbit::abstraction::FactoredTransversalResolver;

///Represents a Factored Traversal/Schrier Vector of an elements orbit.
/// Contains the base of this traversal, and a factored traversal of the orbit.
pub type FactoredTransversal<P = DefaultPermutation, A = SimpleApplication<P>> =
    TransversalSkeleton<P, FactoredTransversalResolver<A>, A>;

pub(crate) fn representative_raw<P, S, A>(
    transversal: &HashMap<A::OrbitT, P, S>,
    base: A::OrbitT,
    point: A::OrbitT,
    strat: &A,
) -> Option<P>
where
    P: Permutation,
    S: std::hash::BuildHasher,
    A: Action<P>,
{
    // Check if the element is in the orbit.
    if !transversal.contains_key(&point) {
        None
    } else {
        let mut orbit_point = point.clone();
        let mut rep = P::id();
        // Move along the orbit till we reach a representative that the base moves to the point.
        while orbit_point != base {
            let g_inv = transversal.get(&orbit_point).unwrap();
            rep = rep.multiply(g_inv);
            orbit_point = strat.apply(g_inv, orbit_point);
        }
        // Invert at the end, as the inverses are used.
        // If we want fgh, then we can instead do (h^-1, g^-1, f^-1)^-1.
        debug_assert!(strat.apply(&rep.inv(), base) == point);
        Some(rep.inv())
    }
}

#[deprecated(since = "0.1.1")]
pub(crate) fn representative_raw_as_word<P, S, A>(
    transversal: &HashMap<A::OrbitT, P, S>,
    base: A::OrbitT,
    point: A::OrbitT,
    strat: &A,
) -> Option<Vec<P>>
where
    P: Permutation,
    S: std::hash::BuildHasher,
    A: Action<P>,
{
    // Check if the element is in the orbit.
    if !transversal.contains_key(&point) {
        None
    } else {
        let mut orbit_point = point.clone();
        let mut rep = vec![];
        // Move along the orbit till we reach a representative that the base moves to the point.
        while orbit_point != base {
            let g_inv = transversal.get(&orbit_point).unwrap();
            rep.push(g_inv.inv());
            orbit_point = strat.apply(g_inv, orbit_point);
        }
        rep.reverse();
        Some(rep)
    }
}

impl<P> FactoredTransversal<P>
where
    P: Permutation,
{
    /// Given a group, construct the factored transversal
    ///```
    /// use stabchain::group::orbit::transversal::FactoredTransversal;
    /// use stabchain::group::Group;
    /// let fc = FactoredTransversal::new(&Group::symmetric(10), 1);
    ///```
    pub fn new(g: &Group<P>, base: usize) -> Self {
        Self::new_with_action(g, base, &SimpleApplication::default())
    }

    /// Given a set of generating elements and element, construct the factored transversal.
    /// Note, this algorithm does not use methods to optimize depth of three, see Seress2003 Section 4.4.
    ///```
    /// use stabchain::group::orbit::transversal::FactoredTransversal;
    /// use stabchain::perm::*;
    /// let fc = FactoredTransversal::from_generators(1, &[DefaultPermutation::from_images(&[1, 0])]);
    ///```
    pub fn from_generators(base: usize, gens: &[P]) -> Self {
        FactoredTransversal::new(&Group::new(gens), base)
    }
}

impl<P, A> FactoredTransversal<P, A>
where
    P: Permutation,
    A: Action<P>,
{
    /// Build a factored transversal using a predefined action
    pub fn new_with_action(g: &Group<P>, base: A::OrbitT, strat: &A) -> Self {
        FactoredTransversal::from_raw(
            base.clone(),
            factored_transversal(g, base, strat),
            FactoredTransversalResolver(strat.clone()),
        )
    }
}

use std::fmt;
impl<P> fmt::Display for FactoredTransversal<P>
where
    P: fmt::Display + Permutation,
{
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "[FactoredTransversal: base := {}, elements := {{",
            self.base() + 1,
        )?;

        for (orbit, repr) in self.raw_elements() {
            write!(f, "({}, {}) ", orbit + 1, repr)?
        }

        write!(f, "}}]")
    }
}

/// Computes the factored transversal for a Group
pub fn factored_transversal<P, A>(
    g: &Group<P>,
    base: A::OrbitT,
    strat: &A,
) -> DetHashMap<A::OrbitT, P>
where
    P: Permutation,
    A: Action<P>,
{
    let gens = g.generators();
    let mut transversal = DetHashMap::default();
    let id = P::id();
    transversal.insert(base.clone(), id);
    // Orbit elements that have not been used yet.
    let mut to_traverse = VecDeque::new();
    to_traverse.push_back(base);
    // While there are still elements of the orbit unused.
    while !to_traverse.is_empty() {
        //Take an unused element.
        let delta = to_traverse.pop_front().unwrap();
        for g in gens {
            let point = strat.apply(g, delta.clone());

            // If the orbit doensn't contain this value, then add it to the factored transversal.
            transversal.entry(point.clone()).or_insert_with(|| {
                to_traverse.push_back(point);
                g.inv()
            });
        }
    }

    transversal
}

/// Computes the factored transversal for a Group. Use optmization on complete orbits
pub fn factored_transversal_complete_opt<P, A>(
    g: &Group<P>,
    base: A::OrbitT,
    strat: &A,
) -> DetHashMap<A::OrbitT, P>
where
    P: Permutation,
    A: Action<P>,
{
    let maximal_orbit_size = g.symmetric_super_order();
    let gens = g.generators();
    let mut transversal = DetHashMap::default();
    let id = P::id();
    transversal.insert(base.clone(), id);
    // Orbit elements that have not been used yet.
    let mut to_traverse = VecDeque::new();
    to_traverse.push_back(base);
    // While there are still elements of the orbit unused.
    while !to_traverse.is_empty() {
        //Take an unused element.
        let delta = to_traverse.pop_front().unwrap();
        for g in gens {
            let point = strat.apply(g, delta.clone());

            // If the orbit doensn't contain this value, then add it to the factored transversal.
            transversal.entry(point.clone()).or_insert_with(|| {
                to_traverse.push_back(point);
                g.inv()
            });

            if transversal.len() == maximal_orbit_size {
                return transversal;
            }
        }
    }

    transversal
}

#[cfg(test)]
mod tests {
    use super::{FactoredTransversal, Transversal};
    use crate::perm::{DefaultPermutation, Permutation};

    /// Test the factored transversal calculation for a generating set with multiple generators.
    #[test]
    fn multiple_generators() {
        use crate::perm::export::CyclePermutation;
        // Cycle notation is used for conveninece, but we do need to switch to 0 indexed for assertions.
        let gens: Vec<DefaultPermutation> = vec![
            CyclePermutation::from_vec(vec![vec![1, 6, 4, 3], vec![2, 7, 5]]).into(),
            CyclePermutation::from_vec(vec![vec![1, 4], vec![2, 6, 3]]).into(),
        ];
        //All points should be in the orbit (according to GAP)
        for i in 0_usize..6 {
            let fc = FactoredTransversal::from_generators(i, &gens[..]);
            for j in 0_usize..6 {
                assert!(fc.in_orbit(j));
                assert_eq!(j, fc.representative(j).unwrap().apply(i));
            }
        }
    }

    /// Test the factored transversal calculation for a generating set with multiple generators
    /// when not all elements are in the orbit.
    #[test]
    fn multiple_generators_non_full_orbit() {
        use crate::perm::export::CyclePermutation;
        // Cycle notation is used for conveninece, but we do need to switch to 0 indexed for assertions.
        let gens: Vec<DefaultPermutation> = vec![
            CyclePermutation::single_cycle(&[1, 2, 6]).into(),
            CyclePermutation::single_cycle(&[3, 5, 7]).into(),
        ];
        let fc1 = FactoredTransversal::from_generators(5, &gens[..]);
        assert_eq!(3, fc1.len());
        let fc2 = FactoredTransversal::from_generators(4, &gens[..]);
        assert_eq!(3, fc2.len());
        let fc3 = FactoredTransversal::from_generators(3, &gens[..]);
        assert_eq!(1, fc3.len());
        for i in [0, 1, 5].iter() {
            // Tests for fc1
            assert!(fc1.in_orbit(*i));
            assert_eq!(*i, fc1.representative(*i).unwrap().apply(5));
            // Tests for fc2
            assert!(!fc2.in_orbit(*i));
            assert_eq!(None, fc2.representative(*i));
            // Tests for fc3
            assert!(!fc3.in_orbit(*i));
            assert_eq!(None, fc3.representative(*i));
        }
        for i in [2, 4, 6].iter() {
            // Tests for fc1
            assert!(!fc1.in_orbit(*i));
            assert_eq!(None, fc1.representative(*i));
            // Tests for fc2
            assert!(fc2.in_orbit(*i));
            assert_eq!(*i, fc2.representative(*i).unwrap().apply(4));
            // Tests for fc3
            assert!(!fc3.in_orbit(*i));
            assert_eq!(None, fc3.representative(*i));
        }
        // Now to test for element 3
        // Tests for fc1
        assert!(!fc1.in_orbit(3));
        assert_eq!(None, fc1.representative(3));
        // Tests for fc2
        assert!(!fc2.in_orbit(3));
        assert_eq!(None, fc2.representative(3));
        // Tests for fc3
        assert!(fc3.in_orbit(3));
        assert_eq!(3, fc3.representative(3).unwrap().apply(3));
    }
}
