use crate::perm::Permutation;

#[derive(Debug, Clone)]
pub struct Group {
    generators: Vec<Permutation>,
}

impl Group {
    pub fn new(generators: &[Permutation]) -> Self {
        Group {
            generators: generators.into(),
        }
    }

    fn order_n_permutation(n: usize) -> Permutation {
        Permutation::from_vec((0..n).map(|i| (i + 1) % n).collect())
    }

    pub fn trivial() -> Self {
        Group::new(&[Permutation::id()])
    }

    pub fn dihedral(n: usize) -> Self {
        assert!(n >= 2);
        // TODO: Verify this actually generates D_n
        Group::new(&[
            Permutation::from_vec(vec![0, n - 2]),
            Self::order_n_permutation(n),
        ])
    }

    pub fn cyclic(n: usize) -> Self {
        Group::new(&[Self::order_n_permutation(n)])
    }

    pub fn symmetric(n: usize) -> Self {
        Group::new(&[
            Permutation::from_vec(vec![0, 1]),
            Self::order_n_permutation(n),
        ])
    }
}
