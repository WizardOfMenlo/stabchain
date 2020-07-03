use super::ClassicalPermutation;
use crate::perm::DefaultPermutation;
use serde::{Deserialize, Serialize};

use std::fmt;

use num::integer::lcm;

/// A permutation in disjoint cycle notation
#[derive(Debug, Serialize, Deserialize)]
pub struct CyclePermutation {
    cycles: Vec<Vec<usize>>,
}

impl CyclePermutation {
    pub fn id() -> Self {
        CyclePermutation::from_vec(Vec::new())
    }

    pub fn from_vec(cycles: Vec<Vec<usize>>) -> Self {
        use std::collections::HashMap;
        // Check the element range
        assert!(cycles.iter().flatten().all(|&i| i > 0));

        // Get the maximal element in the permutation
        let n = cycles.iter().flatten().max().cloned().unwrap_or(0);

        if n == 0 {
            return CyclePermutation::from_vec_unchecked(cycles);
        }

        let mut counts = HashMap::new();

        for i in cycles.iter().flatten() {
            *counts.entry(*i).or_insert(0) += 1;
        }

        // Check every element occurs at most once
        assert!(counts.values().all(|&i| i <= 1));

        CyclePermutation::from_vec_unchecked(cycles)
    }

    /// Get the order of the permutations
    pub fn order(&self) -> usize {
        self.cycles.iter().map(|s| s.len()).fold(1, lcm)
    }

    /// Been needing this for a while. (1 2 3)
    pub fn single_cycle(cycle: &[usize]) -> Self {
        Self::from_vec(vec![cycle.iter().copied().collect()])
    }

    fn from_vec_unchecked(v: Vec<Vec<usize>>) -> Self {
        CyclePermutation { cycles: v }
    }

    pub fn cycles(&self) -> &[Vec<usize>] {
        &self.cycles[..]
    }
}

impl From<DefaultPermutation> for CyclePermutation {
    fn from(perm: DefaultPermutation) -> Self {
        CyclePermutation::from(ClassicalPermutation::from(perm))
    }
}

impl From<CyclePermutation> for DefaultPermutation {
    fn from(perm: CyclePermutation) -> Self {
        let int: ClassicalPermutation = perm.into();
        int.into()
    }
}

impl fmt::Display for CyclePermutation {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        if self.cycles().is_empty() {
            write!(f, "()")?;
            return Ok(());
        }

        for cycle in &self.cycles {
            write!(f, "(")?;
            for img in cycle[0..cycle.len() - 1].iter() {
                write!(f, "{} ", img)?;
            }
            write!(f, "{})", cycle[cycle.len() - 1])?;
        }

        Ok(())
    }
}

impl From<ClassicalPermutation> for CyclePermutation {
    fn from(perm: ClassicalPermutation) -> Self {
        use std::collections::HashSet;

        let n = perm.lmp();
        // This path means that the permutation is the identity
        if n.is_none() {
            return CyclePermutation::from_vec_unchecked(Vec::new());
        }

        let n = n.unwrap();
        let mut accounted = HashSet::new();

        let mut cycles = Vec::new();
        for i in 1..=n {
            if accounted.contains(&i) {
                continue;
            }

            accounted.insert(i);

            let mut current = i;
            let mut cycle = vec![current];
            loop {
                current = perm.apply(current);
                if cycle.contains(&current) {
                    break;
                }

                accounted.insert(current);
                cycle.push(current);
            }

            // Do not add 1-cycles
            if cycle.len() > 1 {
                cycles.push(cycle);
            }
        }

        CyclePermutation::from_vec_unchecked(cycles)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn id_cycle() {
        let id: CyclePermutation = ClassicalPermutation::id().into();
        assert_eq!(id.cycles().len(), 0);
    }

    #[test]
    fn two_cycle() {
        let perm: CyclePermutation = ClassicalPermutation::from_slice(&[2, 5, 4, 3, 1]).into();
        assert_eq!(perm.cycles().len(), 2);
        assert_eq!(perm.cycles, vec![vec![1, 2, 5], vec![3, 4]])
    }

    #[test]
    fn cyclic_perm() {
        let perm: CyclePermutation =
            ClassicalPermutation::from_slice(&[4, 5, 7, 6, 8, 2, 1, 3]).into();
        assert_eq!(perm.cycles().len(), 1);
        assert_eq!(perm.cycles, vec![vec![1, 4, 6, 2, 5, 8, 3, 7]])
    }

    #[test]
    fn create_from_cycles() {
        let cyclic = CyclePermutation::single_cycle(&[1, 2, 3, 4, 5]);
        assert_eq!(cyclic.cycles().len(), 1);
    }

    #[test]
    fn create_from_cycles_multiple() {
        let cyclic = CyclePermutation::from_vec(vec![vec![1, 3], vec![2, 4]]);
        assert_eq!(cyclic.cycles().len(), 2);
    }

    #[test]
    #[should_panic]
    fn create_from_cycles_invalid_zero() {
        let _cyclic = CyclePermutation::from_vec(vec![vec![1, 3], vec![2, 0]]);
    }

    #[test]
    #[should_panic]
    fn create_from_cycles_invalid_repetition() {
        let _cyclic = CyclePermutation::from_vec(vec![vec![1, 3, 4], vec![2, 4]]);
    }

    #[test]
    fn cyclical_to_classical_conversion_id() {
        let cyclic: ClassicalPermutation = CyclePermutation::from_vec(vec![]).into();
        assert_eq!(cyclic, ClassicalPermutation::id());
    }

    #[test]
    fn cyclical_to_classical_transposition() {
        let cyclic: ClassicalPermutation = CyclePermutation::single_cycle(&[1, 2]).into();
        let classic = ClassicalPermutation::from_slice(&[2, 1]);
        assert_eq!(cyclic, classic);
    }

    #[test]
    fn cyclical_to_classical_multiple_cycles() {
        let cyclic: ClassicalPermutation =
            CyclePermutation::from_vec(vec![vec![1, 3], vec![2, 4]]).into();
        let classic = ClassicalPermutation::from_slice(&[3, 4, 1, 2]);
        assert_eq!(cyclic, classic);
    }

    #[test]
    fn test_order_id() {
        let cyclic = CyclePermutation::id();
        assert_eq!(cyclic.order(), 1);
    }

    #[test]
    fn test_order_single_cycle() {
        let cyclic = CyclePermutation::single_cycle(&[1, 2, 3, 8, 9]);
        assert_eq!(cyclic.order(), 5);
    }

    #[test]
    fn test_order_double_cycle() {
        let cyclic = CyclePermutation::from_vec(vec![vec![1, 2, 3], vec![5, 6]]);
        assert_eq!(cyclic.order(), 6);
    }

    #[test]
    fn test_order_triple_cycle() {
        let cyclic = CyclePermutation::from_vec(vec![vec![1, 2, 3], vec![5, 6], vec![7, 8, 9, 10]]);
        assert_eq!(cyclic.order(), 12);
    }
}
