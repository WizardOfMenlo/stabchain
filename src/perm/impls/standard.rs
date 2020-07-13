use crate::perm::Permutation;

use std::cell::RefCell;
use std::cmp::max;
use std::fmt;
use std::iter::FromIterator;
use std::rc::Rc;

/// Represents a permutation
/// The vals are reference counted and stored to allow for easy copy
/// The inverse is also stored in an option, so it can be cached.
/// The RefCell is needed to ensure interior mutability and compliance
/// with the Permutation API
#[derive(Clone, Debug, Eq)]
pub struct StandardPermutation {
    vals: Rc<Vec<usize>>,
    invvals: RefCell<Option<Rc<Vec<usize>>>>,
}

impl StandardPermutation {
    pub fn as_vec(&self) -> &[usize] {
        &self.vals[..]
    }

    fn make_inverse(vals: Rc<Vec<usize>>, invvals: Rc<Vec<usize>>) -> Self {
        Self {
            vals: invvals,
            invvals: RefCell::new(Some(vals)),
        }
    }

    pub fn from_vec(vals: Vec<usize>) -> Self {
        crate::perm::utils::validate_images(&vals[..]).unwrap();
        StandardPermutation::from_vec_unchecked(vals)
    }

    pub(crate) fn from_vec_unchecked(mut vals: Vec<usize>) -> Self {
        while !vals.is_empty() && vals[vals.len() - 1] == vals.len() - 1 {
            vals.pop();
        }

        Self {
            vals: Rc::new(vals),
            invvals: RefCell::new(None),
        }
    }
}

impl Permutation for StandardPermutation {
    fn from_images(images: &[usize]) -> Self {
        Self::from_vec(images.into())
    }

    fn id() -> Self {
        Self {
            vals: Rc::new(Vec::new()),
            invvals: RefCell::new(Some(Rc::new(Vec::new()))),
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
        if self.invvals.borrow().is_some() {
            return StandardPermutation::make_inverse(
                self.vals.clone(),
                self.invvals.borrow().clone().unwrap(),
            );
        }

        let v = crate::perm::algos::inv_unchecked(&self.vals[..]);

        let ptr = Rc::new(v);

        *self.invvals.borrow_mut() = Some(ptr.clone());

        StandardPermutation::make_inverse(self.vals.clone(), ptr)
    }

    fn multiply(&self, other: &StandardPermutation) -> Self {
        if self.is_id() {
            if other.is_id() {
                return self.clone();
            }
            let size = other.lmp().unwrap();
            StandardPermutation::from_vec_unchecked((0..=size).map(|x| other.apply(x)).collect())
        } else if other.is_id() {
            self.clone()
        } else {
            let size = max(self.lmp().unwrap_or(0), other.lmp().unwrap_or(0));
            debug_assert!(size > 0);
            let v = (0..=size).map(|x| other.apply(self.apply(x))).collect();
            StandardPermutation::from_vec_unchecked(v)
        }
    }

    fn order(&self) -> usize {
        // TODO: If we ever use order in resource heavy context, optmize here
        use crate::perm::export::CyclePermutation;
        CyclePermutation::from(self.clone()).order()
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
            return StandardPermutation::id();
        }

        let mut images: Vec<_> = (0..k).collect();
        let new_images = self.vals.iter().map(|i| i + k);
        images.extend(new_images);
        StandardPermutation::from_vec_unchecked(images)
    }
}

impl fmt::Display for StandardPermutation {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        use crate::perm::export::CyclePermutation;
        write!(f, "{}", CyclePermutation::from(self.clone()))
    }
}

impl PartialEq for StandardPermutation {
    fn eq(&self, other: &Self) -> bool {
        self.vals == other.vals
    }
}

impl PartialOrd for StandardPermutation {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.vals.cmp(&other.vals))
    }
}

impl std::hash::Hash for StandardPermutation {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.vals.hash(state);
    }
}

impl From<Vec<usize>> for StandardPermutation {
    fn from(v: Vec<usize>) -> Self {
        StandardPermutation::from_vec(v)
    }
}

impl FromIterator<usize> for StandardPermutation {
    fn from_iter<T: IntoIterator<Item = usize>>(iter: T) -> Self {
        StandardPermutation::from_vec(iter.into_iter().collect())
    }
}
