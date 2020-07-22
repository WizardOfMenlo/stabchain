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
    /// Get an underlying permutation
    pub fn evaluate(&self) -> P {
        self.word.iter().fold(P::id(), |acc, p| acc.multiply(p))
    }

    /// Check for equality on a general iterator. Note that equality on 0..=self.lmp() <= self.lmp_upper() will imply actual equality
    pub fn eq_on_iter(&self, other: &Self, iter: impl IntoIterator<Item = usize>) -> bool {
        iter.into_iter()
            .map(|i| (self.apply(i), other.apply(i)))
            .all(|(i, j)| i == j)
    }

    /// Check for equality on the given base.
    pub fn eq_on_base(&self, other: &Self, base: &[usize]) -> bool {
        self.eq_on_iter(other, base.iter().copied())
    }

    /// Get an upper bound on the lmp. Note lmp_upper == None => self == id
    pub fn lmp_upper(&self) -> Option<usize> {
        self.word.iter().flat_map(|p| p.lmp()).max()
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
            (Some(m), Some(n)) if m == n => self.eq_on_iter(other, 0..=n),
            (None, None) => true,
            (_, _) => false,
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

fn lmp_finder(candidate: usize, mut appl: impl FnMut(usize) -> usize) -> Option<usize> {
    (0..=candidate)
        .rev()
        .map(|i| (i, appl(i)))
        .filter(|(i, j)| i != j)
        .map(|r| r.0)
        .next()
}

impl<P> Permutation for WordPermutation<P>
where
    P: Permutation,
{
    fn id() -> Self {
        Self::from_iter(iter::empty())
    }

    fn is_id(&self) -> bool {
        self.lmp().is_none()
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
        let candidate = self.lmp_upper();

        // Then this is the identity
        let candidate = candidate?;

        // If no duplicates, then the max is unique and no cancellation can occur
        let duplicates = self
            .word
            .iter()
            .flat_map(|p| p.lmp())
            .filter(|&lmp| lmp == candidate)
            .count();

        if duplicates > 1 {
            lmp_finder(candidate, |x| self.apply(x))
        } else {
            Some(candidate)
        }
    }

    fn shift(&self, pos: usize) -> Self {
        Self::from_iter(self.word.iter().map(|p| p.shift(pos)))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::perm::{DefaultPermutation, Permutation};

    #[test]
    fn lmp_identity() {
        let id = WordPermutation::<DefaultPermutation>::id();
        assert_eq!(id.lmp_upper(), None);
        assert_eq!(id.lmp(), None);
    }

    #[test]
    fn lmp_upper_bound() {
        let images = vec![
            vec![0, 2, 1],
            vec![0, 1, 2, 4, 3],
            vec![0, 1, 2, 3, 4, 5, 7, 6],
        ];
        let perms = images
            .iter()
            .map(|arr| DefaultPermutation::from_images(arr));
        let perm = WordPermutation::from_iter(perms);
        assert!(perm.lmp_upper().unwrap() >= perm.lmp().unwrap());
        assert!(perm.lmp_upper().unwrap() >= 7);
        assert_eq!(perm.lmp().unwrap(), 7);
    }

    #[test]
    fn lmp_not_eq_ub() {
        let images = vec![vec![0, 1, 2, 4, 3], vec![0, 1, 2, 4, 3]];
        let perms = images
            .iter()
            .map(|arr| DefaultPermutation::from_images(arr));
        let perm = WordPermutation::from_iter(perms);
        assert!(perm.lmp_upper().unwrap() >= perm.lmp().unwrap_or(0));
        assert!(perm.lmp_upper().unwrap() >= 4);
        assert!(perm.is_id());
        assert!(perm.lmp().is_none());
    }
}
