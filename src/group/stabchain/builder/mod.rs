use super::MovedPointSelector;
use super::Stabchain;
use crate::group::orbit::abstraction::{
    FactoredTransversalResolver, SimpleTransversalResolver, TransversalResolver,
};
use crate::group::Group;

mod ift;
mod naive;

/// A builder is a datastructure to be used for constructing
/// a stabilizer chain. While the ultimate record is the same for any kind of
/// chain, there are some very real differences in performance that can occur
pub trait Builder<V> {
    fn set_generators(&mut self, gens: &Group);
    fn build(self) -> Stabchain<V>;
}

/// A strategy is a lightweight struct that allows to
/// (hopefully at compile time plz compiler) select which builder to use
pub trait Strategy {
    type BuilderT: Builder<Self::Transversal>;

    // Note, typically Transversal = BuilderT::Transversal (need unstable)
    type Transversal: TransversalResolver;
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

impl<M> Strategy for NaiveBuilderStrategy<M>
where
    M: MovedPointSelector,
{
    type Transversal = SimpleTransversalResolver;
    type BuilderT = naive::StabchainBuilderNaive<M>;

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

impl<M> Strategy for IFTBuilderStrategy<M>
where
    M: MovedPointSelector,
{
    type Transversal = FactoredTransversalResolver;
    type BuilderT = ift::StabchainBuilderIFT<M>;

    fn make_builder(self) -> Self::BuilderT {
        ift::StabchainBuilderIFT::new(self.0)
    }
}
