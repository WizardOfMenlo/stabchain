use crate::group::orbit::transversal::factored_transversal::representative_raw;
use crate::group::orbit::transversal::shallow_transversal::shallow_transversal;
use crate::{
    group::{
        orbit::abstraction::{FactoredTransversalResolver, TransversalResolver},
        random_perm::RandPerm,
        stabchain::{base::Base, Stabchain, StabchainRecord},
        Group,
    },
    perm::{actions::SimpleApplication, Action, Permutation},
    DetHashSet,
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

    fn random_base_change<V>(&mut self, chain: &Stabchain<P, V, A>, base: Base<P, A>)
    where
        V: TransversalResolver<P, A>,
    {
        let target_order = chain.order();
        let sgs = Group::from_list(chain.strong_generating_set());
        self.n = sgs.symmetric_super_order() - 1;
        // Create the trivial chain with all the new base points.
        self.chain = base
            .base()
            .iter()
            .cloned()
            .map(|base| StabchainRecord::trivial_record(base))
            .collect::<Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>>>();
        //TODO update for passing in an rng.
        let mut rand_perm = RandPerm::new(11, &sgs, 50, rand::thread_rng());
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

    fn update_schrier_tree(&mut self, level: usize, g: P) {
        debug_assert!(!g.is_id());
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

    fn residue_with_dropout(&self, p: P) -> (P, usize) {
        // Early exit
        if p.is_id() {
            return (p, self.chain.len());
        }

        let applicator = A::default();
        let mut i = 0;
        let mut g = p.clone();
        for record in self.chain.iter() {
            let base = record.base.clone();
            let application = applicator.apply(&g, base.clone());

            if !record.transversal.contains_key(&application) {
                break;
            }

            let representative = record
                .resolver()
                .representative(&record.transversal, base, application)
                .unwrap();
            g = g.divide(&representative);
            i += 1;
        }
        if g.is_id() {
            i = self.chain.len();
        }
        (g, i)
    }

    #[deprecated = "This doesn't work and is just another sifting method."]
    #[allow(dead_code)]
    fn schrier_tree_stabilise(&mut self, g: P) -> (P, usize) {
        //Find the first moved point.
        if let Some(i) = (0..g.lmp().unwrap()).find(|x| self.action.apply(&g, *x) != *x) {
            println!("{}", i);
            println!("{:?}", g);
            let record = &self.chain[i];
            let pts = record
                .transversal
                .keys()
                .cloned()
                .collect::<DetHashSet<usize>>();
            dbg!(&pts);
            let moved_pts = pts
                .clone()
                .into_iter()
                .map(|x| g.apply(x))
                .collect::<DetHashSet<usize>>();
            dbg!(&moved_pts);
            if pts == moved_pts {
                println!("Gone Through");
                let h = representative_raw(
                    &record.transversal,
                    record.base.clone(),
                    g.apply(record.base().clone()),
                    &self.action,
                )
                .unwrap()
                .inv();
                debug_assert!(h.apply(record.base.clone()) == g.apply(record.base.clone()));
                // debug_assert!(
                //     g.divide(&h).apply(record.base.clone()) == g.apply(record.base.clone())
                // );
                self.schrier_tree_stabilise(g.divide(&h))
            } else {
                println!("Returned");
                (g, i)
            }
        } else {
            println!("Got id");
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
