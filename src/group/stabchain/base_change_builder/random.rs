use crate::group::orbit::transversal::factored_transversal::representative_raw;
use crate::group::orbit::transversal::shallow_transversal::shallow_transversal;
use crate::{
    group::{
        orbit::abstraction::FactoredTransversalResolver,
        random_perm::RandPerm,
        stabchain::{base::Base, Stabchain, StabchainRecord},
        Group,
    },
    perm::{actions::SimpleApplication, Action, Permutation},
    DetHashMap, DetHashSet,
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

    fn random_base_change(
        &mut self,
        chain: &Stabchain<P, FactoredTransversalResolver<A>, A>,
        base: Base<P, A>,
    ) {
        let target_order = chain.order();
        let sgs = Group::from_list(chain.strong_generating_set());
        self.n = sgs.symmetric_super_order() - 1;
        // Create the trivial chain with all the new base points.
        self.chain = base
            .base()
            .iter()
            .cloned()
            .map(|base| StabchainRecord::new(base, Group::new(&[]), DetHashMap::default()))
            .collect::<Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>>>();
        //TODO update for passing in an rng.
        let mut rand_perm = RandPerm::new(11, &sgs, 50, rand::thread_rng());
        //Loop till the new chain has the correct order.
        while self.current_chain_order() < target_order {
            let g = rand_perm.random_permutation();
            let (g_dash, i) = self.schrier_tree_stabilise(g);
            //If the permutation doesn't sift through then add it as a new generator at level i.
            if i < self.n {
                self.update_schrier_tree(i, g_dash);
            }
        }
    }

    fn update_schrier_tree(&mut self, level: usize, g: P) {
        //TODO see which method is better for update.
        let record = &mut self.chain[level];
        record.gens.generators.push(g);
        record.transversal = shallow_transversal(
            &mut record.gens,
            record.base.clone(),
            &self.action,
            &mut rand::thread_rng(),
        )
        .0;
    }

    fn schrier_tree_stabilise(&mut self, g: P) -> (P, usize) {
        //Find the first moved point.
        if let Some(i) = (0..g.lmp().unwrap()).find(|x| self.action.apply(&g, *x) != *x) {
            let record = &self.chain[i];
            let pts = record
                .transversal
                .keys()
                .cloned()
                .collect::<DetHashSet<usize>>();
            let moved_pts = pts
                .clone()
                .into_iter()
                .map(|x| g.apply(x))
                .collect::<DetHashSet<usize>>();
            if pts == moved_pts {
                let h = representative_raw(
                    &record.transversal,
                    record.base.clone(),
                    g.apply(i),
                    &self.action,
                )
                .unwrap();
                debug_assert!(
                    g.multiply(&h.inv()).apply(record.base.clone()) == g.apply(record.base.clone())
                );
                self.schrier_tree_stabilise(g.multiply(&h.inv()))
            } else {
                (g, i)
            }
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
        //Bases should simply be alternative orderings
        debug_assert!(
            chain.base().base().len() == base.base().len()
                && chain.base().iter().all(|point| base.base().contains(point))
        );
        self.random_base_change(chain, base);
    }

    fn build(self) -> Stabchain<P, FactoredTransversalResolver<A>, A> {
        Stabchain { chain: self.chain }
    }
}
