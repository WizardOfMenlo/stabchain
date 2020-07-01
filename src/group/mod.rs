pub mod brute_force;
pub mod orbit;
pub mod random_perm;
pub mod stabchain;
pub mod utils;

use crate::perm::export::CyclePermutation;
use crate::perm::utils::order_n_permutation;
use crate::perm::Permutation;
use stabchain::builder::Strategy;

use std::iter::FromIterator;

#[derive(Debug, Clone)]
pub struct Group {
    generators: Vec<Permutation>,
}

impl Group {
    /// Instantiate the group from some generators
    pub fn new(generators: &[Permutation]) -> Self {
        Self::from_iter(generators.iter().cloned())
    }

    /// Get a reference to the generators of the group
    pub fn generators(&self) -> &[Permutation] {
        &self.generators[..]
    }

    /// Computes the orbit of the generator.
    /// Note that in most cases factored_transversal is a better choice
    /// As it allows to compute representatives with only marginally more work
    pub fn orbit(&self, base: usize) -> orbit::Orbit {
        orbit::Orbit::new(self, base)
    }

    /// Computes the transversal from the group generators (use factored transversal instead for memory efficience)
    pub fn transversal(&self, base: usize) -> orbit::transversal::Transversal {
        orbit::transversal::Transversal::new(self, base)
    }

    /// Computes the factored transversal from the group generators
    pub fn factored_transversal(
        &self,
        base: usize,
    ) -> orbit::factored_transversal::FactoredTransversal {
        orbit::factored_transversal::FactoredTransversal::new(self, base)
    }

    /// Computes a stabilizer chain for this group
    pub fn stabchain(&self) -> stabchain::Stabchain {
        stabchain::Stabchain::new(self)
    }

    /// Computes a stabilizer chain for this group with a base
    pub fn stabchain_base(&self, base: &[usize]) -> stabchain::Stabchain {
        use self::stabchain::builder::DefaultStrategy;
        use self::stabchain::moved_point_selector::FixedBaseSelector;
        stabchain::Stabchain::new_with_strategy(
            self,
            DefaultStrategy::new(FixedBaseSelector::new(base)),
        )
    }

    /// Computes a stabilizer chain for this group with a strategy
    pub fn stabchain_with_strategy(&self, strat: impl Strategy) -> stabchain::Stabchain {
        stabchain::Stabchain::new_with_strategy(self, strat)
    }

    /// Bruteforce the elements to get all elements in the group
    /// Unless time is a very cheap commodity, do not do on large groups
    pub fn bruteforce_elements(&self) -> Vec<Permutation> {
        brute_force::group_elements(self)
    }

    /// Computes the smallest n s.t. G <= S_n
    pub fn symmetric_super_order(&self) -> usize {
        self.generators
            .iter()
            .flat_map(|g| g.lmp())
            .max()
            .unwrap_or(0)
            + 1
    }

    /// Conjugate the generators by this permutation
    pub fn conjugate_gens(&self, p: &Permutation) -> Self {
        Group::from_iter(
            self.generators()
                .iter()
                .map(|g| p.inv().multiply(g).multiply(p)),
        )
    }

    /// Computes the direct product of two groups
    pub fn product(g1: &Group, g2: &Group) -> Group {
        if g1.generators.is_empty() {
            return g2.clone();
        }

        if g2.generators.is_empty() {
            return g1.clone();
        }

        let n = g1.symmetric_super_order();
        let it = g1
            .generators()
            .iter()
            .cloned()
            .chain(g2.generators().iter().map(|p| p.shift(n)));

        Group::from_iter(it)
    }

    /// Generates the trivial group, which only contains the identity
    pub fn trivial() -> Self {
        // TODO: Should we include the identity here?
        Group::new(&[])
    }

    /// Creates the Klein 4 group
    pub fn klein_4() -> Self {
        Group::new(&[
            CyclePermutation::single_cycle(&[1, 2]).into(),
            CyclePermutation::single_cycle(&[3, 4]).into(),
        ])
    }

    /// This generates the dihedral group D_2n. I.e. the group of isometries on the regular n-gon
    pub fn dihedral_2n(n: usize) -> Self {
        //https://math.stackexchange.com/questions/3614294/choice-of-generator-in-dihedral-group
        assert!(n > 0);
        if n == 1 {
            return Group::cyclic(2);
        }
        if n == 2 {
            return Group::klein_4();
        }

        let reflection_perm = if n % 2 == 0 {
            let k = n / 2;
            // (1 2k)(2, 2k - 1)...(k, k+1)
            CyclePermutation::from_vec((1..=k).map(|i| vec![i, 2 * k - i + 1]).collect())
        } else {
            let k = (n - 1) / 2;
            // (2, 2k + 1)...(k + 1, k+2)
            CyclePermutation::from_vec((2..=(k + 1)).map(|i| vec![i, 2 * k - i + 3]).collect())
        }
        .into();

        Group::new(&[reflection_perm, order_n_permutation(1, n)])
    }

    /// Generate the cyclical group on n elements (more accurately, generates the cyclical group from a cycle on 1..=n)
    pub fn cyclic(n: usize) -> Self {
        assert!(n > 0);

        Group::new(&[order_n_permutation(1, n)])
    }

    /// Generate the alternating group on n points
    pub fn alternating(n: usize) -> Self {
        assert!(n > 0);

        if n == 1 {
            return Self::trivial();
        }

        // Alternating group is generated by the 3-cycles
        let it = (3..=n).map(|n| CyclePermutation::single_cycle(&[1, 2, n]).into());
        Group::from_iter(it)
    }

    /// Generate the symmetric group on n points
    pub fn symmetric(n: usize) -> Self {
        assert!(n > 0);

        if n == 1 {
            return Self::trivial();
        }

        Group::new(&[
            CyclePermutation::single_cycle(&[1, 2]).into(),
            order_n_permutation(1, n),
        ])
    }

    /// Make this useful group for benchmarking
    pub fn make_row_col_symmetry(x: usize, y: usize) -> Self {
        let mut perms = Vec::new();
        for i in 0..x {
            let mut l = Vec::from_iter(0..x * y);
            for j in 1..y {
                l[i + (j - 1) * x] = (i + 1) + (j - 1) * y;
                l[(i + 1) + (j - 1) * x] = i + (j - 1) * y;
            }
            perms.push(Permutation::from_vec(l));
        }

        for j in 1..y {
            let mut l = Vec::from_iter(0..x * y);
            for i in 0..x {
                l[i + j * x] = i + (j - 1) * x;
                l[i + (j - 1) * x] = i + j * x;
            }
            perms.push(Permutation::from_vec(l));
        }

        Group::new(&perms[..])
    }
}

impl FromIterator<Permutation> for Group {
    fn from_iter<T: IntoIterator<Item = Permutation>>(iter: T) -> Group {
        let v = iter.into_iter().filter(|p| !p.is_id()).collect();
        Group { generators: v }
    }
}

use std::fmt;
impl fmt::Display for Group {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        if self.generators.is_empty() {
            return write!(f, "[Group: gens := <>]");
        }

        write!(f, "[Group: gens := <")?;
        for gen in &self.generators[0..self.generators.len() - 1] {
            write!(f, "{}, ", gen)?;
        }
        write!(f, "{}>]", self.generators[self.generators.len() - 1])
    }
}

#[cfg(test)]
mod tests {
    use super::Group;

    #[test]
    fn trivial_creation() {
        let _g = Group::trivial();
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

    #[test]
    fn orbit_vs_factored_orbit() {
        let g = Group::symmetric(10);
        assert_eq!(g.orbit(0), g.factored_transversal(0).orbit())
    }

    #[test]
    fn check_symmetric_super() {
        assert_eq!(Group::trivial().symmetric_super_order(), 1);
        assert_eq!(Group::symmetric(10).symmetric_super_order(), 10);
        assert_eq!(Group::dihedral_2n(10).symmetric_super_order(), 10);
        assert_eq!(Group::cyclic(15).symmetric_super_order(), 15);
    }

    #[test]
    fn test_product() {
        use crate::perm::export::CyclePermutation;
        use crate::perm::Permutation;
        use std::collections::HashSet;

        let perm: Permutation = CyclePermutation::single_cycle(&[1, 2, 3]).into();

        let g = Group::new(&[perm.clone()]);
        let prod = Group::product(&g, &g);

        let gens: HashSet<_> = prod.generators().iter().cloned().collect();
        assert_eq!(prod.generators().len(), 2);
        assert!(gens.contains(&perm));
        assert!(gens.contains(&(CyclePermutation::single_cycle(&[4, 5, 6]).into())));
    }

    #[test]
    fn test_product_two_small_symm() {
        let prod = Group::product(&Group::symmetric(4), &Group::symmetric(3));
        let expanded = prod.bruteforce_elements();
        assert_eq!(expanded.len(), 24 * 6);
    }

    #[test]
    #[ignore]
    fn test_row_col_symm() {
        let g = Group::make_row_col_symmetry(60, 60);
        assert_eq!(g.generators.len(), 118);
    }
}
