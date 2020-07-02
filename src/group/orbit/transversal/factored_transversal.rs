use super::skeleton::TransversalSkeleton;
use crate::group::orbit::transversal::Transversal;
use crate::group::Group;
use crate::perm::Permutation;

use std::collections::HashMap;
use std::collections::VecDeque;

use crate::group::orbit::abstraction::FactoredTransversalResolver;

///Represents a Factored Traversal/Schrier Vector of an elements orbit.
/// Contains the base of this traversal, and a factored traversal of the orbit.
pub type FactoredTransversal = TransversalSkeleton<FactoredTransversalResolver>;

pub(crate) fn representative_raw<S: std::hash::BuildHasher>(
    transversal: &HashMap<usize, Permutation, S>,
    base: usize,
    point: usize,
) -> Option<Permutation> {
    // Check if the element is in the orbit.
    if !transversal.contains_key(&point) {
        None
    } else {
        let mut orbit_point = point;
        let mut rep = Permutation::id();
        // Move along the orbit till we reach a representative that the base moves to the point.
        while orbit_point != base {
            let g_inv = transversal.get(&orbit_point).unwrap();
            rep = rep.multiply(g_inv);
            orbit_point = g_inv.apply(orbit_point);
        }
        // Invert at the end, as the inverses are used.
        // If we want fgh, then we can instead do (h^-1, g^-1, f^-1)^-1.
        Some(rep.inv())
    }
}

impl FactoredTransversal {
    /// Given a group, construct the factored transversal
    ///```
    /// use stabchain::group::orbit::transversal::FactoredTransversal;
    /// use stabchain::group::Group;
    /// let fc = FactoredTransversal::new(&Group::symmetric(10), 1);
    ///```
    pub fn new(g: &Group, base: usize) -> Self {
        FactoredTransversal::from_raw(
            base,
            factored_transversal(g, base),
            FactoredTransversalResolver,
        )
    }

    /// Given a set of generating elements and element, construct the factored transversal.
    /// Note, this algorithm does not use methods to optimize depth of three, see Seress2003 Section 4.4.
    ///```
    /// use stabchain::group::orbit::transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(1, &[Permutation::from(vec![1, 0])]);
    ///```
    pub fn from_generators(base: usize, gens: &[Permutation]) -> Self {
        FactoredTransversal::new(&Group::new(gens), base)
    }
}

use std::fmt;
impl fmt::Display for FactoredTransversal {
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
pub fn factored_transversal(g: &Group, base: usize) -> HashMap<usize, Permutation> {
    let gens = g.generators();
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
            let point = g.apply(delta);

            // If the orbit doensn't contain this value, then add it to the factored transversal.
            transversal.entry(point).or_insert_with(|| {
                to_traverse.push_back(point);
                g.inv()
            });
        }
    }

    transversal
}

/// Computes the factored transversal for a Group. Use optmization on complete orbits
pub fn factored_transversal_complete_opt(g: &Group, base: usize) -> HashMap<usize, Permutation> {
    let maximal_orbit_size = g.symmetric_super_order();
    let gens = g.generators();
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
            let point = g.apply(delta);

            // If the orbit doensn't contain this value, then add it to the factored transversal.
            transversal.entry(point).or_insert_with(|| {
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
    use crate::perm::Permutation;

    #[test]
    /// Test the Factored Traversal of an empty set of generators.
    /// Each orbit should be a singleton, as the generators don't move any points.
    fn id_transveral() {
        let fc = FactoredTransversal::from_generators(3, &[]);
        assert_eq!(fc.base(), 3);
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
    /// Test the factored transversal calculation for a generating set with multiple generators.
    #[test]
    fn multiple_generators() {
        use crate::perm::export::CyclePermutation;
        // Cycle notation is used for conveninece, but we do need to switch to 0 indexed for assertions.
        let gens: Vec<Permutation> = vec![
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
        let gens: Vec<Permutation> = vec![
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