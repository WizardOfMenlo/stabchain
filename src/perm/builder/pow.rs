use super::super::Permutation;
use super::PermBuilder;

#[derive(Debug, Clone)]
pub struct Pow<Perm>
where
    Perm: PermBuilder,
{
    perm: Perm,
    power: isize,
}

impl<Perm> Pow<Perm>
where
    Perm: PermBuilder,
{
    pub(crate) fn new(perm: Perm, power: isize) -> Self {
        Pow { perm, power }
    }

    // TODO: This is not really the conjugate I just wanted a nice name
    fn conj(&self) -> Pow<Permutation> {
        Pow::new(self.perm.build_inv(), self.power.abs())
    }
}

impl<Perm> PermBuilder for Pow<Perm>
where
    Perm: PermBuilder,
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

    fn collapse(&self) -> Permutation {
        if self.power < 0 {
            return self.conj().collapse();
        }

        if self.power == 0 {
            return Permutation::id();
        }

        pow(self.perm.collapse(), self.power as usize)
    }
}

fn pow(perm: Permutation, x: usize) -> Permutation {
    if x == 0 {
        return Permutation::id();
    }

    if x == 1 {
        return perm.clone();
    }

    if x % 2 == 0 {
        let p = pow(perm, x / 2);
        p.multiply(&p)
    } else {
        let p = pow(perm.clone(), (x - 1) / 2);
        perm.multiply(&p.multiply(&p))
    }
}

#[cfg(test)]
mod tests {
    use crate::perm::{PermBuilder, Permutation};
    #[test]
    fn simple_exponentiation() {
        let perm = Permutation::from_vec(vec![1, 2, 3, 4, 5, 0]);
        let mut counter = Permutation::id();
        for i in 0..6 {
            assert_eq!(counter, perm.build_pow(i).collapse());
            counter = counter.multiply(&perm);
        }
    }

    #[test]
    fn simple_inv() {
        let perm = Permutation::from_vec(vec![1, 3, 2, 4, 5, 0]);
        assert_eq!(perm.inv(), perm.build_pow(-1).collapse());
    }

    #[test]
    fn inv_exponentiation() {
        let perm = Permutation::from_vec(vec![1, 3, 2, 4, 5, 0]);
        assert_eq!(perm.inv(), perm.build_pow(-1).collapse());
    }

    #[test]
    fn multiple_inv_exponentiation() {
        let perm = Permutation::from_vec(vec![1, 3, 2, 4, 5, 0]);
        let inv = perm.inv();
        let mut counter = Permutation::id();
        for i in 0..6 {
            assert_eq!(counter, perm.build_pow(-i).collapse());
            counter = counter.multiply(&inv);
        }
    }

    #[test]
    fn application_positive() {
        use crate::perm::builder::join::MultiJoin;
        let perm = Permutation::from_vec(vec![1, 3, 2, 4, 5, 0]);
        let lazy_pow = perm.build_pow(4);
        let lazy_mult = MultiJoin::new(std::iter::repeat(perm.clone()).take(4));
        let full = perm.multiply(&perm).multiply(&perm).multiply(&perm);

        for i in 0..5 {
            assert_eq!(lazy_pow.build_apply(i), lazy_mult.build_apply(i));
            assert_eq!(lazy_pow.build_apply(i), full.apply(i));
        }
    }

    #[test]
    fn application_negative() {
        use crate::perm::builder::join::MultiJoin;
        let perm_inv = Permutation::from_vec(vec![1, 3, 2, 4, 5, 0]);
        let perm = perm_inv.inv();
        let lazy_pow = perm_inv.build_pow(-4);
        let lazy_mult = MultiJoin::new(std::iter::repeat(perm.clone()).take(4));
        let full = perm.multiply(&perm).multiply(&perm).multiply(&perm);

        for i in 0..5 {
            assert_eq!(lazy_pow.build_apply(i), lazy_mult.build_apply(i));
            assert_eq!(lazy_pow.build_apply(i), full.apply(i));
        }
    }
}
