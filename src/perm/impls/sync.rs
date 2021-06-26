use crate::perm::Permutation;

use std::cmp::max;
use std::iter::FromIterator;
use std::sync::Arc;

use super::standard::StandardPermutation;

/// Represents a permutation. Very similar to Standard, but ensure sync and can be sent between threads
#[derive(Clone, Debug)]
pub struct SyncPermutation {
    vals: Arc<[usize]>,
    invvals: Arc<[usize]>,
}

impl SyncPermutation {
    pub fn as_vec(&self) -> &[usize] {
        &self.vals[..]
    }

    pub fn from_vec(vals: Vec<usize>) -> Self {
        crate::perm::utils::valid_images(&vals[..]).unwrap();
        SyncPermutation::from_vec_unchecked(vals)
    }

    pub(crate) fn from_vec_unchecked(mut vals: Vec<usize>) -> Self {
        while !vals.is_empty() && vals[vals.len() - 1] == vals.len() - 1 {
            vals.pop();
        }

        let invvals = crate::perm::algos::inv_unchecked(&vals[..]);

        Self {
            vals: vals.into(),
            invvals: invvals.into(),
        }
    }
}

impl Permutation for SyncPermutation {
    fn from_images(images: &[usize]) -> Self {
        Self::from_vec(images.into())
    }

    fn id() -> Self {
        Self {
            vals: Arc::new([]),
            invvals: Arc::new([]),
        }
    }

    fn is_id(&self) -> bool {
        self.vals.is_empty()
    }

    fn apply(&self, x: usize) -> usize {
        if x < self.vals.len() {
            self.vals[x]
        } else {
            x
        }
    }

    fn inv(&self) -> Self {
        Self {
            vals: self.invvals.clone(),
            invvals: self.vals.clone(),
        }
    }

    fn multiply(&self, other: &SyncPermutation) -> Self {
        if self.is_id() {
            other.clone()
        } else if other.is_id() {
            self.clone()
        } else {
            let self_size = self.lmp().unwrap_or(0);
            let other_size = other.lmp().unwrap_or(0);
            let size = max(self_size, other_size);
            debug_assert!(self_size > 0);
            debug_assert!(other_size > 0);
            // Special case for if the lhs or rhs is of smaller degree
            // If lhs is of smaller degree, we can just copy the values for the larger degree rhs permutation and we do not need to bounds check.
            let v: Vec<usize> = if self_size <= other_size {
                // We can skip bounds checking in this case, and ignore lhs for larger points.
                (0..=self_size)
                    .map(|x| other.vals[self.vals[x]])
                    .chain((self_size + 1..=other_size).map(|x| other.vals[x]))
                    .collect()
            } else {
                // Otherwise we can skip bounds checking for self
                (0..=size).map(|x| other.apply(self.vals[x])).collect()
            };
            SyncPermutation::from_vec_unchecked(v)
        }
    }

    fn lmp(&self) -> Option<usize> {
        if self.vals.is_empty() {
            None
        } else {
            Some(self.vals.len() - 1)
        }
    }

    fn shift(&self, k: usize) -> Self {
        if self.is_id() {
            return SyncPermutation::id();
        }

        let mut images: Vec<_> = (0..k).collect();
        let new_images = self.vals.iter().map(|i| i + k);
        images.extend(new_images);
        SyncPermutation::from_vec_unchecked(images)
    }
}

impl PartialEq for SyncPermutation {
    fn eq(&self, other: &Self) -> bool {
        self.vals == other.vals
    }
}

impl Eq for SyncPermutation {}

impl PartialOrd for SyncPermutation {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.vals.cmp(&other.vals))
    }
}

impl std::hash::Hash for SyncPermutation {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.vals.hash(state);
    }
}

impl From<StandardPermutation> for SyncPermutation {
    fn from(p: StandardPermutation) -> Self {
        let vals = p.images();
        let invvals = p.inv().images();

        SyncPermutation {
            vals: vals.into(),
            invvals: invvals.into(),
        }
    }
}

impl From<SyncPermutation> for StandardPermutation {
    fn from(p: SyncPermutation) -> Self {
        let vals = p.vals.to_vec().into();
        let invvals = p.invvals.to_vec().into();
        StandardPermutation::make_inverse(vals, invvals)
    }
}

impl FromIterator<usize> for SyncPermutation {
    fn from_iter<T: IntoIterator<Item = usize>>(iter: T) -> Self {
        SyncPermutation::from_vec(iter.into_iter().collect())
    }
}
