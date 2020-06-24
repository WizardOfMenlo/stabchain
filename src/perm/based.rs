use super::Permutation;

#[derive(Debug, Clone)]
pub struct BasedPermutation {
    base: usize,
    perm: Permutation,
}

impl BasedPermutation {
    /// Get the identity permutation
    pub fn id() -> Self {
        BasedPermutation {
            base: 0,
            perm: Permutation::id(),
        }
    }

    pub fn shift(&self, k: usize) -> Self {
        BasedPermutation {
            base: self.base + k,
            perm: self.perm.clone(),
        }
    }

    pub fn is_id(&self) -> bool {
        self.perm.is_id()
    }

    pub fn apply(&self, x: usize) -> usize {
        if x < self.base {
            x
        } else {
            self.perm.apply(x - self.base) + self.base
        }
    }

    pub fn from_vec(vals: Vec<usize>) -> Self {
        let mut copy = vals.clone();
        let perm = BasedPermutation::from_vec_unchecked(vals);

        copy.sort();
        for i in copy.into_iter().enumerate() {
            if i.0 != i.1 {
                panic!("Invalid Representation");
            }
        }

        perm
    }

    fn from_vec_unchecked(vals: Vec<usize>) -> Self {
        let mut base = 0;
        while base < vals.len() && vals[base] == base {
            base += 1;
        }

        let values = vals.iter().skip(base).map(|i| i - base).collect();

        Self {
            base,
            perm: Permutation::from_vec_unchecked(values),
        }
    }

    pub fn inv(&self) -> Self {
        BasedPermutation {
            perm: self.perm.inv(),
            base: self.base,
        }
    }

    pub fn multiply(&self, other: &BasedPermutation) -> Self {
        let result = if self.is_id() {
            other.clone()
        } else if other.is_id() {
            self.clone()
        } else {
            if self.base == other.base {
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
                        .multiply(&other.perm.shift(self.base - other.base)),
                }
            }
        };

        // Make sure no weird perms arise
        if result.perm.is_id() {
            BasedPermutation::id()
        } else {
            result
        }
    }

    pub fn pow(&self, pow: isize) -> Self {
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

    pub fn order(&self) -> usize {
        self.perm.order()
    }

    /// Computes f * g^-1
    pub fn divide(&self, other: &BasedPermutation) -> Self {
        self.multiply(&other.inv())
    }

    pub fn lmp(&self) -> Option<usize> {
        self.perm.lmp().map(|l| l + self.base)
    }
}

impl PartialEq for BasedPermutation {
    fn eq(&self, other: &Self) -> bool {
        self.base == other.base && self.perm == other.perm
    }
}

impl PartialOrd for BasedPermutation {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(
            self.base
                .cmp(&other.base)
                .then_with(|| self.perm.cmp(&other.perm)),
        )
    }
}

impl std::hash::Hash for BasedPermutation {
    fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
        self.base.hash(state);
        self.perm.hash(state);
    }
}

impl From<Vec<usize>> for BasedPermutation {
    fn from(v: Vec<usize>) -> Self {
        BasedPermutation::from_vec(v)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_creation() {
        let single_cycle = BasedPermutation::from_vec(vec![0, 1, 2, 4, 3]);
        dbg!(single_cycle);
        panic!()
    }

    #[test]
    fn test_multiplication_disjoint() {
        let a = BasedPermutation::from_vec(vec![0, 1, 2, 4, 3]);
        let b = BasedPermutation::from_vec(vec![0, 1, 2, 3, 4, 6, 5]);
        dbg!(&a);
        dbg!(&b);
        dbg!(a.multiply(&b));
        panic!()
    }

    #[test]
    fn test_multiplication_joint() {
        let a = BasedPermutation::from_vec(vec![0, 1, 2, 4, 3]);
        let b = BasedPermutation::from_vec(vec![0, 1, 2, 3, 5, 6, 4]);
        dbg!(&a);
        dbg!(&b);
        dbg!(a.multiply(&b));
        panic!()
    }
}
