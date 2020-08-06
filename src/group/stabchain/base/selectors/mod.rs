//! Utilities for selecting base points of a stabilizer chain

pub mod adaptors;
pub mod fixed_base;
pub mod moved_point;

pub use fixed_base::FixedBaseSelector;
pub use moved_point::{FmpSelector, LmpSelector};

/// A very small trait, used to seamlessly switch between
/// an automatic base repr, and one which uses a precomputed one
pub trait MovedPointSelector<P, OrbitT = usize>: Clone {
    /// Contract, should never be called with id
    fn moved_point(&mut self, p: &P, pos: usize) -> OrbitT;
}

/// The default type of moved point selector. Should be a good choice
/// in most cases, yet not a silver bullet
pub type DefaultSelector = LmpSelector;

#[cfg(test)]
mod tests {
    use super::*;
    use crate::perm::*;

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
