pub mod builder;
pub mod element_testing;
mod moved_point_selector;

use crate::group::orbit::factored_transversal::FactoredTransversal;
use crate::group::Group;
use crate::perm::Permutation;
use builder::{Builder, BuilderStrategy};
use moved_point_selector::MovedPointSelector;

use std::collections::HashMap;

#[derive(Debug)]
pub struct Stabchain {
    chain: Vec<StabchainRecord>,
}

impl Stabchain {
    fn new_impl<M: MovedPointSelector>(
        g: &Group,
        selector: M,
        build_strategy: impl BuilderStrategy<M>,
    ) -> Self {
        let mut builder = build_strategy.make_builder(selector);
        builder.set_generators(g);
        builder.build()
    }

    /// Creates a stabilizer chain from a Group
    pub fn new(g: &Group) -> Self {
        Self::new_impl(
            g,
            moved_point_selector::LmpSelector,
            builder::IFTBuilderStrategy::default(),
        )
    }

    /// Creates a stabilizer chain from a Group
    pub fn new_with_builder(
        g: &Group,
        strat: impl BuilderStrategy<moved_point_selector::LmpSelector>,
    ) -> Self {
        Self::new_impl(g, moved_point_selector::LmpSelector, strat)
    }

    /// Creates a stabilizer with a predefined base
    pub fn new_with_base(g: &Group, base: &[usize]) -> Self {
        Self::new_impl(
            g,
            moved_point_selector::FixedBaseSelector::new(base),
            builder::IFTBuilderStrategy::default(),
        )
    }

    /// Creates a stabilizer with a predefined base
    pub fn new_with_base_builder(
        g: &Group,
        base: &[usize],
        strat: impl BuilderStrategy<moved_point_selector::FixedBaseSelector>,
    ) -> Self {
        Self::new_impl(g, moved_point_selector::FixedBaseSelector::new(base), strat)
    }

    // Utility to get the chain
    fn get_chain_at_layer(&self, n: usize) -> impl Iterator<Item = &StabchainRecord> {
        self.chain.iter().skip(n)
    }

    /// Is the element in the group?
    pub fn in_group(&self, g: &Permutation) -> bool {
        self.in_subgroup(g, 0)
    }

    /// Check membership at the subgroup
    pub fn in_subgroup(&self, g: &Permutation, layer: usize) -> bool {
        element_testing::is_in_group(self.get_chain_at_layer(layer), g)
    }

    /// Get representatives that multiply to g
    /// TODO: If there is something useful to do with these, make a struct for Vec<Permutation>
    pub fn coset_representatives(&self, g: &Permutation) -> Option<Vec<Permutation>> {
        self.coset_representatives_in_subgroup(g, 0)
    }

    /// Get representatives that multiply to g
    pub fn coset_representatives_in_subgroup(
        &self,
        g: &Permutation,
        layer: usize,
    ) -> Option<Vec<Permutation>> {
        element_testing::coset_representative(self.get_chain_at_layer(layer), g)
    }

    /// Get the base corresponding to this stabilizer chain
    pub fn base(&self) -> Vec<usize> {
        self.chain.iter().map(|g| g.base).collect()
    }

    /// Get chain length
    pub fn len(&self) -> usize {
        // We don't include the end item here
        self.chain.len()
    }

    /// Is the chain empty (i.e. originary group was trivial)
    pub fn is_empty(&self) -> bool {
        self.len() == 0
    }

    /// Get G^(n)
    pub fn layer(&self, n: usize) -> Option<&StabchainRecord> {
        self.chain.get(n)
    }

    /// Get an iterator over the records
    pub fn iter(&self) -> impl Iterator<Item = &StabchainRecord> {
        self.chain.iter()
    }

    /// Calculate the order of the group this stabilizer chain represents.
    pub fn order(&self) -> usize {
        //The order is the product of the orbit lengths.
        self.chain
            .iter()
            .map(|record| record.transversal.len())
            .product::<usize>()
    }
}

impl IntoIterator for Stabchain {
    type Item = StabchainRecord;
    type IntoIter = std::vec::IntoIter<Self::Item>;

    fn into_iter(self) -> Self::IntoIter {
        self.chain.into_iter()
    }
}

/// All the information stored in a layer of the stabilizer chain
#[derive(Debug, Clone)]
pub struct StabchainRecord {
    base: usize,
    gens: Group,
    transversal: HashMap<usize, Permutation>,
}

impl StabchainRecord {
    /// Get the associated group
    pub fn group(&self) -> &Group {
        &self.gens
    }

    /// Get the base of this layer, i.e. the element that the next layer stabilizes
    pub fn base(&self) -> usize {
        self.base
    }

    /// Get the transversal of the base under this group
    pub fn transversal(&self) -> FactoredTransversal {
        FactoredTransversal::from_raw(self.base, self.transversal.clone())
    }
}

use std::fmt;

impl fmt::Display for Stabchain {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[Stabchain: ")?;
        for (i, record) in self.iter().enumerate() {
            write!(f, "G_{} := {} ", i, record)?
        }
        write!(f, "]")
    }
}

impl fmt::Display for StabchainRecord {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[base := {}, {}]", self.base() + 1, self.group())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn check_well_formed_chain(s: &Stabchain) {
        let mut previous = None;
        for record in s.chain.iter() {
            let gens = record.group();
            let transversal = record.transversal();

            // Check the computed transversal, and the one computed from generators agree
            // We do not directly check the transversal since representatives are not unique
            assert_eq!(transversal.orbit(), gens.orbit(record.base));

            for elem in transversal.orbit().iter().copied() {
                assert_eq!(
                    elem,
                    transversal
                        .representative(elem)
                        .unwrap()
                        .apply(record.base())
                );
            }

            // Check that everything is stabilized correctly
            if !previous.is_none() {
                let stabilized = previous.unwrap();
                assert_eq!(gens.orbit(stabilized).len(), 1);
            }

            previous = Some(record.base);
        }
    }

    #[test]
    fn trivial_chain() {
        let g = Group::trivial();
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
        assert!(chain.is_empty());
    }

    #[test]
    fn klein4_chain() {
        let g = Group::klein_4();
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
    }

    #[test]
    fn cyclic_chain() {
        let g = Group::cyclic(100);
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
    }

    #[test]
    fn dihedral_chain() {
        let g = Group::dihedral_2n(3);
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
        assert_eq!(6, chain.order());
    }

    #[test]
    fn alternating_chain() {
        let g = Group::alternating(5);
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
        assert_eq!(60, chain.order());
    }

    #[test]
    fn symmetric_chain() {
        let g = Group::symmetric(10);
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
        assert_eq!(3628800, chain.order())
    }

    #[test]
    fn product_chain() {
        let g = Group::product(&Group::symmetric(15), &Group::symmetric(15));
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
    }

    #[test]
    fn single_non_trivial_layer() {
        use crate::perm::export::CyclePermutation;

        let g = Group::new(&[CyclePermutation::single_cycle(&[1, 2]).into()]);
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
    }

    // #[test]
    // fn book_example() {
    //     use crate::perm::export::CyclePermutation;
    //     use std::collections::HashMap;

    //     let g = Group::new(&[
    //         CyclePermutation::single_cycle(&[1, 2, 3]).into(),
    //         CyclePermutation::single_cycle(&[2, 3, 4]).into(),
    //     ]);

    //     let chain = Stabchain {
    //         chain: vec![
    //             StabchainRecord {
    //                 base: 0,
    //                 gens: g.clone(),
    //                 transversal: {
    //                     let mut m = HashMap::new();
    //                     m.insert(0, Permutation::id());
    //                     m.insert(1, CyclePermutation::single_cycle(&[1, 2, 3]).into());
    //                     m.insert(2, CyclePermutation::single_cycle(&[1, 3, 2]).into());
    //                     m.insert(3, CyclePermutation::single_cycle(&[1, 4, 2]).into());
    //                     m
    //                 },
    //             },
    //             StabchainRecord {
    //                 base: 1,
    //                 gens: Group::new(&[CyclePermutation::single_cycle(&[2, 3, 4]).into()]),
    //                 transversal: {
    //                     let mut m = HashMap::new();
    //                     m.insert(1, Permutation::id());
    //                     m.insert(2, CyclePermutation::single_cycle(&[2, 3, 4]).into());
    //                     m.insert(3, CyclePermutation::single_cycle(&[2, 4, 3]).into());
    //                     m
    //                 },
    //             },
    //         ],
    //     };

    //     let computed_chain = g.stabchain_base(&[0, 1]);
    //     check_well_formed_chain(&chain);
    //     check_well_formed_chain(&computed_chain);

    //     assert_eq!(chain.len(), computed_chain.len());
    //     for (r1, r2) in chain.iter().zip(computed_chain.iter()) {
    //         assert_eq!(r1.base(), r2.base());
    //     }
    // }
}
