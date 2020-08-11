use super::BaseSelector;

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
            base: base.to_vec(),
        }
    }
}

impl<P, T> BaseSelector<P, T> for FixedBaseSelector<T>
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

use std::iter::FromIterator;

impl FromIterator<usize> for FixedBaseSelector {
    fn from_iter<T: IntoIterator<Item = usize>>(iter: T) -> Self {
        FixedBaseSelector {
            base: iter.into_iter().collect(),
        }
    }
}
