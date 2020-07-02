use crate::perm::Permutation;

const ID_ERROR: &str = "Should never be id";

/// A very small trait, used to seamlessly switch between
/// an automatic base repr, and one which uses a precomputed one
pub trait MovedPointSelector {
    /// Contract, should never be called with id
    fn moved_point(&mut self, p: &Permutation) -> usize;
}

/// The default type of moved point selector. Should be a good choice
/// in most cases, yet not a silver bullet
pub type DefaultSelector = LmpSelector;

/// A selector that always chooses the biggest moved point in a permutation
#[derive(Default, Debug, Copy, Clone)]
pub struct LmpSelector;

impl MovedPointSelector for LmpSelector {
    fn moved_point(&mut self, p: &Permutation) -> usize {
        p.lmp().expect(ID_ERROR)
    }
}

use std::collections::VecDeque;

/// A selector that chooses elements in order from a common base i.e. [1,2,3,4]
#[derive(Default)]
pub struct FixedBaseSelector {
    base: VecDeque<usize>,
}

impl FixedBaseSelector {
    /// Create from the given base
    pub fn new(base: &[usize]) -> Self {
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
///Struct for a base point selector that takes the first point to be moved.
pub(crate) struct FmpSelector;

impl MovedPointSelector for FmpSelector {
    fn moved_point(&mut self, p: &Permutation) -> usize {
        //Find the first point that isn't fixed.
        p.as_vec()
            .iter()
            .enumerate()
            .position(|(i, x)| i != *x)
            .expect(ID_ERROR)
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

    #[test]
    fn fmp_test() {
        let p1 = Permutation::from_vec(vec![0, 1, 3, 2]);
        let p2 = Permutation::from_vec(vec![1, 0]);
        let mut selector = FmpSelector;
        assert_eq!(selector.moved_point(&p1), 2);
        assert_eq!(selector.moved_point(&p2), 0);
    }

    #[should_panic]
    #[test]
    /// The selector should not be passed the ID, and will panic otherwise.
    fn fmp_test_id() {
        let mut selector = FmpSelector;
        let id = Permutation::id();
        selector.moved_point(&id);
    }
}
