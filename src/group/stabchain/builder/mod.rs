//! Traits for creating chains

use super::MovedPointSelector;
use super::Stabchain;
use crate::group::orbit::abstraction::{
    FactoredTransversalResolver, SimpleTransversalResolver, TransversalResolver,
};
use crate::group::Group;
use crate::perm::{Action, Permutation};

mod ift;
mod naive;
mod random;

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

/// The strategy that is to be used by default
pub type DefaultStrategy<A, S> = NaiveBuilderStrategy<A, S>;

/// Schreir Sims with unfactored transversal. Faster than the
/// factored transversal version, yet more memory intensive
#[derive(Debug, Clone)]
pub struct NaiveBuilderStrategy<A, S> {
    selector: S,
    action: A,
}

impl<A, S> NaiveBuilderStrategy<A, S> {
    /// Create the strategy
    pub fn new(action: A, selector: S) -> Self {
        NaiveBuilderStrategy { selector, action }
    }
}

impl<P, S, A> BuilderStrategy<P> for NaiveBuilderStrategy<A, S>
where
    P: Permutation,
    A: Action<P>,
    S: MovedPointSelector<P, A::OrbitT>,
{
    type Action = A;
    type Transversal = SimpleTransversalResolver;
    type BuilderT = naive::StabchainBuilderNaive<P, S, A>;

    fn make_builder(self) -> Self::BuilderT {
        naive::StabchainBuilderNaive::new(self.selector, self.action)
    }
}

/// Schreir Sims with factored transversal. Much more memory friendly,
/// yet much slower
#[derive(Debug, Clone)]
pub struct IFTBuilderStrategy<A, S> {
    selector: S,
    action: A,
}

impl<A, S> IFTBuilderStrategy<A, S> {
    /// Create the strategy
    pub fn new(action: A, selector: S) -> Self {
        IFTBuilderStrategy { action, selector }
    }
}

impl<P, S, A> BuilderStrategy<P> for IFTBuilderStrategy<A, S>
where
    P: Permutation,
    A: Action<P>,
    S: MovedPointSelector<P, A::OrbitT>,
{
    type Action = A;
    type Transversal = FactoredTransversalResolver<A>;
    type BuilderT = ift::StabchainBuilderIFT<P, S, A>;

    fn make_builder(self) -> Self::BuilderT {
        ift::StabchainBuilderIFT::new(self.selector, self.action)
    }
}

/// Randomised Stabiliser chain construction.
/// This should be faster than the naive and IFT methods, but is not deterministic.
#[derive(Debug, Clone)]
pub struct RandomBuilderStrategy<A, S> {
    selector: S,
    action: A,
}

impl<A, S> RandomBuilderStrategy<A, S> {
    pub fn new(action: A, selector: S) -> Self {
        RandomBuilderStrategy { action, selector }
    }
}

impl<P, S, A> BuilderStrategy<P> for RandomBuilderStrategy<A, S>
where
    P: Permutation,
    A: Action<P, OrbitT = usize>,
    S: MovedPointSelector<P, A::OrbitT>,
{
    type Action = A;
    type Transversal = FactoredTransversalResolver<A>;
    type BuilderT = random::StabchainBuilderRandom<P, S, A>;

    fn make_builder(self) -> Self::BuilderT {
        random::StabchainBuilderRandom::new(self.selector, self.action)
    }
}
