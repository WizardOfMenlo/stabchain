use std::{collections::HashMap, hash::Hash, ops::Index};

use num::BigUint;

use crate::{
    group::{
        orbit::abstraction::{FactoredTransversalResolver, TransversalResolver},
        Group,
    },
    perm::{actions::SimpleApplication, Action, Permutation},
    DetHashMap,
};

use super::{
    base::selectors::FmpSelector,
    builder::{random::parameters::RandomAlgoParameters, RandomBuilderStrategy},
    Stabchain, StabchainRecord,
};

// A stabiliser tree represents many different stabiliser chains for a group, represented as a tree.
pub struct StabTree<P, A = SimpleApplication<P>>
where
    A: Action<P, OrbitT = usize>,
    P: Permutation,
{
    // Indices of the root nodes in the tree.
    roots: DetHashMap<A::OrbitT, usize>,
    // All the nodes in the tree
    nodes: Vec<StabTreeRecord<P, FactoredTransversalResolver<A>, A>>,
    // Size of group, used for verification of new chains
    size: BigUint,
}

impl<P, A> StabTree<P, A>
where
    P: Permutation,
    A: Action<P, OrbitT = usize>,
{
    /// Create a new StabTree.
    ///
    /// This is done by creating a StabChain and then creating a StabTree from this chain.
    pub fn new(g: &Group<P>, size: num::BigUint) -> Self {
        // First construct a stabchain we will then use to create the tree
        let mut chain = g.stabchain_with_strategy(RandomBuilderStrategy::new_with_params(
            A::default(),
            FmpSelector::default(),
            RandomAlgoParameters::default()
                .order(size.clone())
                .quick_test(true),
        ));
        let chain_len = chain.len();
        // First get the roots
        let roots = [(chain.chain[0].base.clone(), 0)].iter().cloned().collect();
        // Keep track of the previous base point so it can be added as a parent
        let mut prev_point = None;
        // First create tree structure without children
        let mut nodes: Vec<_> = chain
            .chain
            // Take ownership of all records in the chain
            .drain(0..chain_len)
            // And zip with the indices to more easily add parents
            .zip(0..chain_len)
            .map(move |(record, i)| {
                let new_point = record.base.clone();
                let tree_record = match prev_point {
                    Some(prev_base_point) => {
                        // We know the parent is the previous point in the chain
                        StabTreeRecord::new_with_parent(record, prev_base_point, i - 1)
                    }
                    None => StabTreeRecord::new(record),
                };
                prev_point = Some(new_point);
                tree_record
            })
            .collect();
        // Then go and fill in the child nodes.
        for i in 0..chain_len - 1 {
            // Done first to allow for mutable borrow
            let child_base = nodes[i + 1].record.base.clone();
            // Now add the child node
            let node = nodes.get_mut(i).unwrap();
            node.add_child(child_base, i + 1);
        }
        StabTree { roots, nodes, size }
    }

    fn base<'a>(
        &'a self,
        base: &'a [A::OrbitT],
    ) -> impl Iterator<Item = &'a StabTreeRecord<P, FactoredTransversalResolver<A>, A>> {
        let mut prev_record: Option<usize> = None;
        base.iter()
            // Get indices of base points
            .map(move |x| {
                let index = match prev_record {
                    Some(index) => self.nodes[index].get_child(x),
                    None => self.roots.get(x).cloned(),
                };
                prev_record = index;
                index
            })
            // Keep going while we match points
            .take_while(|x| x.is_some())
            // Then map to the actual records
            .map(move |x| &self.nodes[x.unwrap()])
    }

    /// If a complete base is given, then this function returns a stabiliser chain with this base.
    /// This function returns None if the given base is not a base
    pub fn to_chain(
        &self,
        base: &[A::OrbitT],
    ) -> Option<Stabchain<P, FactoredTransversalResolver<A>, A>> {
        let chain = self
            .base(base)
            .map(|tree_record| tree_record.into())
            .collect();
        let stabchain = Stabchain { chain };
        // Return chain if this is a complete chain, otherwise return None
        // TODO perhaps instead construct this if we don't have it
        if stabchain.order() == self.size {
            Some(stabchain)
        } else {
            None
        }
    }
}

/// Wrapper around StabchainRecord to act as a node in the stabiliser tree.
///
/// Contains a map for the child and parents nodes of this node, that map from base points to indices in the vector containing the nodes.
#[derive(Debug, Clone)]
pub struct StabTreeRecord<P, V, A = SimpleApplication<P>>
where
    A: Action<P>,
    P: Permutation,
{
    record: StabchainRecord<P, V, A>,
    // Parents of this node
    parents: DetHashMap<A::OrbitT, usize>,
    // Children of this node
    children: DetHashMap<A::OrbitT, usize>,
}

impl<P, V, A> StabTreeRecord<P, V, A>
where
    A: Action<P>,
    P: Permutation,
{
    /// Create new record with a parent, with no children
    fn new_with_parent(
        record: StabchainRecord<P, V, A>,
        parent_base_point: A::OrbitT,
        parent_index: usize,
    ) -> Self {
        StabTreeRecord {
            record,
            children: DetHashMap::default(),
            parents: [(parent_base_point, parent_index)]
                .iter()
                .cloned()
                .collect(),
        }
    }

    /// Create new record with no parents or children
    fn new(record: StabchainRecord<P, V, A>) -> Self {
        StabTreeRecord {
            record,
            children: DetHashMap::default(),
            parents: DetHashMap::default(),
        }
    }

    /// If this is a root, i.e the top of a chain
    fn is_root(&self) -> bool {
        self.parents.is_empty()
    }

    /// If this node is a leaf, i.e the bottom of a chain
    fn is_leaf(&self) -> bool {
        self.children.is_empty()
    }

    /// Return the index of the child that has this base point, or None if there is no such parent
    fn get_child(&self, base_point: &A::OrbitT) -> Option<usize> {
        self.children.get(base_point).cloned()
    }

    /// Add a child to this node, returning true if it was not present
    fn add_child(&mut self, base_point: A::OrbitT, index: usize) -> bool {
        self.children.insert(base_point, index).is_none()
    }

    /// Return the index of the parent that has this base point, or None if there is no such parent
    fn get_parent(&self, base_point: &A::OrbitT) -> Option<usize> {
        self.parents.get(base_point).cloned()
    }

    /// Add a parent to this node, returning true if it was not present
    fn add_parent(&mut self, base_point: A::OrbitT, index: usize) -> bool {
        self.parents.insert(base_point, index).is_none()
    }
}

impl<P, V, A> From<&StabTreeRecord<P, V, A>> for StabchainRecord<P, V, A>
where
    A: Action<P>,
    P: Permutation,
    V: TransversalResolver<P, A>,
{
    fn from(tree_record: &StabTreeRecord<P, V, A>) -> Self {
        let record = &tree_record.record;
        StabchainRecord::new(
            record.base.clone(),
            record.gens.clone(),
            record.transversal.clone(),
        )
    }
}

#[cfg(test)]
mod tests {}
