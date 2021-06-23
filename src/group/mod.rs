//! Mod with various operations and utilities for working with groups

pub mod brute_force;
pub mod group_library;
pub mod orbit;
pub mod random_perm;
pub mod stabchain;
pub mod utils;

use self::stabchain::base::selectors::adaptors::PartialFixedBaseSelector;
use self::stabchain::base::selectors::DefaultSelector;
use self::stabchain::base::selectors::FixedBaseSelector;
use self::stabchain::builder::DefaultStrategy;
use crate::group::orbit::abstraction::TransversalResolver;
use crate::group::stabchain::base::selectors::BaseSelector;
use crate::group::stabchain::builder::BuilderStrategy;
use crate::perm::actions::SimpleApplication;
use crate::perm::export::CyclePermutation;
use crate::perm::utils::order_n_permutation;
use crate::perm::*;

use serde::{Deserialize, Serialize};

use std::iter::FromIterator;

/// The main struct exported. It stores a group as a list of generators.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Group<P = DefaultPermutation> {
    generators: Vec<P>,
}

impl Group {
    /// Generates the trivial group, which only contains the identity
    pub fn trivial() -> Self {
        Group::new(&[])
    }

    /// Creates the Klein 4 group
    pub fn klein_4() -> Self {
        Group::new(&[
            CyclePermutation::single_cycle(&[1, 2]).into_perm(),
            CyclePermutation::single_cycle(&[3, 4]).into_perm(),
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
        .into_perm();

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
        let it = (3..=n).map(|n| CyclePermutation::single_cycle(&[1, 2, n]).into_perm());
        it.collect()
    }

    /// Generate the symmetric group on n points
    pub fn symmetric(n: usize) -> Self {
        assert!(n > 0);

        if n == 1 {
            return Self::trivial();
        }

        Group::new(&[
            CyclePermutation::single_cycle(&[1, 2]).into_perm(),
            order_n_permutation(1, n),
        ])
    }
}

impl<P> Group<P> {
    /// To be used when the element is not a permutation. Note this does not check id
    pub fn from_list<T: IntoIterator<Item = P>>(iter: T) -> Group<P> {
        Group {
            generators: iter.into_iter().collect(),
        }
    }

    /// Get a reference to the generators of the group
    pub fn generators(&self) -> &[P] {
        &self.generators[..]
    }

    /// Used particularly to switch a group representation to any which uses a different permutation type
    /// Or to export a group when the permutation type is serializable
    pub fn map<F, T>(self, func: F) -> Group<T>
    where
        F: FnMut(P) -> T,
    {
        Group::from_list(self.generators.into_iter().map(func))
    }
}

impl<P> Group<P>
where
    P: Permutation,
{
    /// Instantiate the group from some generators
    #[tracing::instrument]
    pub fn new(generators: &[P]) -> Self {
        generators.iter().cloned().collect()
    }

    /// Deduplicate the generators
    pub fn deduplicate(&self) -> Self {
        use crate::DetHashSet;
        let set: DetHashSet<_> = self.generators.iter().cloned().collect();
        Group::from_list(set.into_iter())
    }

    /// Create a random generator for elements of the group
    #[tracing::instrument]
    pub fn rng(&self) -> random_perm::RandPerm<P> {
        random_perm::RandPerm::from_generators(11, self, 50)
    }

    /// Create a random generator for elements of the group with a source of randomness
    pub fn rng_with_source<R: rand::Rng>(&self, r: R) -> random_perm::RandPerm<P, R> {
        random_perm::RandPerm::new(11, self, 50, r)
    }

    /// Computes the orbit of the generator.
    /// Note that in most cases factored_transversal is a better choice
    /// As it allows to compute representatives with only marginally more work
    #[tracing::instrument]
    pub fn orbit(&self, base: usize) -> orbit::Orbit {
        orbit::Orbit::new(self, base)
    }

    /// Computes the orbit of a particular action
    pub fn orbit_of_action<A>(&self, base: A::OrbitT, strat: &A) -> orbit::Orbit<A::OrbitT>
    where
        A: Action<P>,
    {
        orbit::Orbit::new_with_action(self, base, strat)
    }

    /// Computes the transversal from the group generators (use factored transversal instead for memory efficience)
    #[tracing::instrument]
    pub fn transversal(
        &self,
        base: usize,
    ) -> impl orbit::transversal::Transversal<P, SimpleApplication<P>> {
        orbit::transversal::SimpleTransversal::new(self, base)
    }

    /// Compute the transversal w.r.t. to a given action
    pub fn transversal_of_action<A>(
        &self,
        base: A::OrbitT,
        strat: A,
    ) -> impl orbit::transversal::Transversal<P, A>
    where
        A: Action<P>,
    {
        orbit::transversal::SimpleTransversal::new_with_action(self, base, &strat)
    }

    /// Computes the factored transversal from the group generators
    #[tracing::instrument]
    pub fn factored_transversal(
        &self,
        base: usize,
    ) -> impl orbit::transversal::Transversal<P, SimpleApplication<P>> {
        orbit::transversal::FactoredTransversal::new(self, base)
    }

    /// Compute the factored transversal w.r.t. to a given action
    pub fn factored_transversal_of_action<A>(
        &self,
        base: A::OrbitT,
        strat: A,
    ) -> impl orbit::transversal::Transversal<P, A>
    where
        A: Action<P>,
    {
        orbit::transversal::FactoredTransversal::new_with_action(self, base, &strat)
    }

    /// Computes a stabilizer chain for this group
    #[tracing::instrument]
    pub fn stabchain(&self) -> stabchain::Stabchain<P, impl TransversalResolver<P>> {
        stabchain::Stabchain::new_with_strategy(
            self,
            DefaultStrategy::new(SimpleApplication::default(), DefaultSelector::default()),
        )
    }

    /// Computes a stabilizer chain for this group with a base
    #[tracing::instrument]
    pub fn stabchain_base(
        &self,
        base: &[usize],
    ) -> stabchain::Stabchain<P, impl TransversalResolver<P>> {
        stabchain::Stabchain::new_with_strategy(
            self,
            DefaultStrategy::new(SimpleApplication::default(), FixedBaseSelector::new(base)),
        )
    }
    /// Computes a stabilizer chain for this group with a partial base, using the default strategy for further points.
    pub fn stabchain_partial_base(
        &self,
        partial_base: &[usize],
    ) -> stabchain::Stabchain<P, impl TransversalResolver<P>> {
        stabchain::Stabchain::new_with_strategy(
            self,
            DefaultStrategy::new(
                SimpleApplication::default(),
                PartialFixedBaseSelector::new(partial_base, DefaultSelector::default()),
            ),
        )
    }

    /// Computes a stabilizer chain for this group with a strategy
    pub fn stabchain_with_strategy<S: BuilderStrategy<P>>(
        &self,
        strat: S,
    ) -> stabchain::Stabchain<P, S::Transversal, S::Action> {
        stabchain::Stabchain::new_with_strategy(self, strat)
    }

    /// Computes a stabilizer chain for this group with a chosen selector
    pub fn stabchain_with_selector(
        &self,
        selector: impl BaseSelector<P>,
    ) -> stabchain::Stabchain<P, impl TransversalResolver<P>> {
        stabchain::Stabchain::new_with_strategy(
            self,
            DefaultStrategy::new(SimpleApplication::default(), selector),
        )
    }

    /// Check G.subgroup_of(H) <=> G <= H
    #[tracing::instrument]
    pub fn subgroup_of(&self, h: &Group<P>) -> bool {
        let stabchain = h.stabchain();
        self.generators().iter().all(|g| stabchain.in_group(g))
    }

    /// Bruteforce the elements to get all elements in the group using an orbit strategy
    /// Unless time is a very cheap commodity, do not do on large groups
    #[tracing::instrument]
    pub fn bruteforce_elements(&self) -> Vec<P> {
        self.orbit_of_action(
            P::id(),
            &crate::perm::actions::MultiplicationAction::default(),
        )
        .iter()
        .cloned()
        .collect()
    }

    /// Regenerate the groups using a new set of generators
    #[tracing::instrument]
    pub fn random_generators(&self) -> Group<P> {
        let order = self.stabchain().order();

        let mut rng = self.rng();
        let mut gens = Vec::new();

        while Group::new(&gens[..]).stabchain().order() != order {
            gens.push(rng.random_permutation());
        }

        Group::new(&gens[..]).deduplicate()
    }

    /// Regenerate the groups using a new set of generators
    /// Note this might not actually terminate if n cannot be generated with that number of generators (i.e. symmetric with 1 generator)
    /// Setting n >= self.generators().len() should guarantee that this terminates
    #[tracing::instrument]
    pub fn random_n_generators(&self, n: usize) -> Group<P> {
        let order = self.stabchain().order();

        let mut rng = self.rng();
        let mut gens = Vec::new();

        while Group::new(&gens[..]).stabchain().order() != order {
            gens = Vec::with_capacity(n);
            gens.extend(std::iter::repeat_with(|| rng.random_permutation()).take(n));
        }

        Group::new(&gens[..]).deduplicate()
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
    #[tracing::instrument]
    pub fn conjugate_gens(&self, p: &P) -> Self {
        use crate::perm::actions::ConjugationAction;
        let c = ConjugationAction::default();
        self.clone().map(|g| c.apply(p, g))
    }

    /// Computes the direct product of two groups
    #[tracing::instrument]
    pub fn direct_product(g1: &Group<P>, g2: &Group<P>) -> Group<P> {
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

        it.collect()
    }

    #[tracing::instrument]
    pub fn outer_product(g1: &Group<P>, g2: &Group<P>) -> Group<P> {
        //TODO implement
        g1.clone()
    }
}

impl<P> FromIterator<P> for Group<P>
where
    P: Permutation,
{
    fn from_iter<T: IntoIterator<Item = P>>(iter: T) -> Group<P> {
        let v = iter.into_iter().filter(|p| !p.is_id()).collect();
        Group { generators: v }
    }
}

use std::fmt;
impl<P> fmt::Display for Group<P>
where
    P: fmt::Display,
{
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
        use crate::group::orbit::transversal::Transversal;
        let g = Group::symmetric(10);
        assert_eq!(g.orbit(0), g.factored_transversal(0).orbit())
    }

    #[test]
    fn check_symmetric_super() {
        /*
        assert_eq!(Group::trivial().symmetric_super_order(), 1);
        assert_eq!(Group::symmetric(10).symmetric_super_order(), 10);
        assert_eq!(Group::dihedral_2n(10).symmetric_super_order(), 10);
        assert_eq!(Group::cyclic(15).symmetric_super_order(), 15);
        */

        let groups = [
            Group::trivial(),
            Group::symmetric(10),
            Group::dihedral_2n(10),
            Group::cyclic(15),
        ];
        for g in groups.iter() {
            assert!(g.subgroup_of(&Group::symmetric(g.symmetric_super_order())));
        }
    }

    #[test]
    fn test_product() {
        use crate::perm::export::CyclePermutation;
        use crate::perm::DefaultPermutation;
        use crate::DetHashSet;

        let perm: DefaultPermutation = CyclePermutation::single_cycle(&[1, 2, 3]).into();

        let g = Group::new(&[perm.clone()]);
        let prod = Group::direct_product(&g, &g);

        let gens: DetHashSet<_> = prod.generators().iter().cloned().collect();
        assert_eq!(prod.generators().len(), 2);
        assert!(gens.contains(&perm));
        assert!(gens.contains(&(CyclePermutation::single_cycle(&[4, 5, 6]).into())));
    }

    #[test]
    fn test_product_two_small_symm() {
        let prod = Group::direct_product(&Group::symmetric(4), &Group::symmetric(3));
        let expanded = prod.bruteforce_elements();
        assert_eq!(expanded.len(), 24 * 6);
    }

    #[test]
    fn random_regenerator() {
        use crate::DetHashSet;

        let g = Group::direct_product(&Group::dihedral_2n(12), &Group::symmetric(5));
        let reg = g.random_generators();

        let g_el: DetHashSet<_> = g.bruteforce_elements().into_iter().collect();
        let reg_el = reg.bruteforce_elements().into_iter().collect();
        assert_eq!(g_el, reg_el);
    }

    #[test]
    fn random_regenerator_small() {
        // Size 24
        let g = Group::symmetric(4);
        let reg = g.random_n_generators(30);

        // We subtract the identity
        assert!(reg.generators().len() <= 24 - 1);
    }

    #[test]
    fn subgroup_testing() {
        assert!(Group::cyclic(10).subgroup_of(&Group::symmetric(10)));
        assert!(Group::alternating(10).subgroup_of(&Group::symmetric(10)));
        assert!(Group::trivial().subgroup_of(&Group::klein_4()));
    }
}
