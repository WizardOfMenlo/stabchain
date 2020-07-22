use super::PermBuilder;
use crate::perm::Permutation;
use std::iter::FromIterator;

#[derive(Debug, Clone)]
pub struct Join<First, Second> {
    first: First,
    second: Second,
}

impl<First, Second> Join<First, Second> {
    pub(crate) fn new(first: First, second: Second) -> Self {
        Self { first, second }
    }
}

impl<P, First, Second> PermBuilder<P> for Join<First, Second>
where
    P: Permutation,
    First: PermBuilder<P>,
    Second: PermBuilder<P>,
{
    fn build_apply(&self, x: usize) -> usize {
        self.second.build_apply(self.first.build_apply(x))
    }

    fn collapse(&self) -> P {
        let first = self.first.collapse();
        let second = self.second.collapse();

        first.multiply(&second)
    }
}

#[derive(Debug, Clone)]
pub struct MultiJoin<P> {
    args: Vec<P>,
}

impl<P> FromIterator<P> for MultiJoin<P> {
    fn from_iter<T: IntoIterator<Item = P>>(iter: T) -> Self {
        MultiJoin {
            args: iter.into_iter().collect(),
        }
    }
}

impl<P: Clone + Permutation> PermBuilder<P> for MultiJoin<P> {
    fn build_apply(&self, mut x: usize) -> usize {
        for perm in &self.args {
            x = perm.apply(x)
        }

        x
    }

    fn collapse(&self) -> P {
        let mut res = P::id();
        for perm in &self.args {
            res = res.multiply(perm)
        }

        res
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::perm::{builder::PermBuilder, DefaultPermutation};

    #[test]
    fn test_single_join() {
        let cycle = DefaultPermutation::from_images(&[1, 2, 0]);
        assert_eq!(
            cycle.multiply(&cycle),
            cycle.build_multiply(&cycle).collapse()
        )
    }

    #[test]
    fn test_multi_join() {
        let cycle = DefaultPermutation::from_images(&[1, 2, 0]);
        let cycle2 = DefaultPermutation::from_images(&[2, 0, 1]);
        let direct = cycle.multiply(&cycle).multiply(&cycle2);
        let lazy = MultiJoin::from_iter(vec![cycle.clone(), cycle, cycle2]);
        assert_eq!(direct, lazy.collapse())
    }

    #[test]
    fn test_application() {
        let cycle = DefaultPermutation::from_images(&[1, 2, 0]);
        let cycle2 = DefaultPermutation::from_images(&[2, 0, 1]);
        let direct = cycle.multiply(&cycle2);
        let lazy = cycle.build_multiply(&cycle2);

        for i in 0..2 {
            assert_eq!(direct.apply(i), lazy.build_apply(i))
        }
    }

    #[test]
    fn test_multi_application() {
        let cycle = DefaultPermutation::from_images(&[1, 2, 0]);
        let cycle2 = DefaultPermutation::from_images(&[2, 0, 1]);
        let cycle3 = DefaultPermutation::from_images(&[0, 3, 1, 2]);
        let direct = cycle.multiply(&cycle2).multiply(&cycle3);
        let lazy = MultiJoin::from_iter(vec![cycle, cycle2, cycle3]);

        for i in 0..3 {
            assert_eq!(direct.apply(i), lazy.build_apply(i))
        }
    }
}
