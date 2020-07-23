use crate::perm::Permutation;

use std::cmp::max;
use std::fmt;
use std::iter::FromIterator;
use std::sync::Arc;

use super::standard::StandardPermutation;

// TODO: Is it nicer to use this or the double arc method?
#[derive(Clone, Debug)]
struct SyncPermutationInner {
    vals: Vec<usize>,
    invvals: Vec<usize>,
}

/// Represents a permutation. Very similar to Standard, but ensure sync and can be sent between threads
#[derive(Clone, Debug)]
pub struct SyncPermutation(Arc<SyncPermutationInner>);

impl SyncPermutation {
    pub fn as_vec(&self) -> &[usize] {
        &self.0.vals[..]
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

        Self(Arc::new(SyncPermutationInner { vals, invvals }))
    }
}

impl Permutation for SyncPermutation {
    fn from_images(images: &[usize]) -> Self {
        Self::from_vec(images.into())
    }

    fn id() -> Self {
        Self(Arc::new(SyncPermutationInner {
            vals: vec![],
            invvals: vec![],
        }))
    }

    fn is_id(&self) -> bool {
        self.0.vals.is_empty()
    }

    fn apply(&self, x: usize) -> usize {
        if x < self.0.vals.len() {
            self.0.vals[x]
        } else {
            x
        }
    }

    fn inv(&self) -> Self {
        Self(Arc::new(SyncPermutationInner {
            vals: self.0.invvals.clone(),
            invvals: self.0.vals.clone(),
        }))
    }

    fn multiply(&self, other: &SyncPermutation) -> Self {
        if self.is_id() {
            if other.is_id() {
                return self.clone();
            }
            let size = other.lmp().unwrap();
            SyncPermutation::from_vec_unchecked((0..=size).map(|x| other.apply(x)).collect())
        } else if other.is_id() {
            self.clone()
        } else {
            let size = max(self.lmp().unwrap_or(0), other.lmp().unwrap_or(0));
            debug_assert!(size > 0);
            let v = (0..=size).map(|x| other.apply(self.apply(x))).collect();
            SyncPermutation::from_vec_unchecked(v)
        }
    }

    fn order(&self) -> usize {
        // TODO: If we ever use order in resource heavy context, optmize here
        use crate::perm::export::CyclePermutation;
        CyclePermutation::from(self.clone()).order()
    }

    fn lmp(&self) -> Option<usize> {
        if self.0.vals.is_empty() {
            None
        } else {
            Some(self.0.vals.len() - 1)
        }
    }

    fn shift(&self, k: usize) -> Self {
        if self.is_id() {
            return SyncPermutation::id();
        }

        let mut images: Vec<_> = (0..k).collect();
        let new_images = self.0.vals.iter().map(|i| i + k);
        images.extend(new_images);
        SyncPermutation::from_vec_unchecked(images)
    }
}

impl fmt::Display for SyncPermutation {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        use crate::perm::export::CyclePermutation;
        write!(f, "{}", CyclePermutation::from(self.clone()))
    }
}

impl PartialEq for SyncPermutation {
    fn eq(&self, other: &Self) -> bool {
        self.0.vals == other.0.vals
    }
}

impl Eq for SyncPermutation {}

impl PartialOrd for SyncPermutation {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.0.vals.cmp(&other.0.vals))
    }
}

impl std::hash::Hash for SyncPermutation {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.0.vals.hash(state);
    }
}

impl From<StandardPermutation> for SyncPermutation {
    fn from(p: StandardPermutation) -> Self {
        let vals = p.as_vec().to_vec();
        let invvals = p.inv().as_vec().to_vec();

        SyncPermutation(Arc::new(SyncPermutationInner { vals, invvals }))
    }
}

impl From<SyncPermutation> for StandardPermutation {
    fn from(p: SyncPermutation) -> Self {
        use std::rc::Rc;
        StandardPermutation::make_inverse(Rc::new(p.0.vals.to_vec()), Rc::new(p.0.vals.to_vec()))
    }
}

impl FromIterator<usize> for SyncPermutation {
    fn from_iter<T: IntoIterator<Item = usize>>(iter: T) -> Self {
        SyncPermutation::from_vec(iter.into_iter().collect())
    }
}