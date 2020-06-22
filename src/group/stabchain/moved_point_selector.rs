use crate::perm::Permutation;

pub(crate) trait MovedPointSelector {
    /// Contract, should never be called with id
    fn moved_point(&mut self, p: &Permutation) -> usize;
}

pub(crate) struct LmpSelector;

impl MovedPointSelector for LmpSelector {
    fn moved_point(&mut self, p: &Permutation) -> usize {
        p.lmp().expect("Should never be id")
    }
}

use std::collections::VecDeque;
pub(crate) struct FixedBaseSelector {
    base: VecDeque<usize>,
}

impl FixedBaseSelector {
    pub(crate) fn new(base: &[usize]) -> Self {
        FixedBaseSelector {
            base: base.into_iter().copied().collect(),
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
