use super::super::Permutation;
use super::PermBuilder;

#[derive(Debug, Clone)]
pub struct Join<First, Second>
where
    First: PermBuilder,
    Second: PermBuilder,
{
    first: First,
    second: Second,
}

impl<First, Second> Join<First, Second>
where
    First: PermBuilder,
    Second: PermBuilder,
{
    pub(crate) fn new(first: First, second: Second) -> Self {
        Self { first, second }
    }
}

impl<First, Second> PermBuilder for Join<First, Second>
where
    First: PermBuilder,
    Second: PermBuilder,
{
    fn build_apply(&self, x: usize) -> usize {
        self.second.build_apply(self.first.build_apply(x))
    }

    fn collapse(&self) -> Permutation {
        let first = self.first.collapse();
        let second = self.second.collapse();

        first.multiply(&second)
    }
}

#[derive(Debug, Clone)]
pub struct MultiJoin {
    args: Vec<Permutation>,
}

impl MultiJoin {
    pub fn new(it: impl IntoIterator<Item = Permutation>) -> Self {
        MultiJoin {
            args: it.into_iter().collect(),
        }
    }
}

impl PermBuilder for MultiJoin {
    fn build_apply(&self, mut x: usize) -> usize {
        for perm in &self.args {
            x = perm.apply(x)
        }

        x
    }

    fn collapse(&self) -> Permutation {
        let mut res = Permutation::id();
        for perm in &self.args {
            res = res.multiply(perm)
        }

        res
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::perm::{PermBuilder, Permutation};

    #[test]
    fn test_single_join() {
        let cycle = Permutation::from_vec(vec![1, 2, 0]);
        assert_eq!(
            cycle.multiply(&cycle),
            cycle.build_multiply(&cycle).collapse()
        )
    }

    #[test]
    fn test_multi_join() {
        let cycle = Permutation::from_vec(vec![1, 2, 0]);
        let cycle2 = Permutation::from_vec(vec![2, 0, 1]);
        let direct = cycle.multiply(&cycle).multiply(&cycle2);
        let lazy = MultiJoin::new(vec![cycle.clone(), cycle, cycle2]);
        assert_eq!(direct, lazy.collapse())
    }

    #[test]
    fn test_application() {
        let cycle = Permutation::from_vec(vec![1, 2, 0]);
        let cycle2 = Permutation::from_vec(vec![2, 0, 1]);
        let direct = cycle.multiply(&cycle2);
        let lazy = cycle.build_multiply(&cycle2);

        for i in 0..2 {
            assert_eq!(direct.apply(i), lazy.build_apply(i))
        }
    }

    #[test]
    fn test_multi_application() {
        let cycle = Permutation::from_vec(vec![1, 2, 0]);
        let cycle2 = Permutation::from_vec(vec![2, 0, 1]);
        let cycle3 = Permutation::from_vec(vec![0, 3, 1, 2]);
        let direct = cycle.multiply(&cycle2).multiply(&cycle3);
        let lazy = MultiJoin::new(vec![cycle, cycle2, cycle3]);

        for i in 0..3 {
            assert_eq!(direct.apply(i), lazy.build_apply(i))
        }
    }
}
