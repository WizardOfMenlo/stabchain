use crate::group::orbit::transversal::shallow_transversal::shallow_transversal;
use crate::{
    group::{
        orbit::abstraction::{FactoredTransversalResolver, TransversalResolver},
        random_perm::RandPerm,
        stabchain::{base::Base, Stabchain, StabchainRecord},
        Group,
    },
    perm::{actions::SimpleApplication, Action, Permutation},
};
use num::BigUint;

const MIN_SIZE: usize = 11;
const INITIAL_RUNS: usize = 50;

/// Helper struct, used to build the stabilizer chain
pub struct RandomBaseChangeBuilder<P, A = SimpleApplication<P>>
where
    A: Action<P>,
{
    chain: Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>>,
    action: A,
}

impl<P, A> RandomBaseChangeBuilder<P, A>
where
    P: Permutation,
    A: Action<P>,
{
    pub(super) fn new(action: A) -> Self {
        RandomBaseChangeBuilder {
            chain: Vec::new(),
            action,
        }
    }

    fn random_base_change<V>(&mut self, chain: &Stabchain<P, V, A>, base: Base<P, A>)
    where
        V: TransversalResolver<P, A>,
    {
        let target_order = chain.order();
        let sgs = Group::from_list(chain.strong_generating_set());
        // Create the trivial chain with all the new base points.
        self.chain = base
            .base()
            .iter()
            .cloned()
            .map(StabchainRecord::trivial_record)
            .collect::<Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>>>();
        //Random permutation generator.
        let mut rand_perm = RandPerm::new(MIN_SIZE, &sgs, INITIAL_RUNS, rand::thread_rng());
        //Loop till the new chain has the correct order.
        while self.current_chain_order() < target_order {
            let g = rand_perm.random_permutation();
            let (g_dash, i) = self.residue_with_dropout(g);
            //If the permutation doesn't sift through then add it as a new generator at level i.
            if i < base.base().len() {
                self.update_schrier_tree(i, g_dash);
            }
        }
        debug_assert_eq!(self.current_chain_order(), target_order);
    }

    /// Add a given generator at a specific level, and update the transversal.
    fn update_schrier_tree(&mut self, level: usize, g: P) {
        debug_assert!(!g.is_id());
        let record = &mut self.chain[level];
        record.gens.generators.push(g);
        //Update the new transversal.
        record.transversal = shallow_transversal(
            &mut record.gens,
            record.base.clone(),
            &self.action,
            &mut rand::thread_rng(),
        )
        .0;
    }

    /// Calculate the residue of an permutation and the level that it sifts through to.
    fn residue_with_dropout(&self, p: P) -> (P, usize) {
        // Early exit
        if p.is_id() {
            return (p, self.chain.len());
        }

        let applicator = A::default();
        let mut i = 0;
        let mut g = p;
        for record in self.chain.iter() {
            let base = record.base.clone();
            let application = applicator.apply(&g, base.clone());

            if !record.transversal.contains_key(&application) {
                break;
            }

            let representative = record
                .resolver()
                .representative(&record.transversal, base.clone(), application)
                .unwrap();
            g = g.divide(&representative);
            i += 1;
        }
        (g, i)
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
    A: Action<P>,
{
    fn set_base<V>(&mut self, chain: &Stabchain<P, V, A>, base: Base<P, A>)
    where
        V: TransversalResolver<P, A>,
    {
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
