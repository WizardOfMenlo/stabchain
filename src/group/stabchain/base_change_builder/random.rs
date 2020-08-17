use crate::{
    group::{
        orbit::abstraction::FactoredTransversalResolver,
        stabchain::{
            base::{selectors::BaseSelector, Base},
            Stabchain, StabchainRecord,
        },
    },
    perm::{actions::SimpleApplication, Action, Permutation},
};

// Helper struct, used to build the stabilizer chain
pub struct RandomBaseChangeBuilder<P, A = SimpleApplication<P>>
where
    A: Action<P>,
{
    current_pos: usize,
    chain: Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>>,
    action: A,
}

impl<P, A> RandomBaseChangeBuilder<P, A>
where
    A: Action<P>,
{
    pub(super) fn new(action: A) -> Self {
        RandomBaseChangeBuilder {
            current_pos: 0,
            chain: Vec::new(),
            action,
        }
    }

    fn bottom_of_the_chain(&self) -> bool {
        self.current_pos == self.chain.len()
    }

    fn current_chain(
        &self,
    ) -> impl Iterator<Item = &StabchainRecord<P, FactoredTransversalResolver<A>, A>> {
        self.chain.iter().skip(self.current_pos)
    }
}

impl<P, A> super::BaseChangeBuilder<P, FactoredTransversalResolver<A>, A>
    for RandomBaseChangeBuilder<P, A>
where
    P: Permutation,
    A: Action<P>,
{
    fn set_base(
        &mut self,
        chain: Stabchain<P, FactoredTransversalResolver<A>, A>,
        base: Base<P, A>,
    ) {
    }

    fn build(self) -> Stabchain<P, FactoredTransversalResolver<A>, A> {
        Stabchain { chain: self.chain }
    }
}
