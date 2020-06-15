//! Digraphs
//!
//! This crate implements permutations on integers

// mod randomreplacement;
pub mod algos;
mod builder;
pub mod export;
pub mod utils;

use builder::PermBuilder;

use std::cell::RefCell;
use std::cmp::max;
use std::rc::Rc;

/// Represents a permutation
/// The vals are reference counted and stored to allow for easy copy
/// The inverse is also stored in an option, so it can be cached.
/// The RefCell is needed to ensure interior mutability and compliance
/// with the Permutation API
#[derive(Clone, Debug, Eq)]
pub struct Permutation {
    vals: Rc<Vec<usize>>,
    invvals: RefCell<Option<Rc<Vec<usize>>>>,
}

impl Permutation {
    /// Get the identity permutation
    pub fn id() -> Self {
        Self {
            vals: Rc::new(Vec::new()),
            invvals: RefCell::new(Some(Rc::new(Vec::new()))),
        }
    }

    /// Tests if the permutation is the identity
    /// ```
    /// use stabchain::perm::Permutation;
    /// assert!(Permutation::id().is_id());
    /// let a = Permutation::from_vec(vec![1, 0]);
    /// assert!(a.multiply(&a).is_id());
    /// ```
    pub fn is_id(&self) -> bool {
        self.vals.is_empty()
    }

    /// Get the vector representation of the permutation
    pub fn as_vec(&self) -> &[usize] {
        &self.vals[..]
    }

    // Helper to make the inverse
    fn make_inverse(vals: Rc<Vec<usize>>, invvals: Rc<Vec<usize>>) -> Self {
        Self {
            vals: invvals,
            invvals: RefCell::new(Some(vals)),
        }
    }

    /// Applies the permutation to a point
    /// ```
    /// use stabchain::perm::Permutation;
    /// assert_eq!(Permutation::id().apply(1), 1);
    /// ```
    pub fn apply(&self, x: usize) -> usize {
        if x < self.vals.len() {
            self.vals[x]
        } else {
            x
        }
    }

    /// Create a permutation based on `vals`.
    /// Produces a permutation which maps i to vals\[i\], and acts as the
    /// identity for i >= vals.len()
    /// Requires: vals is a permutation on 0..vals.len()
    /// ```
    /// use stabchain::perm::Permutation;
    /// let a = Permutation::from_vec(vec![1, 0]);
    /// ```
    pub fn from_vec(vals: Vec<usize>) -> Self {
        let mut copy = vals.clone();
        let perm = Permutation::from_vec_unchecked(vals);

        copy.sort();
        for i in copy.into_iter().enumerate() {
            if i.0 != i.1 {
                panic!("Invalid Representation");
            }
        }

        perm
    }

    fn from_vec_unchecked(mut vals: Vec<usize>) -> Self {
        while !vals.is_empty() && vals[vals.len() - 1] == vals.len() - 1 {
            vals.pop();
        }

        Self {
            vals: Rc::new(vals),
            invvals: RefCell::new(None),
        }
    }

    /// Computes the inverse of a permutation.
    /// Note this also lazily caches the inverse, so subsequent calls should
    /// be extremely quick
    /// ```
    /// use stabchain::perm::Permutation;
    /// let a = Permutation::from_vec(vec![1, 0]);
    /// assert_eq!(a, a.inv());
    /// ```
    pub fn inv(&self) -> Self {
        if self.invvals.borrow().is_some() {
            return Permutation::make_inverse(
                self.vals.clone(),
                self.invvals.borrow().clone().unwrap(),
            );
        }

        let v = algos::inv_unchecked(&self.vals[..]);

        let ptr = Rc::new(v);

        *self.invvals.borrow_mut() = Some(ptr.clone());

        Permutation::make_inverse(self.vals.clone(), ptr)
    }

    /// Multiplies two permutations
    /// ```
    /// use stabchain::perm::Permutation;
    /// let a = Permutation::from_vec(vec![0, 2, 1]);
    /// let b = a.inv();
    /// assert_eq!(a.multiply(&b), Permutation::id());
    /// assert_eq!(b.multiply(&a), Permutation::id());
    /// ```
    pub fn multiply(&self, other: &Permutation) -> Self {
        if self.is_id() {
            if other.is_id() {
                return self.clone();
            }
            let size = other.lmp().unwrap();
            Permutation::from_vec_unchecked((0..=size).map(|x| other.apply(x)).collect())
        } else if other.is_id() {
            self.clone()
        } else {
            let size = max(self.lmp().unwrap_or(0), other.lmp().unwrap_or(0));
            debug_assert!(size > 0);
            let v = (0..=size).map(|x| other.apply(self.apply(x))).collect();
            Permutation::from_vec_unchecked(v)
        }
    }

    /// Computes the n-th power of a a permutation
    /// ```
    /// use stabchain::perm::Permutation;
    /// let a = Permutation::from_vec(vec![2, 0, 1]);
    /// assert_eq!(a.pow(3), Permutation::id());
    /// assert_eq!(a.pow(-1), a.inv());
    /// ```
    pub fn pow(&self, pow: isize) -> Self {
        self.build_pow(pow).collapse()
    }

    /// Computes f * g^-1
    pub fn divide(&self, other: &Permutation) -> Self {
        self.build_divide(other).collapse()
    }

    pub fn lmp(&self) -> Option<usize> {
        if self.vals.is_empty() {
            None
        } else {
            Some(self.vals.len() - 1)
        }
    }
}

impl PermBuilder for Permutation {
    fn build_apply(&self, x: usize) -> usize {
        if x < self.vals.len() {
            self.vals[x]
        } else {
            x
        }
    }

    fn collapse(&self) -> Permutation {
        self.clone()
    }
}

impl PartialEq for Permutation {
    fn eq(&self, other: &Self) -> bool {
        self.vals == other.vals
    }
}

impl PartialOrd for Permutation {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.vals.cmp(&other.vals))
    }
}

impl std::hash::Hash for Permutation {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.vals.hash(state);
    }
}

impl From<Vec<usize>> for Permutation {
    fn from(v: Vec<usize>) -> Self {
        Permutation::from_vec(v)
    }
}

#[cfg(test)]
mod tests {

    #[test]
    #[should_panic]
    fn invalid_missing_0() {
        Permutation::from_vec(vec![1, 2, 3]);
    }

    #[test]
    #[should_panic]
    fn invalid_double_value() {
        Permutation::from_vec(vec![0, 1, 2, 2]);
    }

    use super::Permutation;
    #[test]
    fn id_perm() {
        assert_eq!(Permutation::id(), Permutation::id());
        assert_eq!(Permutation::id(), Permutation::from_vec(vec![0, 1, 2]));
    }

    #[test]
    fn test_is_id() {
        let perm = Permutation::from_vec(vec![0, 1, 2]);
        assert!(perm.is_id());
        let perm = Permutation::from_vec(vec![0, 2, 1, 4, 3]);
        assert!(perm.multiply(&perm.inv()).is_id())
    }

    #[test]
    fn leq_perm() {
        assert!(Permutation::id() <= Permutation::id());
        assert!(!(Permutation::id() < Permutation::id()));
        assert!(Permutation::id() <= Permutation::from_vec(vec![0, 1, 2]));
        assert!(!(Permutation::id() < Permutation::from_vec(vec![0, 1, 2])));

        let id = Permutation::id();
        let cycle = Permutation::from_vec(vec![1, 2, 0]);
        assert!(id < cycle);
        assert!(!(id > cycle));
    }

    #[test]
    fn not_eq_perm() {
        assert_ne!(Permutation::id(), Permutation::from_vec(vec![2, 1, 0]));
    }

    #[test]
    fn apply_perm() {
        let id = Permutation::id();
        let cycle = Permutation::from_vec(vec![1, 2, 0]);

        assert_eq!(0, id.apply(0));
        assert_eq!(1, id.apply(1));
        assert_eq!(1, cycle.apply(0));
        assert_eq!(2, cycle.apply(1));
        assert_eq!(0, cycle.apply(2));
        assert_eq!(3, cycle.apply(3));
    }

    #[test]
    fn mult_perm() {
        let id = Permutation::id();
        let cycle = Permutation::from_vec(vec![1, 2, 0]);
        let cycle2 = Permutation::from_vec(vec![2, 0, 1]);

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
        let perm1 = Permutation::from(vec![1, 0]);
        let perm2 = Permutation::from(vec![0, 2, 1]);
        let expected_perm = Permutation::from(vec![2, 0, 1]);
        assert_eq!(perm1.multiply(&perm2), expected_perm);
        let perm1 = Permutation::from(vec![1, 2, 3, 0]);
        let perm2 = Permutation::from(vec![0, 2, 1]);
        let expected_perm = Permutation::from(vec![2, 1, 3, 0]);
        assert_eq!(perm1.multiply(&perm2), expected_perm)
    }

    /// Test that multiplication for the lazy or eager implementaions are identical
    #[test]
    fn mult_perm_lazy_eager() {
        use crate::perm::builder::PermBuilder;
        let perm1 = Permutation::from(vec![2, 3, 0, 1]);
        let perm2 = Permutation::from(vec![2, 1, 0]);
        assert_eq!(
            perm1.multiply(&perm2),
            perm1.build_multiply(&perm2).collapse()
        )
    }

    #[test]
    fn trailing_end_edge() {
        let a = Permutation::from_vec(vec![1, 3, 2, 0]);
        let b = Permutation::from_vec(vec![3, 2, 0, 1]);
        a.multiply(&b).inv();
    }

    #[test]
    fn div_perm() {
        let id = Permutation::id();
        let cycle = Permutation::from_vec(vec![1, 2, 0]);
        let cycle2 = Permutation::from_vec(vec![2, 0, 1]);

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
}
