//! Traits for creating chains

use super::Stabchain;
use crate::group::orbit::abstraction::{FactoredTransversalResolver, TransversalResolver};
use crate::group::stabchain::base::Base;
use crate::perm::{Action, Permutation};

mod random;

/// Trait to represent a builder from a known base.
pub trait BaseChangeBuilder<P, V, A>
where
    A: Action<P>,
{
    /// The group and base to be used for construction.
    // There is an alternative transversal type, as it doesn't need to create chains that use the same transversal type.
    fn set_base<W>(&mut self, chain: &Stabchain<P, W, A>, base: Base<P, A>)
    where
        W: TransversalResolver<P, A>;

    /// Build the stabilizer chain
    fn build(self) -> Stabchain<P, V, A>;
}

/// A strategy is a lightweight struct that allows to
/// (hopefully at compile time plz compiler) select which builder to use
pub trait BaseChangeBuilderStrategy<P> {
    /// The action that this strategy uses
    type Action: Action<P>;

    /// The builder type associated to this strategy
    type BuilderT: BaseChangeBuilder<P, Self::Transversal, Self::Action>;

    // Note, typically Transversal = BuilderT::Transversal (need unstable)
    /// The transversal to be used in this strategy
    type Transversal: TransversalResolver<P, Self::Action>;

    /// Create the builder from this strategy
    fn make_builder(self) -> Self::BuilderT;
}

///// The strategy that is to be used by default
pub type DefaultStrategy<A> = RandomBaseChangeStrategy<A>;

/// Builder strategy for building a stabiliser chain from a reordering of a known stabiliser base.
#[derive(Debug, Clone)]
pub struct RandomBaseChangeStrategy<A> {
    action: A,
}

impl<A> RandomBaseChangeStrategy<A> {
    /// Create the strategy
    pub fn new(action: A) -> Self {
        RandomBaseChangeStrategy { action }
    }
}

impl<P, A> BaseChangeBuilderStrategy<P> for RandomBaseChangeStrategy<A>
where
    P: Permutation,
    A: Action<P>,
{
    type Action = A;
    type Transversal = FactoredTransversalResolver<A>;
    type BuilderT = random::RandomBaseChangeBuilder<P, A>;

    fn make_builder(self) -> Self::BuilderT {
        random::RandomBaseChangeBuilder::new(self.action)
    }
}
