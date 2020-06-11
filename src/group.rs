use crate::perm::export::CyclePermutation;
use crate::perm::Permutation;

#[derive(Debug, Clone)]
pub struct Group {
    generators: Vec<Permutation>,
}

impl Group {
    /// Instantiate the group from some generators
    pub fn new(generators: &[Permutation]) -> Self {
        Group {
            generators: generators.into(),
        }
    }

    /// Get a reference to the generators of the group
    pub fn generators(&self) -> &[Permutation] {
        &self.generators[..]
    }

    fn order_n_permutation(n: usize) -> Permutation {
        assert!(n > 0);
        CyclePermutation::from_vec(vec![(1..=n).collect()]).into()
    }

    /// Generates the trivial group, which only contains the identity
    pub fn trivial() -> Self {
        // TODO: Should we include the identity here?
        Group::new(&[])
    }

    /// This generates the dihedral group D_2n.
    pub fn dihedral_2n(n: usize) -> Self {
        assert!(n > 0);

        Group::new(&[
            dbg!(CyclePermutation::from_vec(
                (1..=n).map(|i| vec![i, 2 * n - i + 1]).collect()
            ))
            .into(),
            Self::order_n_permutation(2 * n),
        ])
    }

    /// Generate the cyclical group on n elements
    pub fn cyclic(n: usize) -> Self {
        assert!(n > 0);

        Group::new(&[Self::order_n_permutation(n)])
    }

    /// Generate the symmetric group on n points
    pub fn symmetric(n: usize) -> Self {
        assert!(n > 0);

        if n == 1 {
            return Self::trivial();
        }

        Group::new(&[
            CyclePermutation::from_vec(vec![vec![1, 2]]).into(),
            Self::order_n_permutation(n),
        ])
    }
}

#[cfg(test)]
mod tests {
    use super::Group;

    #[test]
    fn trivial_creation() {
        let g = Group::trivial();
    }

    #[test]
    fn cyclic() {
        let g = Group::cyclic(5);
        assert_eq!(g.generators().len(), 1);
    }

    #[test]
    fn dihedral_creation() {
        let g = Group::dihedral_2n(4);
        assert_eq!(g.generators().len(), 2);
    }

    #[test]
    fn symmetric_creation() {
        let g = Group::symmetric(5);
        assert_eq!(g.generators().len(), 2);
    }
}
