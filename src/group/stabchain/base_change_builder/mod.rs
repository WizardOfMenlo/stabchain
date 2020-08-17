//! Traits for creating chains

use super::Stabchain;
use crate::group::orbit::abstraction::{
    FactoredTransversalResolver, SimpleTransversalResolver, TransversalResolver,
};
use crate::group::stabchain::base::selectors::BaseSelector;
use crate::group::Group;
use crate::perm::{Action, Permutation};

use rand::rngs::ThreadRng;
use rand::Rng;

/// A builder is a datastructure to be used for constructing
/// a stabilizer chain. While the ultimate record is the same for any kind of
/// chain, there are some very real differences in performance that can occur
pub trait Builder<P, V, A>
where
    A: Action<P>,
{
    /// Add the generators to be used for the construction
    fn set_generators(&mut self, gens: &Group<P>);

    /// Build the stabilizer chain
    fn build(self) -> Stabchain<P, V, A>;
}

/// A strategy is a lightweight struct that allows to
/// (hopefully at compile time plz compiler) select which builder to use
pub trait BuilderStrategy<P> {
    /// The action that this strategy uses
    type Action: Action<P>;

    /// The builder type associated to this strategy
    type BuilderT: Builder<P, Self::Transversal, Self::Action>;

    // Note, typically Transversal = BuilderT::Transversal (need unstable)
    /// The transversal to be used in this strategy
    type Transversal: TransversalResolver<P, Self::Action>;

    /// Create the builder from this strategy
    fn make_builder(self) -> Self::BuilderT;
}

///// The strategy that is to be used by default
// pub type DefaultStrategy<A, S> = NaiveBuilderStrategy<A, S>;
