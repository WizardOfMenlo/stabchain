use crate::perm::Permutation;

/// A very small trait, used to seamlessly switch between
/// an automatic base repr, and one which uses a precomputed one
pub trait MovedPointSelector<P, OrbitT = usize> {
    /// Contract, should never be called with id
    fn moved_point(&mut self, p: &P) -> OrbitT;
}

/// The default type of moved point selector. Should be a good choice
/// in most cases, yet not a silver bullet
pub type DefaultSelector = LmpSelector;

/// A selector that always chooses the biggest moved point in a permutation
#[derive(Default, Debug, Copy, Clone)]
pub struct LmpSelector;

impl<P> MovedPointSelector<P, usize> for LmpSelector
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
pub struct FixedBaseSelector<T = usize> {
    base: VecDeque<T>,
}

impl<T> FixedBaseSelector<T>
where
    T: Clone,
{
    /// Create from the given base
    pub fn new(base: &[T]) -> Self {
        FixedBaseSelector {
            base: base.iter().cloned().collect(),
        }
    }
}

impl<P, T> MovedPointSelector<P, T> for FixedBaseSelector<T>
where
    P: Permutation,
{
    fn moved_point(&mut self, _: &P) -> T {
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
        let p = DefaultPermutation::from_images(&[1, 2, 3, 0]);
        let mut selector = LmpSelector;
        assert_eq!(selector.moved_point(&p), 3);
    }

    #[test]
    fn base_test() {
        let p = DefaultPermutation::from_images(&[1, 2, 3, 0]);
        let mut selector = FixedBaseSelector::new(&[0, 1, 2]);
        assert_eq!(selector.moved_point(&p), 0);
        assert_eq!(selector.moved_point(&p), 1);
        assert_eq!(selector.moved_point(&p), 2);
    }
}
