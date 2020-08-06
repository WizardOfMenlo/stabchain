//! Utilities for selecting base points of a stabilizer chain

use crate::perm::Permutation;

const ID_ERROR: &str = "Should never be id";

/// A very small trait, used to seamlessly switch between
/// an automatic base repr, and one which uses a precomputed one
pub trait MovedPointSelector<P, OrbitT = usize>: Clone {
    /// Contract, should never be called with id
    fn moved_point(&mut self, p: &P, pos: usize) -> OrbitT;
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
    fn moved_point(&mut self, p: &P, _: usize) -> usize {
        p.lmp().expect(ID_ERROR)
    }
}

/// A selector that chooses elements in order from a common base i.e. [1,2,3,4]
#[derive(Default, Clone)]
pub struct FixedBaseSelector<T = usize> {
    base: Vec<T>,
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
    T: Clone,
{
    fn moved_point(&mut self, _: &P, pos: usize) -> T {
        self.base
            .get(pos)
            .cloned()
            .expect("Base was shorter than expected")
    }
}
///Struct for a base point selector that takes the first point to be moved.
#[derive(Default, Debug, Copy, Clone)]
pub struct FmpSelector;

impl<P> MovedPointSelector<P, usize> for FmpSelector
where
    P: Permutation,
{
    fn moved_point(&mut self, p: &P, _: usize) -> usize {
        //Find the first point that isn't fixed.
        (0..p.lmp().expect(ID_ERROR))
            .find(|&x| p.apply(x) != x)
            .expect(ID_ERROR)
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
        assert_eq!(selector.moved_point(&p, 0), 3);
    }

    #[test]
    fn base_test() {
        let p = DefaultPermutation::from_images(&[1, 2, 3, 0]);
        let mut selector = FixedBaseSelector::new(&[0, 1, 2]);
        assert_eq!(selector.moved_point(&p, 0), 0);
        assert_eq!(selector.moved_point(&p, 1), 1);
        assert_eq!(selector.moved_point(&p, 2), 2);
    }

    #[test]
    fn fmp_test() {
        let p1 = DefaultPermutation::from_vec(vec![0, 1, 3, 2]);
        let p2 = DefaultPermutation::from_vec(vec![1, 0]);
        let mut selector = FmpSelector;
        assert_eq!(selector.moved_point(&p1, 0), 2);
        assert_eq!(selector.moved_point(&p2, 1), 0);
    }

    #[should_panic]
    #[test]
    /// The selector should not be passed the ID, and will panic otherwise.
    fn fmp_test_id() {
        let mut selector = FmpSelector;
        let id = DefaultPermutation::id();
        selector.moved_point(&id, 0);
    }
}
