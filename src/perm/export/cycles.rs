use super::ClassicalPermutation;
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

impl From<ClassicalPermutation> for CyclePermutation {
    fn from(perm: ClassicalPermutation) -> Self {
        let n = perm.lmp();
        if n.is_none() {
            return CyclePermutation::from_vec_unchecked(Vec::new());
        }

        let n = n.unwrap();
        let mut candidates: Vec<_> = (1..=n).collect();

        let mut cycles = Vec::new();
        while !candidates.is_empty() {
            let mut current = candidates.pop().unwrap();
            let mut cycle = vec![current];
            loop {
                current = perm.apply(current);
                if cycle.contains(&current) {
                    break;
                }
                cycle.push(current);
            }
            cycles.push(cycle);
        }

        CyclePermutation::from_vec_unchecked(cycles)
    }
}
