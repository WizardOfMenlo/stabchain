use crate::perm::impls::standard::StandardPermutation;
use crate::perm::Permutation;

#[derive(Debug, Clone, Eq)]
pub struct BasedPermutation {
    base: usize,
    perm: super::standard::StandardPermutation,
}

impl BasedPermutation {
    fn from_vec_unchecked(vals: &[usize]) -> Self {
        let mut base = 0;
        while base < vals.len() && vals[base] == base {
            base += 1;
        }

        let values = vals.iter().skip(base).map(|i| i - base).collect();

        let perm = StandardPermutation::from_vec_unchecked(values);
        if perm.is_id() {
            return BasedPermutation::id();
        }

        Self { base, perm }
    }
}

impl Permutation for BasedPermutation {
    fn id() -> Self {
        BasedPermutation {
            base: 0,
            perm: Permutation::id(),
        }
    }

    fn shift(&self, k: usize) -> Self {
        if self.is_id() {
            return self.clone();
        }

        BasedPermutation {
            base: self.base + k,
            perm: self.perm.clone(),
        }
    }

    fn is_id(&self) -> bool {
        self.perm.is_id()
    }

    fn apply(&self, x: usize) -> usize {
        if x < self.base {
            x
        } else {
            self.perm.apply(x - self.base) + self.base
        }
    }

    fn from_images(vals: &[usize]) -> Self {
        let mut copy: Vec<_> = vals.iter().collect();
        let perm = BasedPermutation::from_vec_unchecked(vals);

        copy.sort();
        for i in copy.into_iter().enumerate() {
            if i.0 != *i.1 {
                panic!("Invalid Representation");
            }
        }

        perm
    }

    fn inv(&self) -> Self {
        BasedPermutation {
            perm: self.perm.inv(),
            base: self.base,
        }
    }

    fn multiply(&self, other: &BasedPermutation) -> Self {
        let result = if self.is_id() {
            other.clone()
        } else if other.is_id() {
            self.clone()
        } else if self.base == other.base {
            BasedPermutation {
                perm: self.perm.multiply(&other.perm),
                base: self.base,
            }
        } else if self.base < other.base {
            BasedPermutation {
                base: self.base,
                perm: self
                    .perm
                    .multiply(&other.perm.shift(other.base - self.base)),
            }
        } else {
            BasedPermutation {
                base: other.base,
                perm: self
                    .perm
                    .shift(self.base - other.base)
                    .multiply(&other.perm),
            }
        };

        if result.perm.is_id() {
            return BasedPermutation::id();
        }

        let perm_images = result.perm.as_vec();
        let new_based = Self::from_images(perm_images);

        BasedPermutation {
            base: result.base + new_based.base,
            perm: new_based.perm,
        }
    }

    fn pow(&self, pow: isize) -> Self {
        let perm = self.perm.pow(pow);
        if perm.is_id() {
            BasedPermutation::id()
        } else {
            BasedPermutation {
                perm,
                base: self.base,
            }
        }
    }

    fn order(&self) -> usize {
        self.perm.order()
    }

    /// Computes f * g^-1
    fn divide(&self, other: &BasedPermutation) -> Self {
        self.multiply(&other.inv())
    }

    fn lmp(&self) -> Option<usize> {
        self.perm.lmp().map(|l| l + self.base)
    }
}

impl PartialEq for BasedPermutation {
    fn eq(&self, other: &Self) -> bool {
        self.base == other.base && self.perm == other.perm
    }
}

impl std::hash::Hash for BasedPermutation {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.base.hash(state);
        self.perm.hash(state);
    }
}

impl From<StandardPermutation> for BasedPermutation {
    fn from(perm: StandardPermutation) -> Self {
        BasedPermutation::from_images(perm.as_vec())
    }
}

impl From<BasedPermutation> for StandardPermutation {
    fn from(perm: BasedPermutation) -> Self {
        let images = (0..perm.base)
            .chain(perm.perm.as_vec().iter().map(|i| i + perm.base))
            .collect();
        StandardPermutation::from_vec(images)
    }
}

use std::fmt;
impl fmt::Display for BasedPermutation {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", StandardPermutation::from(self.clone()))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    #[should_panic]
    fn invalid_missing_0() {
        BasedPermutation::from_images(&[1, 2, 3]);
    }

    #[test]
    #[should_panic]
    fn invalid_double_value() {
        BasedPermutation::from_images(&[0, 1, 2, 2]);
    }

    #[test]
    fn id_perm() {
        assert_eq!(BasedPermutation::id(), BasedPermutation::id());
        assert_eq!(
            BasedPermutation::id(),
            BasedPermutation::from_images(&[0, 1, 2])
        );
    }

    #[test]
    fn test_is_id() {
        let perm = BasedPermutation::from_images(&[0, 1, 2]);
        assert!(perm.is_id());
        let perm = BasedPermutation::from_images(&[0, 2, 1, 4, 3]);
        assert!(perm.multiply(&perm.inv()).is_id())
    }

    #[test]
    fn not_eq_perm() {
        assert_ne!(
            BasedPermutation::id(),
            BasedPermutation::from_images(&[2, 1, 0])
        );
        assert_ne!(
            BasedPermutation::from_images(&[2, 1, 0]),
            BasedPermutation::id()
        );
    }

    #[test]
    fn apply_perm() {
        let id = BasedPermutation::id();
        let cycle = BasedPermutation::from_images(&[1, 2, 0]);

        assert_eq!(0, id.apply(0));
        assert_eq!(1, id.apply(1));
        assert_eq!(1, cycle.apply(0));
        assert_eq!(2, cycle.apply(1));
        assert_eq!(0, cycle.apply(2));
        assert_eq!(3, cycle.apply(3));
    }

    #[test]
    fn mult_perm() {
        let id = BasedPermutation::id();
        let cycle = BasedPermutation::from_images(&[1, 2, 0]);
        let cycle2 = BasedPermutation::from_images(&[2, 0, 1]);

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
        let perm1 = BasedPermutation::from_images(&[1, 0]);
        let perm2 = BasedPermutation::from_images(&[0, 2, 1]);
        let expected_perm = BasedPermutation::from_images(&[2, 0, 1]);
        assert_eq!(perm1.multiply(&perm2), expected_perm);
        // Should not be the same when order is reveresed.
        assert_ne!(perm2.multiply(&perm1), expected_perm);
        let perm1 = BasedPermutation::from_images(&[1, 2, 3, 0]);
        let perm2 = BasedPermutation::from_images(&[0, 2, 1]);
        let expected_perm = BasedPermutation::from_images(&[2, 1, 3, 0]);
        assert_eq!(perm1.multiply(&perm2), expected_perm);
        // Should not be the same when order is reveresed.
        assert_ne!(perm2.multiply(&perm1), expected_perm);
    }

    /// Check that the multiplication is associative
    #[test]
    fn mult_perm_associative() {
        let perm1 = BasedPermutation::from_images(&[1, 5, 4, 0, 2, 3]);
        let perm2 = BasedPermutation::from_images(&[3, 2, 0, 1]);
        let perm3 = BasedPermutation::from_images(&[6, 5, 4, 3, 2, 1, 0]);
        assert_eq!(
            perm1.multiply(&perm2).multiply(&perm3),
            perm1.multiply(&perm2.multiply(&perm3))
        );
    }

    /// Test that multiplication for the lazy or eager implementaions are identical
    #[test]
    fn mult_perm_lazy_eager() {
        use crate::perm::builder::PermBuilder;
        let perm1 = BasedPermutation::from_images(&[2, 3, 0, 1]);
        let perm2 = BasedPermutation::from_images(&[2, 1, 0]);
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
        let id = BasedPermutation::id();
        //Permutation that is its own inverse
        let perm1 = BasedPermutation::from_images(&[5, 4, 2, 6, 1, 0, 3]);
        assert_eq!(perm1, perm1.inv());
        assert_eq!(perm1.multiply(&perm1.inv()), id);
        // n-cycle permutations
        let perm2 = BasedPermutation::from_images(&[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        let perm2_inv = BasedPermutation::from_images(&[9, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
        assert_ne!(perm2, perm2_inv);
        assert_eq!(perm2_inv, perm2.inv());
        assert_eq!(perm2, perm2.inv().inv());
        assert_eq!(perm2, perm2_inv.inv());
        assert_eq!(perm2.multiply(&perm2_inv), id);
        assert_eq!(perm2_inv.multiply(&perm2), id);
        //Permutations with more than one cycle.
        let perm3 = BasedPermutation::from_images(&[2, 5, 4, 6, 0, 3, 1]);
        let perm3_inv = BasedPermutation::from_images(&[4, 6, 0, 5, 2, 1, 3]);
        assert_ne!(perm3, perm3_inv);
        assert_eq!(perm3_inv, perm3.inv());
        assert_eq!(perm3, perm3.inv().inv());
        assert_eq!(perm3, perm3_inv.inv());
        assert_eq!(perm3.multiply(&perm3_inv), id);
        assert_eq!(perm3_inv.multiply(&perm3), id);
    }

    #[test]
    fn trailing_end_edge() {
        let a = BasedPermutation::from_images(&[1, 3, 2, 0]);
        let b = BasedPermutation::from_images(&[3, 2, 0, 1]);
        a.multiply(&b).inv();
    }

    #[test]
    fn div_perm() {
        let id = BasedPermutation::id();
        let cycle = BasedPermutation::from_images(&[1, 2, 0]);
        let cycle2 = BasedPermutation::from_images(&[2, 0, 1]);

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
        let p = BasedPermutation::id();
        assert!(p.shift(3).is_id())
    }

    #[test]
    fn test_shift() {
        let perm: BasedPermutation = BasedPermutation::from_images(&[1, 2, 0]);
        let shifted: BasedPermutation = BasedPermutation::from_images(&[0, 1, 2, 4, 5, 3]);
        assert_eq!(perm.shift(3), shifted)
    }
}
