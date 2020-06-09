use super::ClassicalPermutation;
use crate::perm::Permutation;
use serde::{Deserialize, Serialize};

/// A permutation in disjoint cycle notation
#[derive(Debug, Serialize, Deserialize)]
pub struct CyclePermutation {
    cycles: Vec<Vec<usize>>,
}

impl CyclePermutation {
    fn from_vec_unchecked(v: Vec<Vec<usize>>) -> Self {
        CyclePermutation { cycles: v }
    }
}

impl From<Permutation> for CyclePermutation {
    fn from(perm: Permutation) -> Self {
        CyclePermutation::from(ClassicalPermutation::from(perm))
    }
}

impl From<ClassicalPermutation> for CyclePermutation {
    fn from(perm: ClassicalPermutation) -> Self {
        use std::collections::HashSet;

        let n = perm.lmp();
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
            cycles.push(cycle);
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
        assert_eq!(id.cycles.len(), 0);
    }

    #[test]
    fn two_cycle() {
        let perm: CyclePermutation = ClassicalPermutation::from_slice(&vec![2, 5, 4, 3, 1]).into();
        assert_eq!(perm.cycles.len(), 2);
        assert_eq!(perm.cycles, vec![vec![1, 2, 5], vec![3, 4]])
    }

    #[test]
    fn cyclic_perm() {
        let perm: CyclePermutation =
            ClassicalPermutation::from_slice(&vec![4, 5, 7, 6, 8, 2, 1, 3]).into();
        assert_eq!(perm.cycles.len(), 1);
        assert_eq!(perm.cycles, vec![vec![1, 4, 6, 2, 5, 8, 3, 7]])
    }
}
