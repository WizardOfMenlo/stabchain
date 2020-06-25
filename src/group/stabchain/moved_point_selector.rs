use crate::perm::Permutation;

/// A very small trait, used to seamlessly switch between
/// an automatic base repr, and one which uses a precomputed one
pub trait MovedPointSelector {
    /// Contract, should never be called with id
    fn moved_point(&mut self, p: &Permutation) -> usize;
}

#[derive(Default)]
pub struct LmpSelector;

impl MovedPointSelector for LmpSelector {
    fn moved_point(&mut self, p: &Permutation) -> usize {
        p.lmp().expect("Should never be id")
    }
}

use std::collections::VecDeque;
#[derive(Default)]
pub struct FixedBaseSelector {
    base: VecDeque<usize>,
}

impl FixedBaseSelector {
    pub(crate) fn new(base: &[usize]) -> Self {
        FixedBaseSelector {
            base: base.iter().copied().collect(),
        }
    }
}

impl MovedPointSelector for FixedBaseSelector {
    fn moved_point(&mut self, _: &Permutation) -> usize {
        self.base
            .pop_front()
            .expect("Base was shorter than expected")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn lmp_test() {
        let p = Permutation::from_vec(vec![1, 2, 3, 0]);
        let mut selector = LmpSelector;
        assert_eq!(selector.moved_point(&p), 3);
    }

    #[test]
    fn base_test() {
        let p = Permutation::from_vec(vec![1, 2, 3, 0]);
        let mut selector = FixedBaseSelector::new(&[0, 1, 2]);
        assert_eq!(selector.moved_point(&p), 0);
        assert_eq!(selector.moved_point(&p), 1);
        assert_eq!(selector.moved_point(&p), 2);
    }
}
