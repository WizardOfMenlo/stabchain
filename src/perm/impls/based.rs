use crate::perm::{
    impls::standard::StandardPermutation,
    Permutation,
};

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
            return Self::id();
        }

        Self { base, perm }
    }
}

impl Permutation for BasedPermutation {
    fn id() -> Self {
        Self {
            base: 0,
            perm: Permutation::id(),
        }
    }

    fn shift(&self, k: usize) -> Self {
        if self.is_id() {
            return self.clone();
        }

        Self {
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

    fn from_images(images: &[usize]) -> Self {
        crate::perm::utils::valid_images(images).unwrap();
        Self::from_vec_unchecked(images)
    }

    fn inv(&self) -> Self {
        Self {
            perm: self.perm.inv(),
            base: self.base,
        }
    }

    fn multiply(&self, other: &Self) -> Self {
        let result = if self.is_id() {
            other.clone()
        } else if other.is_id() {
            self.clone()
        } else if self.base == other.base {
            Self {
                perm: self.perm.multiply(&other.perm),
                base: self.base,
            }
        } else if self.base < other.base {
            Self {
                base: self.base,
                perm: self.perm.multiply(&other.perm.shift(other.base - self.base)),
            }
        } else {
            Self {
                base: other.base,
                perm: self.perm.shift(self.base - other.base).multiply(&other.perm),
            }
        };

        if result.perm.is_id() {
            return Self::id();
        }

        let perm_images = result.perm.as_vec();
        let new_based = Self::from_images(perm_images);

        Self {
            base: result.base + new_based.base,
            perm: new_based.perm,
        }
    }

    fn pow(&self, pow: isize) -> Self {
        let perm = self.perm.pow(pow);
        if perm.is_id() {
            Self::id()
        } else {
            Self { perm, base: self.base }
        }
    }

    fn order(&self) -> usize {
        self.perm.order()
    }

    /// Computes f * g^-1
    fn divide(&self, other: &Self) -> Self {
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
