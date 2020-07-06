use super::MovedPointSelector;
use super::Stabchain;
use crate::group::orbit::abstraction::{
    FactoredTransversalResolver, SimpleTransversalResolver, TransversalResolver,
};
use crate::group::Group;
use crate::perm::actions::SimpleApplication;
use crate::perm::Permutation;

mod ift;
mod naive;

/// A builder is a datastructure to be used for constructing
/// a stabilizer chain. While the ultimate record is the same for any kind of
/// chain, there are some very real differences in performance that can occur
pub trait Builder<P, V> {
    fn set_generators(&mut self, gens: &Group<P>);
    fn build(self) -> Stabchain<P, V>;
}

/// A strategy is a lightweight struct that allows to
/// (hopefully at compile time plz compiler) select which builder to use
pub trait Strategy<P> {
    type BuilderT: Builder<P, Self::Transversal>;

    // Note, typically Transversal = BuilderT::Transversal (need unstable)
    type Transversal: TransversalResolver<P>;
    fn make_builder(self) -> Self::BuilderT;
}

/// The strategy that is to be used by default
pub type DefaultStrategy<M> = NaiveBuilderStrategy<M>;

/// Schreir Sims with unfactored transversal. Faster than the
/// factored transversal version, yet more memory intensive
#[derive(Debug, Clone)]
pub struct NaiveBuilderStrategy<M>(M);

impl<M> NaiveBuilderStrategy<M> {
    pub fn new(m: M) -> Self {
        NaiveBuilderStrategy(m)
    }
}

impl<P, M> Strategy<P> for NaiveBuilderStrategy<M>
where
    P: Permutation,
    M: MovedPointSelector<P>,
{
    type Transversal = SimpleTransversalResolver;
    type BuilderT = naive::StabchainBuilderNaive<P, M>;

    fn make_builder(self) -> Self::BuilderT {
        naive::StabchainBuilderNaive::new(self.0)
    }
}

/// Schreir Sims with factored transversal. Much more memory friendly,
/// yet much slower
#[derive(Debug, Clone)]
pub struct IFTBuilderStrategy<M>(M);

impl<M> IFTBuilderStrategy<M> {
    pub fn new(m: M) -> Self {
        IFTBuilderStrategy(m)
    }
}

impl<P, M> Strategy<P> for IFTBuilderStrategy<M>
where
    P: Permutation,
    M: MovedPointSelector<P>,
{
    type Transversal = FactoredTransversalResolver<SimpleApplication<P>>;
    type BuilderT = ift::StabchainBuilderIFT<P, M>;

    fn make_builder(self) -> Self::BuilderT {
        ift::StabchainBuilderIFT::new(self.0)
    }
}
