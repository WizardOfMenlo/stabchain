use super::MovedPointSelector;
use super::Stabchain;
use crate::group::orbit::abstraction::{
    FactoredTransversalResolver, SimpleTransversalResolver, TransversalResolver,
};
use crate::group::Group;
use crate::perm::{Action, Permutation};

mod ift;
mod naive;

/// A builder is a datastructure to be used for constructing
/// a stabilizer chain. While the ultimate record is the same for any kind of
/// chain, there are some very real differences in performance that can occur
pub trait Builder<P, A, V>
where
    A: Action<P>,
{
    fn set_generators(&mut self, gens: &Group<P>);
    fn build(self) -> Stabchain<P, A, V>;
}

/// A strategy is a lightweight struct that allows to
/// (hopefully at compile time plz compiler) select which builder to use
pub trait BuilderStrategy<P> {
    type Action: Action<P>;
    type BuilderT: Builder<P, Self::Action, Self::Transversal>;

    // Note, typically Transversal = BuilderT::Transversal (need unstable)
    type Transversal: TransversalResolver<P, Self::Action>;

    fn make_builder(self) -> Self::BuilderT;
}

/// The strategy that is to be used by default
pub type DefaultStrategy<A, M> = NaiveBuilderStrategy<A, M>;

/// Schreir Sims with unfactored transversal. Faster than the
/// factored transversal version, yet more memory intensive
#[derive(Debug, Clone)]
pub struct NaiveBuilderStrategy<A, M> {
    selector: M,
    action: A,
}

impl<A, M> NaiveBuilderStrategy<A, M> {
    // TODO: Defaults
    pub fn new(action: A, selector: M) -> Self {
        NaiveBuilderStrategy { selector, action }
    }
}

impl<P, A, M> BuilderStrategy<P> for NaiveBuilderStrategy<A, M>
where
    P: Permutation,
    A: Action<P>,
    M: MovedPointSelector<P, A::OrbitT>,
{
    type Action = A;
    type Transversal = SimpleTransversalResolver;
    type BuilderT = naive::StabchainBuilderNaive<P, A, M>;

    fn make_builder(self) -> Self::BuilderT {
        naive::StabchainBuilderNaive::new(self.selector, self.action)
    }
}

/// Schreir Sims with factored transversal. Much more memory friendly,
/// yet much slower
#[derive(Debug, Clone)]
pub struct IFTBuilderStrategy<A, M> {
    selector: M,
    action: A,
}

impl<A, M> IFTBuilderStrategy<A, M> {
    pub fn new(action: A, selector: M) -> Self {
        IFTBuilderStrategy { action, selector }
    }
}

impl<P, A, M> BuilderStrategy<P> for IFTBuilderStrategy<A, M>
where
    P: Permutation,
    A: Action<P>,
    M: MovedPointSelector<P, A::OrbitT>,
{
    type Action = A;
    type Transversal = FactoredTransversalResolver<A>;
    type BuilderT = ift::StabchainBuilderIFT<P, A, M>;

    fn make_builder(self) -> Self::BuilderT {
        ift::StabchainBuilderIFT::new(self.selector, self.action)
    }
}
