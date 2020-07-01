use super::MovedPointSelector;
use super::Stabchain;
use crate::group::Group;

mod ift;
mod naive;

/// A builder is a datastructure to be used for constructing
/// a stabilizer chain. While the ultimate record is the same for any kind of
/// chain, there are some very real differences in performance that can occur
pub trait Builder {
    fn set_generators(&mut self, gens: &Group);
    fn build(self) -> Stabchain;
}

/// A strategy is a lightweight struct that allows to
/// (hopefully at compile time plz compiler) select which builder to use
pub trait Strategy<M: MovedPointSelector> {
    type BuilderT: Builder;
    fn make_builder(self) -> Self::BuilderT;
}

/// The strategy that is to be used by default
pub type DefaultStrategy<M> = IFTBuilderStrategy<M>;

/// Schreir Sims with unfactored transversal. Faster than the
/// factored transversal version, yet more memory intensive
pub struct NaiveBuilderStrategy<M>(M);

impl<M> NaiveBuilderStrategy<M> {
    pub fn new(m: M) -> Self {
        NaiveBuilderStrategy(m)
    }
}

impl<M> Strategy<M> for NaiveBuilderStrategy<M>
where
    M: MovedPointSelector,
{
    type BuilderT = naive::StabchainBuilderNaive<M>;

    fn make_builder(self) -> Self::BuilderT {
        naive::StabchainBuilderNaive::new(self.0)
    }
}

/// Schreir Sims with factored transversal. Much more memory friendly,
/// yet much slower
pub struct IFTBuilderStrategy<M>(M);

impl<M> IFTBuilderStrategy<M> {
    pub fn new(m: M) -> Self {
        IFTBuilderStrategy(m)
    }
}

impl<M> Strategy<M> for IFTBuilderStrategy<M>
where
    M: MovedPointSelector,
{
    type BuilderT = ift::StabchainBuilderIFT<M>;

    fn make_builder(self) -> Self::BuilderT {
        ift::StabchainBuilderIFT::new(self.0)
    }
}
