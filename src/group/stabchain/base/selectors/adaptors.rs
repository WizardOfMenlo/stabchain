use std::fmt::Debug;

use super::BaseSelector;

/// A struct for partial base selectors
#[derive(Debug, Clone)]
pub struct PartialSelector<F, S> {
    limit: usize,
    first: F,
    second: S,
}

impl<F, S> PartialSelector<F, S> {
    /// Create a new selector, that uses the first selector for limit number of points, and
    /// the second from there on
    pub fn new(first: F, limit: usize, second: S) -> Self {
        PartialSelector {
            first,
            limit,
            second,
        }
    }
}

impl<P, OrbitT, F, S> BaseSelector<P, OrbitT> for PartialSelector<F, S>
where
    F: BaseSelector<P, OrbitT>,
    S: BaseSelector<P, OrbitT>,
{
    fn moved_point(&mut self, p: &P, pos: usize) -> OrbitT {
        if pos < self.limit {
            self.first.moved_point(p, pos)
        } else {
            self.second.moved_point(p, pos - self.limit)
        }
    }
}
// Struct for a Partial Selector that first uses a fixed base selector.
#[derive(Debug, Clone)]
pub struct PartialFixedBaseSelector<S, T = usize> {
    selector: PartialSelector<super::FixedBaseSelector<T>, S>,
}

impl<S, T> PartialFixedBaseSelector<S, T>
where
    T: Clone,
{
    pub fn new(base: &[T], after_partial: S) -> Self {
        // Create a partial selector that uses the fixed base first and then the second selector.
        PartialFixedBaseSelector {
            selector: PartialSelector::new(
                super::FixedBaseSelector::new(base),
                base.len(),
                after_partial,
            ),
        }
    }
}

impl<P, OrbitT, S> BaseSelector<P, OrbitT> for PartialFixedBaseSelector<S, OrbitT>
where
    OrbitT: Clone + Debug,
    S: BaseSelector<P, OrbitT>,
{
    fn moved_point(&mut self, p: &P, pos: usize) -> OrbitT {
        self.selector.moved_point(p, pos)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn fixed_test() {
        use super::super::FixedBaseSelector;

        use crate::perm::*;

        let base = [0, 1, 2, 3, 4, 5];

        let mut selector = PartialSelector::new(
            FixedBaseSelector::new(&base[0..3]),
            3,
            FixedBaseSelector::new(&base[3..6]),
        );

        let mut full_selector = FixedBaseSelector::new(&base);

        for (i, b) in base.iter().enumerate() {
            let full = full_selector.moved_point(&DefaultPermutation::id(), i);
            let partial = selector.moved_point(&DefaultPermutation::id(), i);

            assert_eq!(full, partial);
            assert_eq!(full, *b);
        }
    }

    #[test]
    fn partial_lmp() {
        use super::super::{FixedBaseSelector, LmpSelector};
        use crate::group::Group;

        use crate::perm::*;

        let base = [0, 1, 2, 3, 4, 5];

        let mut selector =
            PartialSelector::new(FixedBaseSelector::new(&base), 6, LmpSelector::default());

        let g = Group::symmetric(10);
        let mut rand = g.rng();
        for (i, perm) in (0..6).zip(std::iter::repeat_with(|| rand.random_permutation())) {
            assert_eq!(selector.moved_point(&perm, i), i);
        }

        for (i, perm) in
            (6..20).zip(std::iter::repeat_with(|| rand.random_permutation()).filter(|p| !p.is_id()))
        {
            assert_eq!(selector.moved_point(&perm, i), perm.lmp().unwrap());
        }
    }
}
