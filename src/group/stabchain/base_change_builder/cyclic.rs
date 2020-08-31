use crate::group::orbit::transversal::shallow_transversal::shallow_transversal;
use crate::DetHashSet;
use crate::{
    group::{
        orbit::abstraction::{FactoredTransversalResolver, TransversalResolver},
        stabchain::{base::Base, Stabchain, StabchainRecord},
        Group,
    },
    perm::{actions::SimpleApplication, Action, Permutation},
};
use num::BigUint;

/// Helper struct, used to build the stabilizer chain
//TODO
#[allow(dead_code)]
pub struct CyclicBaseChangeBuilder<P, A = SimpleApplication<P>>
where
    A: Action<P>,
{
    chain: Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>>,
    action: A,
}

#[allow(dead_code)]
impl<P, A> CyclicBaseChangeBuilder<P, A>
where
    P: Permutation,
    A: Action<P>,
{
    pub(super) fn new(action: A) -> Self {
        CyclicBaseChangeBuilder {
            chain: Vec::new(),
            action,
        }
    }

    fn cyclic_base_change<V>(&mut self, chain: &Stabchain<P, V, A>, base: Base<P, A>)
    where
        V: TransversalResolver<P, A>,
    {
        //TODO make the rng global.
        //First copy the chain.
        self.chain = chain
            .iter()
            .map(|record| {
                let record_base = record.base.clone();
                let mut g = record.group().clone();
                let transversal = shallow_transversal(
                    &mut g,
                    record_base.clone(),
                    &self.action,
                    &mut rand::thread_rng(),
                );
                StabchainRecord::new(record_base, g, transversal.0)
            })
            .collect();
    }

    fn right_shift_base<V>(&mut self, chain: &Stabchain<P, V, A>, position: usize, shift: usize)
    where
        V: TransversalResolver<P, A>,
    {
        //Where to shift the point to.
        let new_pos = (position - shift) % chain.len();
        let record = self.chain.remove(position);
        
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
    for CyclicBaseChangeBuilder<P, A>
where
    P: Permutation,
    A: Action<P>,
{
    fn set_base<V>(&mut self, chain: &Stabchain<P, V, A>, base: Base<P, A>)
    where
        V: TransversalResolver<P, A>,
    {
        //Bases should simply be alternative orderings (or with new without duplicates unneccessary elements added)
        debug_assert!(
            base.base()
                .iter()
                .cloned()
                .collect::<DetHashSet<A::OrbitT>>()
                .len()
                == base.base().len()
                && chain.base().iter().all(|point| base.base().contains(point))
        );
        self.cyclic_base_change(chain, base);
    }

    fn build(self) -> Stabchain<P, FactoredTransversalResolver<A>, A> {
        Stabchain { chain: self.chain }
    }
}
