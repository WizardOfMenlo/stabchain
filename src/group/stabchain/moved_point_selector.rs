use crate::perm::Permutation;

/// A very small trait, used to seamlessly switch between
/// an automatic base repr, and one which uses a precomputed one
pub trait MovedPointSelector<P> {
    /// Contract, should never be called with id
    fn moved_point(&mut self, p: &P) -> usize;
}

/// The default type of moved point selector. Should be a good choice
/// in most cases, yet not a silver bullet
pub type DefaultSelector = LmpSelector;

/// A selector that always chooses the biggest moved point in a permutation
#[derive(Default, Debug, Copy, Clone)]
pub struct LmpSelector;

impl<P> MovedPointSelector<P> for LmpSelector
where
    P: Permutation,
{
    fn moved_point(&mut self, p: &P) -> usize {
        p.lmp().expect("Should never be id")
    }
}

use std::collections::VecDeque;

/// A selector that chooses elements in order from a common base i.e. [1,2,3,4]
#[derive(Default, Clone)]
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

impl<P> MovedPointSelector<P> for FixedBaseSelector
where
    P: Permutation,
{
    fn moved_point(&mut self, _: &P) -> usize {
        self.base
            .pop_front()
            .expect("Base was shorter than expected")
    }
}

use std::iter::FromIterator;

impl FromIterator<usize> for FixedBaseSelector {
    fn from_iter<T: IntoIterator<Item = usize>>(iter: T) -> Self {
        FixedBaseSelector {
            base: iter.into_iter().collect(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::perm::DefaultPermutation;

    #[test]
    fn lmp_test() {
        let p = DefaultPermutation::from_vec(vec![1, 2, 3, 0]);
        let mut selector = LmpSelector;
        assert_eq!(selector.moved_point(&p), 3);
    }

    #[test]
    fn base_test() {
        let p = DefaultPermutation::from_vec(vec![1, 2, 3, 0]);
        let mut selector = FixedBaseSelector::new(&[0, 1, 2]);
        assert_eq!(selector.moved_point(&p), 0);
        assert_eq!(selector.moved_point(&p), 1);
        assert_eq!(selector.moved_point(&p), 2);
    }
}
