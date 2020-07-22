use crate::perm::*;
use std::iter::{self, FromIterator};

#[derive(Debug, Clone, Eq)]
pub struct WordPermutation<P = DefaultPermutation>
where
    P: Permutation,
{
    word: Vec<P>,
}

impl<P> WordPermutation<P>
where
    P: Permutation,
{
    pub fn evaluate(&self) -> P {
        self.word.iter().fold(P::id(), |acc, p| acc.multiply(p))
    }

    pub fn eq_on_iter(&self, other: &Self, iter: impl IntoIterator<Item = usize>) -> bool {
        iter.into_iter()
            .map(|i| (self.apply(i), other.apply(i)))
            .all(|(i, j)| i == j)
    }

    pub fn eq_on_base(&self, other: &Self, base: &[usize]) -> bool {
        self.eq_on_iter(other, base.iter().copied())
    }
}

impl<P> FromIterator<P> for WordPermutation<P>
where
    P: Permutation,
{
    fn from_iter<T: IntoIterator<Item = P>>(iter: T) -> Self {
        WordPermutation {
            word: iter.into_iter().filter(|p| !p.is_id()).collect(),
        }
    }
}

impl<P> PartialEq for WordPermutation<P>
where
    P: Permutation,
{
    fn eq(&self, other: &Self) -> bool {
        let lmp_s = self.lmp();
        let lmp_o = other.lmp();

        match (lmp_s, lmp_o) {
            (Some(n), Some(m)) => self.eq_on_iter(other, 0..=std::cmp::max(n, m)),
            (Some(_), None) => self.is_id(),
            (None, Some(_)) => other.is_id(),
            (None, None) => true,
        }
    }
}

impl<P> std::hash::Hash for WordPermutation<P>
where
    P: Permutation,
{
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        (0..self.lmp().unwrap_or(0)).for_each(|x| self.apply(x).hash(state))
    }
}

impl<P> Permutation for WordPermutation<P>
where
    P: Permutation,
{
    fn id() -> Self {
        Self::from_iter(iter::empty())
    }

    fn is_id(&self) -> bool {
        if self.word.is_empty() {
            return true;
        }

        (0..=self.lmp().unwrap())
            .map(|i| (i, self.apply(i)))
            .all(|(i, j)| i == j)
    }

    fn from_images(images: &[usize]) -> Self {
        Self::from_iter(iter::once(P::from_images(images)))
    }

    fn apply(&self, mut x: usize) -> usize {
        for p in &self.word {
            x = p.apply(x);
        }

        x
    }

    fn multiply(&self, other: &Self) -> Self {
        WordPermutation::from_iter(self.word.iter().chain(other.word.iter()).cloned())
    }

    fn inv(&self) -> Self {
        Self::from_iter(std::iter::once(self.evaluate().inv()))
    }

    fn lmp(&self) -> Option<usize> {
        self.word.iter().flat_map(|p| p.lmp()).max()
    }

    fn shift(&self, pos: usize) -> Self {
        Self::from_iter(self.word.iter().map(|p| p.shift(pos)))
    }
}
