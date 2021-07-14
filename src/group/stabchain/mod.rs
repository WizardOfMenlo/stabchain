//! Mod which contains the definition of a stabilizer chain, complete with all the ways of creating such a chain

pub mod base;
pub mod base_change_builder;
pub mod builder;
pub mod element_testing;

use crate::group::Group;
use crate::perm::actions::SimpleApplication;
use crate::perm::*;
use crate::{group::orbit::abstraction::TransversalResolver, perm::impls::word::WordPermutation};
use base::Base;
use base_change_builder::{BaseChangeBuilder, BaseChangeBuilderStrategy};
use builder::{Builder, BuilderStrategy};

use crate::DetHashMap;

use num::BigUint;

use tracing::debug;

/// A stabilizer chain. Each level of the chain represents a subgroup of the
/// preceding group, which usually fixes a single point.
#[derive(Debug, Clone)]
pub struct Stabchain<P, V, A = SimpleApplication<P>>
where
    A: Action<P>,
    P: Permutation,
{
    chain: Vec<StabchainRecord<P, V, A>>,
}

impl<P, V, A> Stabchain<P, V, A>
where
    P: Permutation,
    A: Action<P>,
    V: TransversalResolver<P, A>,
{
    /// Creates a stabilizer chain, using a selected strategy.
    #[tracing::instrument(skip(g))]
    pub fn new_with_strategy<S, B: Builder<P, V, A>>(g: &Group<P>, build_strategy: S) -> Self
    where
        S: BuilderStrategy<P, Action = A, Transversal = V, BuilderT = B>,
    {
        debug!(G = %g, strat = ?build_strategy, "Starting Stabilizer chain construction");
        let mut builder = build_strategy.make_builder();
        debug!(?builder, "Builder Constructed");
        builder.set_generators(g);
        debug!("Building completed");
        builder.build()
    }

    // Utility to get the chain
    fn get_chain_at_layer(&self, n: usize) -> impl Iterator<Item = &StabchainRecord<P, V, A>> {
        self.chain.iter().skip(n)
    }

    /// Is the element in the group?
    pub fn in_group(&self, g: &P) -> bool {
        self.in_subgroup(g, 0)
    }

    /// Check membership at the subgroup
    pub fn in_subgroup(&self, g: &P, layer: usize) -> bool {
        element_testing::is_in_group(self.get_chain_at_layer(layer), g)
    }

    /// Get representatives that multiply to g
    /// TODO: If there is something useful to do with these, make a struct for Vec<Permutation>
    pub fn coset_representatives(&self, g: &P) -> Option<Vec<P>> {
        self.coset_representatives_in_subgroup(g, 0)
    }

    /// Get representatives that multiply to g
    pub fn coset_representatives_in_subgroup(&self, g: &P, layer: usize) -> Option<Vec<P>> {
        element_testing::coset_representative(self.get_chain_at_layer(layer), g)
    }

    /// Calculate the order of the group this stabilizer chain represents.
    pub fn order(&self) -> BigUint {
        self.order_subgroup(0)
    }

    /// Calculate the order of the subgroupgroup this stabilizer chain represents.
    pub fn order_subgroup(&self, layer: usize) -> BigUint {
        order(self.get_chain_at_layer(layer))
    }

    /// Get the base corresponding to this stabilizer chain
    pub fn base(&self) -> Base<P, A> {
        Base::new_with_action(
            self.chain.iter().map(|g| &g.base).cloned().collect(),
            A::default(),
        )
    }

    /// Get the strong generating set of this stabiliser chain.
    pub fn strong_generating_set(&self) -> Vec<P> {
        self.chain
            .iter()
            .flat_map(|g| g.gens.generators().iter().cloned())
            .collect::<DetHashSet<P>>()
            .drain()
            .collect()
    }

    /// Get chain length
    pub fn len(&self) -> usize {
        // We don't include the end item here
        self.chain.len()
    }

    /// Is the chain empty (i.e. originary group was trivial)
    pub fn is_empty(&self) -> bool {
        self.chain.is_empty()
    }

    /// Get G^(n)
    pub fn layer(&self, n: usize) -> Option<&StabchainRecord<P, V, A>> {
        self.chain.get(n)
    }

    /// Get an iterator over the records
    pub fn iter(&self) -> impl Iterator<Item = &StabchainRecord<P, V, A>> {
        self.chain.iter()
    }

    pub fn from_known_base_with_strategy<S, B>(
        &self,
        base: Base<P, A>,
        build_strategy: S,
    ) -> Stabchain<P, FactoredTransversalResolver<A>, A>
    where
        B: BaseChangeBuilder<P, FactoredTransversalResolver<A>, A>,
        S: BaseChangeBuilderStrategy<
            P,
            Action = A,
            Transversal = FactoredTransversalResolver<A>,
            BuilderT = B,
        >,
    {
        let mut builder = build_strategy.make_builder();
        builder.set_base(self, base);
        builder.build()
    }
}

/// Calculate the order of the Chain given by an iterator.
/// This is defined here so that it may be reused in placed that may not yet have a complete stabilizer chain.
pub(crate) fn order<'a, P, V, A, I>(iter: I) -> BigUint
where
    P: Permutation + 'a,
    A: Action<P> + 'a,
    V: TransversalResolver<P, A> + 'a,
    I: IntoIterator<Item = &'a StabchainRecord<P, V, A>>,
{
    //The order is the product of the orbit lengths.
    iter.into_iter()
        .map(|record| BigUint::from(record.transversal.len()))
        .product()
}

impl<P, A> Stabchain<P, FactoredTransversalResolver<A>, A>
where
    P: Permutation,
    A: Action<P>,
{
    /// Create the stabiliser chain from a known base and strong generating set.
    pub fn from_base_and_strong_gen_set(base: &[A::OrbitT], sgs: &[P], strat: A) -> Self {
        //Skeleton of the chain.
        let mut chain: Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>> = base
            .iter()
            .map(|point| {
                StabchainRecord::new(point.clone(), Group::new(&[]), DetHashMap::default())
            })
            .collect();
        //Add the generators in the correct location, from back to front.
        for p in sgs {
            for i in 0..chain.len() {
                //If this permutation is fixed by all previous points but not by this one, then add it at this level.
                if base[..i]
                    .iter()
                    .all(|base| strat.apply(p, base.clone()) == base.clone())
                {
                    chain[i].gens.generators.push(p.clone());
                } else {
                    //If it doesn't fix all points currently, it isn't going to moving forward.
                    break;
                }
            }
        }
        //Now fill in the transversal
        chain.iter_mut().for_each(|record| {
            record.transversal =
                factored_transversal_complete_opt(record.group(), record.base.clone(), &strat)
        });
        Stabchain { chain }
    }
}

impl<P, V, A> IntoIterator for Stabchain<P, V, A>
where
    A: Action<P>,
    P: Permutation,
{
    type Item = StabchainRecord<P, V, A>;
    type IntoIter = std::vec::IntoIter<Self::Item>;

    fn into_iter(self) -> Self::IntoIter {
        self.chain.into_iter()
    }
}

/// All the information stored in a layer of the stabilizer chain
#[derive(Debug, Clone)]
pub struct StabchainRecord<P, V, A = SimpleApplication<P>>
where
    A: Action<P>,
    P: Permutation,
{
    base: A::OrbitT,
    gens: Group<P>,
    transversal: DetHashMap<A::OrbitT, P>,
    resolver: V,
    representative_cache: RefCell<DetHashMap<A::OrbitT, WordPermutation<P>>>,
}

impl<P, V, A> StabchainRecord<P, V, A>
where
    A: Action<P>,
    P: Permutation,
{
    /// Get the associated group
    pub fn group(&self) -> &Group<P> {
        &self.gens
    }

    /// Get the base of this layer, i.e. the element that the next layer stabilizes
    pub fn base(&self) -> &A::OrbitT {
        &self.base
    }
}

impl<P, V, A> StabchainRecord<P, V, A>
where
    P: Permutation,
    A: Action<P>,
    V: TransversalResolver<P, A>,
{
    pub(crate) fn new(
        base: A::OrbitT,
        gens: Group<P>,
        transversal: DetHashMap<A::OrbitT, P>,
    ) -> Self {
        StabchainRecord {
            base,
            gens,
            transversal,
            resolver: V::default(),
            representative_cache: DetHashMap::default().into(),
        }
    }
    ///Create a trivial record that represents the trivial group.
    pub(crate) fn trivial_record(base: A::OrbitT) -> Self {
        StabchainRecord {
            base: base.clone(),
            gens: Group::new(&[]),
            transversal: [(base, P::id())].iter().cloned().collect(),
            resolver: V::default(),
            representative_cache: DetHashMap::default().into(),
        }
    }

    /// Get the resolver of the record
    pub(crate) fn resolver(&self) -> &V {
        &self.resolver
    }

    /// Get the resolver of the record
    pub fn transversal(&self) -> V::AssociatedTransversal {
        self.resolver
            .to_transversal(self.transversal.clone(), self.base.clone())
    }
}

use std::cell::RefCell;
use std::fmt;

impl<P, V, A> fmt::Display for Stabchain<P, V, A>
where
    P: fmt::Display + Permutation,
    A: Action<P, OrbitT = usize>,
    V: TransversalResolver<P, A>,
{
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "[Stabchain: ")?;
        for (i, record) in self.iter().enumerate() {
            write!(f, "G_{} := {} ", i, record)?
        }
        write!(f, "]")
    }
}

impl<P, V, A> fmt::Display for StabchainRecord<P, V, A>
where
    P: fmt::Display + Permutation,
    A: Action<P, OrbitT = usize>,
{
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        // TODO: Once specialization is done, fix this
        write!(f, "[base := {}, {}]", self.base() + 1, self.group())
    }
}

use super::orbit::{
    abstraction::FactoredTransversalResolver,
    transversal::factored_transversal::factored_transversal_complete_opt,
};
use crate::{group::orbit::transversal::TransversalError, DetHashSet};

#[derive(Debug)]
pub enum StabchainError<P, OrbitT> {
    InvalidComputedOrbit,
    TransversalError(TransversalError<P, OrbitT>),
    BasePointNotStabilized(OrbitT),
    IncorrectOrder((BigUint, BigUint)),
}

pub fn correct_stabchain_order<P, V, A>(
    s: &Stabchain<P, V, A>,
    expected_order: BigUint,
) -> Result<(), StabchainError<P, A::OrbitT>>
where
    P: Permutation,
    V: TransversalResolver<P, A>,
    A: Action<P>,
    A::OrbitT: std::fmt::Debug,
{
    let order = s.order();
    if order == expected_order {
        Ok(())
    } else {
        Err(StabchainError::IncorrectOrder((order, expected_order)))
    }
}

pub fn valid_stabchain<P, V, A>(s: &Stabchain<P, V, A>) -> Result<(), StabchainError<P, A::OrbitT>>
where
    P: Permutation,
    V: TransversalResolver<P, A>,
    A: Action<P>,
    A::OrbitT: std::fmt::Debug,
{
    use crate::group::orbit::transversal::{valid_transversal, Transversal};

    let applicator = A::default();

    let mut previous: Option<A::OrbitT> = None;
    for record in s.iter() {
        let gens = record.group();
        let transversal = record.transversal();

        // Check the computed transversal, and the one computed from generators agree
        // We do not directly check the transversal since representatives are not unique
        if transversal.orbit() != gens.orbit_of_action(record.base.clone(), &applicator) {
            return Err(StabchainError::InvalidComputedOrbit);
        }

        valid_transversal(&transversal).map_err(StabchainError::TransversalError)?;

        // Check that everything is stabilized correctly
        if let Some(stabilized) = previous {
            if gens.orbit_of_action(stabilized.clone(), &applicator).len() != 1 {
                return Err(StabchainError::BasePointNotStabilized(stabilized));
            }
        }

        previous = Some(record.base.clone());
    }

    Ok(())
}

#[cfg(test)]
macro_rules! stabchain_tests {
    ($strategy:expr, $short:ident) => {
        #[allow(deprecated)]
        mod $short {
            use crate::group::stabchain::builder::*;
            use crate::group::stabchain::{valid_stabchain, Stabchain};
            use crate::group::Group;
            use crate::perm::actions::*;
            use crate::perm::export::CyclePermutation;
            use crate::perm::DefaultPermutation;
            use num::BigUint;

            #[test]
            fn trivial_chain() {
                let g = Group::trivial();
                let chain = Stabchain::new_with_strategy(&g, $strategy(i(1)));
                valid_stabchain(&chain).unwrap();
                assert!(chain.is_empty());
            }

            #[test]
            fn klein4_chain() {
                let g = Group::klein_4();
                let chain = Stabchain::new_with_strategy(&g, $strategy(i(4)));
                valid_stabchain(&chain).unwrap();
            }

            #[test]
            fn cyclic_chain() {
                let g = Group::cyclic(100);
                let chain = Stabchain::new_with_strategy(&g, $strategy(i(100)));
                valid_stabchain(&chain).unwrap();
            }

            fn i(x: usize) -> BigUint {
                BigUint::from(x)
            }

            #[test]
            fn dihedral_chain() {
                let g = Group::dihedral_2n(3);
                let chain = Stabchain::new_with_strategy(&g, $strategy(i(6)));
                valid_stabchain(&chain).unwrap();
                assert_eq!(i(6), chain.order());
            }

            #[test]
            fn alternating_chain() {
                let g = Group::alternating(5);
                let chain = Stabchain::new_with_strategy(&g, $strategy(i(60)));
                valid_stabchain(&chain).unwrap();
                assert_eq!(i(60), chain.order());
            }

            #[test]
            fn symmetric_chain() {
                let g = Group::symmetric(10);
                let chain = Stabchain::new_with_strategy(&g, $strategy(i(3628800)));
                valid_stabchain(&chain).unwrap();
                assert_eq!(i(3628800), chain.order())
            }

            #[test]
            fn product_chain() {
                let g = Group::product(&Group::symmetric(15), &Group::symmetric(15));
                let chain = Stabchain::new_with_strategy(
                    &g,
                    $strategy("1710012252724199424000000".parse::<BigUint>().unwrap()),
                );
                valid_stabchain(&chain).unwrap();
            }

            #[test]
            fn single_non_trivial_layer() {
                use crate::perm::export::CyclePermutation;
                use crate::perm::DefaultPermutation;

                let g = Group::<DefaultPermutation>::new(&[CyclePermutation::single_cycle(&[
                    1, 2,
                ])
                .into()]);
                let chain = Stabchain::new_with_strategy(&g, $strategy(i(2)));
                valid_stabchain(&chain).unwrap();
            }

            /// This was a regularly failing group for the random implementations.
            #[test]
            fn failing_example_shallow() {
                let g: Group<DefaultPermutation> = Group::from_list(vec![
                    CyclePermutation::from_vec(vec![
                        vec![1, 2],
                        vec![5, 6],
                        vec![7, 15],
                        vec![8, 16],
                        vec![9, 10],
                        vec![13, 14],
                    ])
                    .into_perm(),
                    CyclePermutation::from_vec(vec![
                        vec![1, 4, 5, 16],
                        vec![2, 3, 6, 15],
                        vec![7, 10, 11, 14],
                        vec![8, 9, 12, 13],
                    ])
                    .into_perm(),
                    CyclePermutation::from_vec(vec![
                        vec![1, 5],
                        vec![2, 6],
                        vec![9, 13],
                        vec![10, 14],
                    ])
                    .into_perm(),
                ]);
                let chain = Stabchain::new_with_strategy(&g, $strategy(i(128)));
                valid_stabchain(&chain).unwrap();
                assert_eq!(i(128), chain.order())
            }

            /// This was a regularly failing group for the random implementations.
            #[test]
            fn failing_example_random() {
                let g: Group<DefaultPermutation> = Group::from_list(vec![
                    CyclePermutation::from_vec(vec![
                        vec![1, 15, 24, 36, 20, 30, 2, 14, 21, 35, 18, 29],
                        vec![3, 16, 22, 34, 17, 31, 4, 13, 23, 33, 19, 32],
                        vec![5, 9, 27, 8, 12, 26],
                        vec![6, 11, 28],
                        vec![7, 10, 25],
                    ])
                    .into_perm(),
                    CyclePermutation::from_vec(vec![
                        vec![1, 21, 13, 3, 22, 14, 2, 23, 15],
                        vec![4, 24, 16],
                        vec![5, 25, 17, 7, 28, 19, 6, 27, 18],
                        vec![8, 26, 20],
                        vec![9, 35, 31, 12, 36, 29, 11, 33, 32],
                        vec![10, 34, 30],
                    ])
                    .into_perm(),
                ]);
                let chain = Stabchain::new_with_strategy(&g, $strategy(i(10368)));
                valid_stabchain(&chain).unwrap();
                assert_eq!(i(10368), chain.order());
            }
        }
    };
}

#[cfg(test)]
macro_rules! known_base_tests {
    ($strategy:expr, $short:ident, $repeats:expr) => {
        #[allow(deprecated)]
        mod $short {
            use crate::group::stabchain::base_change_builder::*;
            use crate::group::stabchain::{base::Base, valid_stabchain};
            use crate::group::Group;
            use crate::perm::actions::*;
            use rand::seq::SliceRandom;

            #[test]
            fn trivial_chain() {
                let g = Group::trivial();
                let original_chain = g.stabchain();
                let base = original_chain.base();
                let mut rng = rand::thread_rng();
                for _ in 0..$repeats {
                    let mut new_base = Vec::from(base.base());
                    new_base.shuffle(&mut rng);
                    let new_chain = original_chain
                        .from_known_base_with_strategy(Base::new(new_base), $strategy);
                    valid_stabchain(&new_chain).unwrap();
                }
            }

            #[test]
            fn klein4_chain() {
                let g = Group::klein_4();
                let original_chain = g.stabchain();
                let base = original_chain.base();
                let mut rng = rand::thread_rng();
                for _ in 0..$repeats {
                    let mut new_base = Vec::from(base.base());
                    new_base.shuffle(&mut rng);
                    let new_chain = original_chain
                        .from_known_base_with_strategy(Base::new(new_base), $strategy);
                    valid_stabchain(&new_chain).unwrap();
                }
            }

            #[test]
            fn cyclic_chain() {
                let g = Group::cyclic(100);
                let original_chain = g.stabchain();
                let base = original_chain.base();
                let mut rng = rand::thread_rng();
                for _ in 0..$repeats {
                    let mut new_base = Vec::from(base.base());
                    new_base.shuffle(&mut rng);
                    let new_chain = original_chain
                        .from_known_base_with_strategy(Base::new(new_base), $strategy);
                    valid_stabchain(&new_chain).unwrap();
                }
            }

            #[test]
            fn dihedral_chain() {
                let g = Group::dihedral_2n(3);
                let original_chain = g.stabchain();
                let base = original_chain.base();
                let mut rng = rand::thread_rng();
                for _ in 0..$repeats {
                    let mut new_base = Vec::from(base.base());
                    new_base.shuffle(&mut rng);
                    let new_chain = original_chain
                        .from_known_base_with_strategy(Base::new(new_base), $strategy);
                    valid_stabchain(&new_chain).unwrap();
                }
            }

            #[test]
            fn alternating_chain() {
                let g = Group::alternating(5);
                let original_chain = g.stabchain();
                let base = original_chain.base();
                let mut rng = rand::thread_rng();
                for _ in 0..$repeats {
                    let mut new_base = Vec::from(base.base());
                    new_base.shuffle(&mut rng);
                    let new_chain = original_chain
                        .from_known_base_with_strategy(Base::new(new_base), $strategy);
                    valid_stabchain(&new_chain).unwrap();
                }
            }

            #[test]
            fn symmetric_chain() {
                let g = Group::symmetric(10);
                let original_chain = g.stabchain();
                let base = original_chain.base();
                let mut rng = rand::thread_rng();
                for _ in 0..$repeats {
                    let mut new_base = Vec::from(base.base());
                    new_base.shuffle(&mut rng);
                    let new_chain = original_chain
                        .from_known_base_with_strategy(Base::new(new_base), $strategy);
                    valid_stabchain(&new_chain).unwrap();
                }
            }

            #[test]
            fn product_chain() {
                let g = Group::product(&Group::symmetric(15), &Group::symmetric(15));
                let original_chain = g.stabchain();
                let base = original_chain.base();
                let mut rng = rand::thread_rng();
                for _ in 0..$repeats {
                    let mut new_base = Vec::from(base.base());
                    new_base.shuffle(&mut rng);
                    let new_chain = original_chain
                        .from_known_base_with_strategy(Base::new(new_base), $strategy);
                    valid_stabchain(&new_chain).unwrap();
                }
            }

            #[test]
            fn single_non_trivial_layer() {
                use crate::perm::export::CyclePermutation;
                use crate::perm::DefaultPermutation;

                let g = Group::<DefaultPermutation>::new(&[CyclePermutation::single_cycle(&[
                    1, 2,
                ])
                .into()]);
                let original_chain = g.stabchain();
                let base = original_chain.base();
                let mut rng = rand::thread_rng();
                for _ in 0..$repeats {
                    let mut new_base = Vec::from(base.base());
                    new_base.shuffle(&mut rng);
                    let new_chain = original_chain
                        .from_known_base_with_strategy(Base::new(new_base), $strategy);
                    valid_stabchain(&new_chain).unwrap();
                }
            }
        }
    };
}

#[cfg(test)]
mod tests {
    use super::valid_stabchain;
    use super::*;
    use crate::group::Group;
    use crate::perm::actions::SimpleApplication;
    use rand::{seq::SliceRandom, thread_rng};

    //Macro for testing the reconstruction of a group.
    macro_rules! reconstruction_test {
        ($group:expr, $name:ident) => {
            #[test]
            #[allow(deprecated)]
            fn $name() {
                let g = $group;
                let chain = g.stabchain();
                let base = chain.base();
                let mut sgs = chain.strong_generating_set();
                //To make sure we aren't relying on the ordering of the sgs.
                sgs.shuffle(&mut thread_rng());
                let reconstructed_chain = Stabchain::from_base_and_strong_gen_set(
                    base.base(),
                    &sgs[..],
                    SimpleApplication::default(),
                );
                assert_eq!(chain.len(), reconstructed_chain.len());
                assert_eq!(base.base(), reconstructed_chain.base().base());
                assert_eq!(chain.order(), reconstructed_chain.order());
                valid_stabchain(&reconstructed_chain).unwrap();
                for (record1, record2) in chain.iter().zip(reconstructed_chain.iter()) {
                    assert_eq!(record1.base(), record2.base());
                    //Check the orbits are the same
                    assert!(
                        record1.transversal.len() == record2.transversal.len()
                            && record1
                                .transversal
                                .keys()
                                .all(|point| record2.transversal.contains_key(point))
                    );
                }
            }
        };
    }

    reconstruction_test!(Group::symmetric(20), reconstruction_symmetric);
    reconstruction_test!(Group::trivial(), reconstruction_trivial);
    reconstruction_test!(Group::cyclic(30), reconstruction_cyclic);
    reconstruction_test!(Group::dihedral_2n(10), reconstruction_dihedral);

    stabchain_tests!(
        |_g| NaiveBuilderStrategy::new(
            SimpleApplication::default(),
            crate::group::stabchain::base::selectors::LmpSelector::default()
        ),
        naive
    );
    stabchain_tests!(
        |_g| IftBuilderStrategy::new(
            SimpleApplication::default(),
            crate::group::stabchain::base::selectors::LmpSelector::default()
        ),
        ift
    );
    stabchain_tests!(
        |_g| {
            use crate::group::stabchain::builder::random::parameters::RandomAlgoParameters;
            use rand::SeedableRng;
            RandomBuilderStrategyNaive::new_with_params(
                SimpleApplication::default(),
                crate::group::stabchain::base::selectors::FmpSelector::default(),
                RandomAlgoParameters::default()
                    .rng(rand_xorshift::XorShiftRng::from_seed([58; 16])),
            )
        },
        random
    );
    stabchain_tests!(
        |g| {
            use crate::group::stabchain::builder::random::parameters::RandomAlgoParameters;
            use rand::SeedableRng;
            RandomBuilderStrategyNaive::new_with_params(
                SimpleApplication::default(),
                crate::group::stabchain::base::selectors::FmpSelector::default(),
                RandomAlgoParameters::default()
                    .rng(rand_xorshift::XorShiftRng::from_seed([58; 16]))
                    .order(g),
            )
        },
        random_known_order
    );
    stabchain_tests!(
        |_g| {
            use crate::group::stabchain::builder::random::parameters::RandomAlgoParameters;
            use rand::SeedableRng;
            RandomBuilderStrategyNaive::new_with_params(
                SimpleApplication::default(),
                crate::group::stabchain::base::selectors::FmpSelector::default(),
                RandomAlgoParameters::default()
                    .rng(rand_xorshift::XorShiftRng::from_seed([33; 16]))
                    .quick_test(true),
            )
        },
        random_quick_test
    );
    stabchain_tests!(
        |_g| {
            use crate::group::stabchain::builder::random::parameters::RandomAlgoParameters;
            use rand::SeedableRng;
            RandomBuilderStrategyShallow::new_with_params(
                SimpleApplication::default(),
                crate::group::stabchain::base::selectors::FmpSelector::default(),
                RandomAlgoParameters::default()
                    .rng(rand_xorshift::XorShiftRng::from_seed([52; 16])),
            )
        },
        random_shallow
    );
    stabchain_tests!(
        |_g| {
            use crate::group::stabchain::builder::random::parameters::RandomAlgoParameters;
            use rand::SeedableRng;
            RandomBuilderStrategyShallow::new_with_params(
                SimpleApplication::default(),
                crate::group::stabchain::base::selectors::FmpSelector::default(),
                RandomAlgoParameters::default()
                    .rng(rand_xorshift::XorShiftRng::from_seed([41; 16]))
                    .quick_test(true),
            )
        },
        random_shallow_quick_test
    );

    known_base_tests!(
        RandomBaseChangeStrategy::new(SimpleApplication::default()),
        base_change_random,
        5
    );
}
