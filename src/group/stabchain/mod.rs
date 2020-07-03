pub mod builder;
pub mod element_testing;
pub mod moved_point_selector;

use crate::group::orbit::abstraction::TransversalResolver;
use crate::group::Group;
use crate::perm::*;
use builder::{Builder, Strategy};
use moved_point_selector::MovedPointSelector;

use std::collections::HashMap;

#[derive(Debug)]
pub struct Stabchain<V> {
    chain: Vec<StabchainRecord<V>>,
}

impl<V> Stabchain<V>
where
    V: TransversalResolver,
{
    /// Creates a stabilizer chain, using a selected strategy.
    pub fn new_with_strategy<S, B: Builder<V>>(g: &Group, build_strategy: S) -> Self
    where
        S: Strategy<Transversal = V, BuilderT = B>,
    {
        let mut builder = build_strategy.make_builder();
        builder.set_generators(g);
        builder.build()
    }

    // Utility to get the chain
    fn get_chain_at_layer(&self, n: usize) -> impl Iterator<Item = &StabchainRecord<V>> {
        self.chain.iter().skip(n)
    }

    /// Is the element in the group?
    pub fn in_group(&self, g: &DefaultPermutation) -> bool {
        self.in_subgroup(g, 0)
    }

    /// Check membership at the subgroup
    pub fn in_subgroup(&self, g: &DefaultPermutation, layer: usize) -> bool {
        element_testing::is_in_group(self.get_chain_at_layer(layer), g)
    }

    /// Get representatives that multiply to g
    /// TODO: If there is something useful to do with these, make a struct for Vec<Permutation>
    pub fn coset_representatives(&self, g: &DefaultPermutation) -> Option<Vec<DefaultPermutation>> {
        self.coset_representatives_in_subgroup(g, 0)
    }

    /// Get representatives that multiply to g
    pub fn coset_representatives_in_subgroup(
        &self,
        g: &DefaultPermutation,
        layer: usize,
    ) -> Option<Vec<DefaultPermutation>> {
        element_testing::coset_representative(self.get_chain_at_layer(layer), g)
    }

    /// Calculate the order of the group this stabilizer chain represents.
    pub fn order(&self) -> usize {
        self.order_subgroup(0)
    }

    /// Calculate the order of the subgroupgroup this stabilizer chain represents.
    pub fn order_subgroup(&self, layer: usize) -> usize {
        //The order is the product of the orbit lengths.
        self.get_chain_at_layer(layer)
            .map(|record| record.transversal.len())
            .product::<usize>()
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
    pub fn layer(&self, n: usize) -> Option<&StabchainRecord<V>> {
        self.chain.get(n)
    }

    /// Get an iterator over the records
    pub fn iter(&self) -> impl Iterator<Item = &StabchainRecord<V>> {
        self.chain.iter()
    }
}

impl<V> IntoIterator for Stabchain<V> {
    type Item = StabchainRecord<V>;
    type IntoIter = std::vec::IntoIter<Self::Item>;

    fn into_iter(self) -> Self::IntoIter {
        self.chain.into_iter()
    }
}

/// All the information stored in a layer of the stabilizer chain
#[derive(Debug, Clone)]
pub struct StabchainRecord<V> {
    base: usize,
    gens: Group,
    transversal: HashMap<usize, DefaultPermutation>,
    resolver: V,
}

impl<V> StabchainRecord<V> {
    /// Get the associated group
    pub fn group(&self) -> &Group {
        &self.gens
    }

    /// Get the base of this layer, i.e. the element that the next layer stabilizes
    pub fn base(&self) -> usize {
        self.base
    }
}

impl<V> StabchainRecord<V>
where
    V: TransversalResolver,
{
    pub(crate) fn new(
        base: usize,
        gens: Group,
        transversal: HashMap<usize, DefaultPermutation>,
    ) -> Self {
        StabchainRecord {
            base,
            gens,
            transversal,
            resolver: V::default(),
        }
    }

    /// Get the resolver of the record
    pub(crate) fn resolver(&self) -> &V {
        &self.resolver
    }

    /// Get the resolver of the record
    pub fn transversal(&self) -> V::AssociatedTransversal {
        self.resolver
            .into_transversal(self.transversal.clone(), self.base)
    }
}

use std::fmt;

impl<V> fmt::Display for Stabchain<V>
where
    V: TransversalResolver,
{
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[Stabchain: ")?;
        for (i, record) in self.iter().enumerate() {
            write!(f, "G_{} := {} ", i, record)?
        }
        write!(f, "]")
    }
}

impl<V> fmt::Display for StabchainRecord<V> {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[base := {}, {}]", self.base() + 1, self.group())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::group::orbit::transversal::Transversal;

    fn check_well_formed_chain<V: TransversalResolver>(s: &Stabchain<V>) {
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
