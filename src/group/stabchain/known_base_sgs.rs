use super::Stabchain;
use super::StabchainRecord;
use crate::group::orbit::abstraction::FactoredTransversalResolver;
use crate::group::orbit::transversal::factored_transversal::factored_transversal_complete_opt;
use crate::group::Group;
use crate::perm::*;
use crate::DetHashMap;
use std::collections::VecDeque;

pub fn from_base_and_strong_gen_set<P, A>(
    base: &[A::OrbitT],
    sgs: Vec<P>,
    strat: A,
) -> Stabchain<P, FactoredTransversalResolver<A>, A>
where
    P: Permutation,
    A: Action<P>,
{
    //Skeleton of the chain.
    let mut chain: Vec<StabchainRecord<P, FactoredTransversalResolver<A>, A>> = base
        .iter()
        .map(|point| StabchainRecord::new(point.clone(), Group::new(&[]), DetHashMap::default()))
        .collect();
    let mut to_add = VecDeque::from(sgs.clone());
    //Add the generators in the correct location.
    while !to_add.is_empty() {
        let p = to_add.pop_front().unwrap();
        for record in chain.iter_mut() {
            //If this permutation isn't fixed by this base point, then we insert it in the chain here.
            if strat.apply(&p, record.base.clone()) != record.base {
                record.gens.generators.push(p);
                break;
            }
        }
    }
    //Now fill in the transversal
    chain.iter_mut().for_each(|record| {
        record.transversal =
            factored_transversal_complete_opt(&record.group(), record.base.clone(), &strat)
    });
    Stabchain { chain }
}
