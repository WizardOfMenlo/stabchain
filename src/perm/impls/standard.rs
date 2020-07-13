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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    #[should_panic]
    fn invalid_missing_0() {
        StandardPermutation::from_vec(vec![1, 2, 3]);
    }

    #[test]
    #[should_panic]
    fn invalid_double_value() {
        StandardPermutation::from_vec(vec![0, 1, 2, 2]);
    }

    #[test]
    fn id_perm() {
        assert_eq!(StandardPermutation::id(), StandardPermutation::id());
        assert_eq!(
            StandardPermutation::id(),
            StandardPermutation::from_vec(vec![0, 1, 2])
        );
    }

    #[test]
    fn test_is_id() {
        let perm = StandardPermutation::from_vec(vec![0, 1, 2]);
        assert!(perm.is_id());
        let perm = StandardPermutation::from_vec(vec![0, 2, 1, 4, 3]);
        assert!(perm.multiply(&perm.inv()).is_id())
    }

    #[test]
    fn leq_perm() {
        assert!(StandardPermutation::id() <= StandardPermutation::id());
        assert!(!(StandardPermutation::id() < StandardPermutation::id()));
        assert!(StandardPermutation::id() <= StandardPermutation::from_vec(vec![0, 1, 2]));
        assert!(!(StandardPermutation::id() < StandardPermutation::from_vec(vec![0, 1, 2])));

        let id = StandardPermutation::id();
        let cycle = StandardPermutation::from_vec(vec![1, 2, 0]);
        assert!(id < cycle);
        assert!(!(id > cycle));
    }

    #[test]
    fn not_eq_perm() {
        assert_ne!(
            StandardPermutation::id(),
            StandardPermutation::from_vec(vec![2, 1, 0])
        );
        assert_ne!(
            StandardPermutation::from_vec(vec![2, 1, 0]),
            StandardPermutation::id()
        );
    }

    #[test]
    fn apply_perm() {
        let id = StandardPermutation::id();
        let cycle = StandardPermutation::from_vec(vec![1, 2, 0]);

        assert_eq!(0, id.apply(0));
        assert_eq!(1, id.apply(1));
        assert_eq!(1, cycle.apply(0));
        assert_eq!(2, cycle.apply(1));
        assert_eq!(0, cycle.apply(2));
        assert_eq!(3, cycle.apply(3));
    }

    #[test]
    fn mult_perm() {
        let id = StandardPermutation::id();
        let cycle = StandardPermutation::from_vec(vec![1, 2, 0]);
        let cycle2 = StandardPermutation::from_vec(vec![2, 0, 1]);

        let id = &id;
        let cycle = &cycle;
        let cycle2 = &cycle2;

        assert_eq!(*id, id.multiply(id));
        assert_eq!(*cycle, cycle.multiply(id));
        assert_eq!(*cycle, id.multiply(cycle));
        assert_eq!(*cycle2, cycle.multiply(cycle));
        assert_eq!(*id, cycle.multiply(cycle).multiply(cycle));
        assert_ne!(*cycle, cycle.multiply(cycle));
        assert_eq!(*cycle, cycle.pow(1));
        assert_eq!(cycle.pow(-1), cycle.multiply(cycle));
        assert_eq!(cycle.pow(-2), *cycle);
        assert_eq!(cycle.pow(3), *id);
        assert_eq!(cycle.pow(10), *cycle);
    }

    /// Check that multiplication is correct for non-commuting elements.
    #[test]
    fn mult_perm_non_commutative() {
        let perm1 = StandardPermutation::from(vec![1, 0]);
        let perm2 = StandardPermutation::from(vec![0, 2, 1]);
        let expected_perm = StandardPermutation::from(vec![2, 0, 1]);
        assert_eq!(perm1.multiply(&perm2), expected_perm);
        // Should not be the same when order is reveresed.
        assert_ne!(perm2.multiply(&perm1), expected_perm);
        let perm1 = StandardPermutation::from(vec![1, 2, 3, 0]);
        let perm2 = StandardPermutation::from(vec![0, 2, 1]);
        let expected_perm = StandardPermutation::from(vec![2, 1, 3, 0]);
        assert_eq!(perm1.multiply(&perm2), expected_perm);
        // Should not be the same when order is reveresed.
        assert_ne!(perm2.multiply(&perm1), expected_perm);
    }

    /// Check that the multiplication is associative
    #[test]
    fn mult_perm_associative() {
        let perm1 = StandardPermutation::from(vec![1, 5, 4, 0, 2, 3]);
        let perm2 = StandardPermutation::from(vec![3, 2, 0, 1]);
        let perm3 = StandardPermutation::from(vec![6, 5, 4, 3, 2, 1, 0]);
        assert_eq!(
            perm1.multiply(&perm2).multiply(&perm3),
            perm1.multiply(&perm2.multiply(&perm3))
        );
    }

    /// Test that multiplication for the lazy or eager implementaions are identical
    #[test]
    fn mult_perm_lazy_eager() {
        use crate::perm::builder::PermBuilder;
        let perm1 = StandardPermutation::from(vec![2, 3, 0, 1]);
        let perm2 = StandardPermutation::from(vec![2, 1, 0]);
        assert_eq!(
            perm1.multiply(&perm2),
            perm1.build_multiply(&perm2).collapse()
        )
    }

    /// Test inverse for the indentity.
    #[test]
    fn invert_perm_id() {
        let id = StandardPermutation::id();
        assert_eq!(id, id.inv());
        assert_eq!(id, id.inv().inv());
    }
    /// Test inverting permutation for normal cases.
    #[test]
    fn invert_perm() {
        let id = StandardPermutation::id();
        //Permutation that is its own inverse
        let perm1 = StandardPermutation::from(vec![5, 4, 2, 6, 1, 0, 3]);
        assert_eq!(perm1, perm1.inv());
        assert_eq!(perm1.multiply(&perm1.inv()), id);
        // n-cycle permutations
        let perm2 = StandardPermutation::from(vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        let perm2_inv = StandardPermutation::from(vec![9, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
        assert_ne!(perm2, perm2_inv);
        assert_eq!(perm2_inv, perm2.inv());
        assert_eq!(perm2, perm2.inv().inv());
        assert_eq!(perm2, perm2_inv.inv());
        assert_eq!(perm2.multiply(&perm2_inv), id);
        assert_eq!(perm2_inv.multiply(&perm2), id);
        //Permutations with more than one cycle.
        let perm3 = StandardPermutation::from(vec![2, 5, 4, 6, 0, 3, 1]);
        let perm3_inv = StandardPermutation::from(vec![4, 6, 0, 5, 2, 1, 3]);
        assert_ne!(perm3, perm3_inv);
        assert_eq!(perm3_inv, perm3.inv());
        assert_eq!(perm3, perm3.inv().inv());
        assert_eq!(perm3, perm3_inv.inv());
        assert_eq!(perm3.multiply(&perm3_inv), id);
        assert_eq!(perm3_inv.multiply(&perm3), id);
    }

    #[test]
    fn trailing_end_edge() {
        let a = StandardPermutation::from_vec(vec![1, 3, 2, 0]);
        let b = StandardPermutation::from_vec(vec![3, 2, 0, 1]);
        a.multiply(&b).inv();
    }

    #[test]
    fn div_perm() {
        let id = StandardPermutation::id();
        let cycle = StandardPermutation::from_vec(vec![1, 2, 0]);
        let cycle2 = StandardPermutation::from_vec(vec![2, 0, 1]);

        let id = &id;
        let cycle = &cycle;
        let cycle2 = &cycle2;

        assert_eq!(*id, id.divide(id));
        assert_eq!(*cycle, cycle.divide(id));
        assert_eq!(*cycle2, id.divide(cycle));
        assert_eq!(*cycle, id.divide(cycle2));
        assert_eq!(*id, cycle.divide(cycle));
        assert_eq!(*cycle, id.divide(cycle2));
        assert_eq!(*cycle2, id.divide(cycle));
    }

    #[test]
    fn test_shift_identity() {
        let p = StandardPermutation::id();
        assert!(p.shift(3).is_id())
    }

    #[test]
    fn test_shift() {
        use crate::perm::export::CyclePermutation;
        let perm: StandardPermutation = CyclePermutation::single_cycle(&[1, 2, 3]).into();
        let shifted: StandardPermutation = CyclePermutation::single_cycle(&[4, 5, 6]).into();
        assert_eq!(perm.shift(3), shifted)
    }
}
