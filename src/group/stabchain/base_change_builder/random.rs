use crate::{
    group::{
        orbit::abstraction::FactoredTransversalResolver,
        random_perm::RandPerm,
        stabchain::{
            base::{selectors::BaseSelector, Base},
            Stabchain, StabchainRecord,
        },
        Group,
    },
    perm::{actions::SimpleApplication, Action, Permutation},
};
use num::BigUint;

// Helper struct, used to build the stabilizer chain
pub struct RandomBaseChangeBuilder<P, A = SimpleApplication<P>>
where
    A: Action<P, OrbitT = usize>,
{
    chain: Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>>,
    action: A,
    n: usize,
}

impl<P, A> RandomBaseChangeBuilder<P, A>
where
    P: Permutation,
    A: Action<P, OrbitT = usize>,
{
    pub(super) fn new(action: A) -> Self {
        RandomBaseChangeBuilder {
            chain: Vec::new(),
            action,
            n: 0,
        }
    }

    fn random_base_change(&mut self, chain: &Stabchain<P, FactoredTransversalResolver<A>, A>) {
        let target_order = chain.order();
        let sgs = Group::from_list(chain.strong_generating_set());
        self.n = sgs.symmetric_super_order() - 1;
        //TODO update for passing in an rng.
        let mut rand_perm = RandPerm::new(11, &sgs, 50, rand::thread_rng());
        //Loop till the new chain has the correct order.
        while self.current_chain_order() < target_order {
            let g = rand_perm.random_permutation();
        }
    }

    fn schrier_tree_stabilise(&mut self, g: P) -> (P, usize) {
        //Find the first moved point.
        if let Some(i) = (0..g.lmp().unwrap()).find(|x| self.action.apply(&g, *x) != *x) {
            (P::id(), 0)
        } else {
            (P::id(), self.n)
        }
    }

    /// Calculate the current order of the group this stabiliser chain stabilises.
    fn current_chain_order(&self) -> BigUint {
        //This is just the product of the transversal lengths.
        self.chain
            .iter()
            .map(|record| BigUint::from(record.transversal.len()))
            .product()
    }
}

impl<P, A> super::BaseChangeBuilder<P, FactoredTransversalResolver<A>, A>
    for RandomBaseChangeBuilder<P, A>
where
    P: Permutation,
    A: Action<P, OrbitT = usize>,
{
    fn set_base(
        &mut self,
        chain: &Stabchain<P, FactoredTransversalResolver<A>, A>,
        base: Base<P, A>,
    ) {
    }

    fn build(self) -> Stabchain<P, FactoredTransversalResolver<A>, A> {
        Stabchain { chain: self.chain }
    }
}
