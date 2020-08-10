//! Mod which contains the definition of a stabilizer chain, complete with all the ways of creating such a chain

pub mod base;
pub mod builder;
pub mod element_testing;

use crate::group::orbit::abstraction::TransversalResolver;
use crate::group::Group;
use crate::perm::actions::SimpleApplication;
use crate::perm::*;
use base::Base;
use builder::{Builder, BuilderStrategy};

use crate::DetHashMap;

use num::BigUint;

/// A stabilizer chain. Each level of the chain represents a subgroup of the
/// preceding group, which usually fixes a single point.
pub struct Stabchain<P, V, A = SimpleApplication<P>>
where
    A: Action<P>,
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
    pub fn new_with_strategy<S, B: Builder<P, V, A>>(g: &Group<P>, build_strategy: S) -> Self
    where
        S: BuilderStrategy<P, Action = A, Transversal = V, BuilderT = B>,
    {
        let mut builder = build_strategy.make_builder();
        builder.set_generators(g);
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
        //The order is the product of the orbit lengths.
        self.get_chain_at_layer(layer)
            .map(|record| BigUint::from(record.transversal.len()))
            .product()
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
}

impl<P, V, A> IntoIterator for Stabchain<P, V, A>
where
    A: Action<P>,
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
{
    base: A::OrbitT,
    gens: Group<P>,
    transversal: DetHashMap<A::OrbitT, P>,
    resolver: V,
}

impl<P, V, A> StabchainRecord<P, V, A>
where
    A: Action<P>,
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
        }
    }

    /// Get the resolver of the record
    pub(crate) fn resolver(&self) -> &V {
        &self.resolver
    }

    /// Get the resolver of the record
    pub fn transversal(&self) -> V::AssociatedTransversal {
        self.resolver
            .into_transversal(self.transversal.clone(), self.base.clone())
    }
}

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

use crate::group::orbit::transversal::TransversalError;

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
        mod $short {
            use crate::group::stabchain::builder::*;
            use crate::group::stabchain::{valid_stabchain, Stabchain};
            use crate::group::Group;
            use crate::perm::actions::*;
            use num::BigUint;

            #[test]
            fn trivial_chain() {
                let g = Group::trivial();
                let chain = Stabchain::new_with_strategy(&g, $strategy);
                valid_stabchain(&chain).unwrap();
                assert!(chain.is_empty());
            }

            #[test]
            fn klein4_chain() {
                let g = Group::klein_4();
                let chain = Stabchain::new_with_strategy(&g, $strategy);
                valid_stabchain(&chain).unwrap();
            }

            #[test]
            fn cyclic_chain() {
                let g = Group::cyclic(100);
                let chain = Stabchain::new_with_strategy(&g, $strategy);
                valid_stabchain(&chain).unwrap();
            }

            fn i(x: usize) -> BigUint {
                BigUint::from(x)
            }

            #[test]
            fn dihedral_chain() {
                let g = Group::dihedral_2n(3);
                let chain = Stabchain::new_with_strategy(&g, $strategy);
                valid_stabchain(&chain).unwrap();
                assert_eq!(i(6), chain.order());
            }

            #[test]
            fn alternating_chain() {
                let g = Group::alternating(5);
                let chain = Stabchain::new_with_strategy(&g, $strategy);
                valid_stabchain(&chain).unwrap();
                assert_eq!(i(60), chain.order());
            }

            #[test]
            fn symmetric_chain() {
                let g = Group::symmetric(10);
                let chain = Stabchain::new_with_strategy(&g, $strategy);
                valid_stabchain(&chain).unwrap();
                assert_eq!(i(3628800), chain.order())
            }

            #[test]
            fn product_chain() {
                let g = Group::product(&Group::symmetric(15), &Group::symmetric(15));
                let chain = Stabchain::new_with_strategy(&g, $strategy);
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
                let chain = Stabchain::new_with_strategy(&g, $strategy);
                valid_stabchain(&chain).unwrap();
            }
        }
    };
}

#[cfg(test)]
mod tests {

    stabchain_tests!(
        NaiveBuilderStrategy::new(
            SimpleApplication::default(),
            crate::group::stabchain::base::selectors::LmpSelector::default()
        ),
        naive
    );
    stabchain_tests!(
        IFTBuilderStrategy::new(
            SimpleApplication::default(),
            crate::group::stabchain::base::selectors::LmpSelector::default()
        ),
        ift
    );
    stabchain_tests!(
        {
            use crate::group::stabchain::builder::random::parameters::RandomAlgoParameters;
            use rand::SeedableRng;
            RandomBuilderStrategy::new_with_params(
                SimpleApplication::default(),
                crate::group::stabchain::base::selectors::FmpSelector::default(),
                RandomAlgoParameters::default()
                    .rng(rand_xorshift::XorShiftRng::from_seed([43; 16])),
            )
        },
        random
    );
}
