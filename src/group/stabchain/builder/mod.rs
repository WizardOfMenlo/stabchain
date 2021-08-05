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

use std::fmt::Debug;

mod ift;
mod naive;
pub mod random;

/// A builder is a datastructure to be used for constructing
/// a stabilizer chain. While the ultimate record is the same for any kind of
/// chain, there are some very real differences in performance that can occur
pub trait Builder<P, V, A>: Debug
where
    A: Action<P>,
    P: Permutation,
{
    /// Add the generators to be used for the construction
    fn set_generators(&mut self, gens: &Group<P>);

    /// Build the stabilizer chain
    fn build(self) -> Stabchain<P, V, A>;
}

/// A strategy is a lightweight struct that allows to
/// (hopefully at compile time plz compiler) select which builder to use
pub trait BuilderStrategy<P>: Debug
where
    P: Permutation,
{
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
    S: BaseSelector<P, A::OrbitT>,
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
pub struct IftBuilderStrategy<A, S> {
    selector: S,
    action: A,
}

impl<A, S> IftBuilderStrategy<A, S> {
    /// Create the strategy
    pub fn new(action: A, selector: S) -> Self {
        IftBuilderStrategy { selector, action }
    }
}

impl<P, S, A> BuilderStrategy<P> for IftBuilderStrategy<A, S>
where
    P: Permutation,
    A: Action<P>,
    S: BaseSelector<P, A::OrbitT>,
{
    type Action = A;
    type Transversal = FactoredTransversalResolver<A>;
    type BuilderT = ift::StabchainBuilderIft<P, S, A>;

    fn make_builder(self) -> Self::BuilderT {
        ift::StabchainBuilderIft::new(self.selector, self.action)
    }
}

pub type RandomBuilderStrategy<A, S, R> = RandomBuilderStrategyShallow<A, S, R>;

use random::parameters::RandomAlgoParameters;

/// Randomised Stabiliser chain construction.
/// This should be faster than the naive and IFT methods, but is not deterministic.
/// This should not be used, as the shallow version is faster and more reliable.
#[derive(Debug, Clone)]
#[deprecated(
    since = "0.1.1",
    note = "please use `RandomBuilderStrategyShallow` instead"
)]
pub struct RandomBuilderStrategyNaive<A, S, R = ThreadRng> {
    selector: S,
    action: A,
    params: RandomAlgoParameters<R>,
}

#[allow(deprecated)]
impl<A, S> RandomBuilderStrategyNaive<A, S> {
    pub fn new(action: A, selector: S) -> Self {
        RandomBuilderStrategyNaive {
            selector,
            action,
            params: random::parameters::RandomAlgoParameters::default(),
        }
    }
}

#[allow(deprecated)]
impl<A, S, R> RandomBuilderStrategyNaive<A, S, R> {
    pub fn new_with_params(action: A, selector: S, params: RandomAlgoParameters<R>) -> Self {
        RandomBuilderStrategyNaive {
            selector,
            action,
            params,
        }
    }
}

#[allow(deprecated)]
impl<P, S, A, R> BuilderStrategy<P> for RandomBuilderStrategyNaive<A, S, R>
where
    P: Permutation,
    A: Action<P, OrbitT = usize>,
    S: BaseSelector<P, A::OrbitT>,
    R: Rng + Debug,
{
    type Action = A;
    type Transversal = FactoredTransversalResolver<A>;
    type BuilderT = random::random_ift::StabchainBuilderRandom<P, S, A, R>;

    fn make_builder(self) -> Self::BuilderT {
        random::random_ift::StabchainBuilderRandom::new(self.selector, self.action, self.params)
    }
}

/// Randomised Stabiliser chain construction, optimised by using shallow trees.
/// This should be faster than the naive and IFT methods, but is not deterministic.
#[derive(Debug, Clone)]
pub struct RandomBuilderStrategyShallow<A, S, R = ThreadRng> {
    selector: S,
    action: A,
    params: RandomAlgoParameters<R>,
}

impl<A, S> RandomBuilderStrategyShallow<A, S> {
    pub fn new(action: A, selector: S) -> Self {
        RandomBuilderStrategyShallow {
            action,
            selector,
            params: RandomAlgoParameters::default(),
        }
    }
}

impl<A, S, R> RandomBuilderStrategyShallow<A, S, R> {
    pub fn new_with_params(action: A, selector: S, params: RandomAlgoParameters<R>) -> Self {
        RandomBuilderStrategyShallow {
            selector,
            action,
            params,
        }
    }
}

impl<P, S, A, R> BuilderStrategy<P> for RandomBuilderStrategyShallow<A, S, R>
where
    P: Permutation,
    A: Action<P, OrbitT = usize>,
    S: BaseSelector<P, A::OrbitT>,
    R: Rng + Clone + Debug,
{
    type Action = A;
    type Transversal = FactoredTransversalResolver<A>;
    type BuilderT = random::random_strees::StabchainBuilderRandomSTrees<P, S, A, R>;

    fn make_builder(self) -> Self::BuilderT {
        random::random_strees::StabchainBuilderRandomSTrees::new(
            self.selector,
            self.action,
            self.params,
        )
    }
}
