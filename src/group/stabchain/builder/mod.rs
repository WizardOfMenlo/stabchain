use super::MovedPointSelector;
use super::Stabchain;
use crate::perm::Permutation;

mod ift;
mod naive;

pub trait Builder {
    fn extend(&mut self, p: Permutation);

    fn build(self) -> Stabchain;
}

pub trait BuilderStrategy<M: MovedPointSelector> {
    type BuilderT: Builder;

    fn make_builder(&self, selector: M) -> Self::BuilderT;
}

#[derive(Default)]
pub struct NaiveBuilderStrategy<M>(std::marker::PhantomData<M>);

impl<M> BuilderStrategy<M> for NaiveBuilderStrategy<M>
where
    M: MovedPointSelector,
{
    type BuilderT = naive::StabchainBuilderNaive<M>;

    fn make_builder(&self, selector: M) -> Self::BuilderT {
        naive::StabchainBuilderNaive::new(selector)
    }
}

#[derive(Default)]
pub struct IFTBuilderStrategy<M>(std::marker::PhantomData<M>);

impl<M> BuilderStrategy<M> for IFTBuilderStrategy<M>
where
    M: MovedPointSelector,
{
    type BuilderT = ift::StabchainBuilderIFT<M>;

    fn make_builder(&self, selector: M) -> Self::BuilderT {
        ift::StabchainBuilderIFT::new(selector)
    }
}
