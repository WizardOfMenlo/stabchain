use super::PermBuilder;
use crate::perm::Permutation;

#[derive(Debug, Clone)]
pub struct Pow<Perm> {
    perm: Perm,
    power: isize,
}

impl<Perm> Pow<Perm> {
    pub(crate) fn new(perm: Perm, power: isize) -> Self {
        Pow { perm, power }
    }

    // TODO: This is not really the conjugate I just wanted a nice name
    fn conj<P>(&self) -> Pow<P>
    where
        P: Permutation,
        Perm: PermBuilder<P>,
    {
        Pow::new(self.perm.build_inv(), self.power.abs())
    }
}

impl<P, Perm> PermBuilder<P> for Pow<Perm>
where
    P: Permutation + PermBuilder<P>,
    Perm: PermBuilder<P>,
{
    fn build_apply(&self, mut x: usize) -> usize {
        if self.power < 0 {
            return self.conj().build_apply(x);
        }

        for _ in 0..self.power {
            x = self.perm.build_apply(x)
        }

        x
    }

    fn collapse(&self) -> P {
        if self.power < 0 {
            return self.conj().collapse();
        }

        if self.power == 0 {
            return P::id();
        }

        pow(self.perm.collapse(), self.power as usize)
    }
}

/// Recursive helper function, uses repeated exponentiation
/// to perform exponentiation to the n in O(log n) steps
pub fn pow<P: Permutation>(perm: P, n: usize) -> P {
    if n == 0 {
        return P::id();
    }

    if n == 1 {
        return perm;
    }

    if n % 2 == 0 {
        let p = pow(perm, n / 2);
        p.multiply(&p)
    } else {
        let p = pow(perm.clone(), (n - 1) / 2);
        perm.multiply(&p.multiply(&p))
    }
}

#[cfg(test)]
mod tests {
    use crate::perm::{builder::PermBuilder, DefaultPermutation, Permutation};
    use std::iter::FromIterator;
    #[test]
    fn simple_exponentiation() {
        let perm = DefaultPermutation::from_images(&[1, 2, 3, 4, 5, 0]);
        let mut counter = DefaultPermutation::id();
        for i in 0..6 {
            assert_eq!(counter, perm.build_pow(i).collapse());
            counter = counter.multiply(&perm);
        }
    }

    #[test]
    fn simple_inv() {
        let perm = DefaultPermutation::from_images(&[1, 3, 2, 4, 5, 0]);
        assert_eq!(perm.inv(), perm.build_pow(-1).collapse());
    }

    #[test]
    fn inv_exponentiation() {
        let perm = DefaultPermutation::from_images(&[1, 3, 2, 4, 5, 0]);
        assert_eq!(perm.inv(), perm.build_pow(-1).collapse());
    }

    #[test]
    fn multiple_inv_exponentiation() {
        let perm = DefaultPermutation::from_images(&[1, 3, 2, 4, 5, 0]);
        let inv = perm.inv();
        let mut counter = DefaultPermutation::id();
        for i in 0..6 {
            assert_eq!(counter, perm.build_pow(-i).collapse());
            counter = counter.multiply(&inv);
        }
    }

    #[test]
    fn application_positive() {
        use crate::perm::builder::join::MultiJoin;
        let perm = DefaultPermutation::from_images(&[1, 3, 2, 4, 5, 0]);
        let lazy_pow = perm.build_pow(4);
        let lazy_mult = MultiJoin::from_iter(std::iter::repeat(perm.clone()).take(4));
        let full = perm.multiply(&perm).multiply(&perm).multiply(&perm);

        for i in 0..5 {
            assert_eq!(lazy_pow.build_apply(i), lazy_mult.build_apply(i));
            assert_eq!(lazy_pow.build_apply(i), full.apply(i));
        }
    }

    #[test]
    fn application_negative() {
        use crate::perm::builder::join::MultiJoin;
        let perm_inv = DefaultPermutation::from_images(&[1, 3, 2, 4, 5, 0]);
        let perm = perm_inv.inv();
        let lazy_pow = perm_inv.build_pow(-4);
        let lazy_mult = MultiJoin::from_iter(std::iter::repeat(perm.clone()).take(4));
        let full = perm.multiply(&perm).multiply(&perm).multiply(&perm);

        for i in 0..5 {
            assert_eq!(lazy_pow.build_apply(i), lazy_mult.build_apply(i));
            assert_eq!(lazy_pow.build_apply(i), full.apply(i));
        }
    }
}
