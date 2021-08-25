use std::cell::RefCell;

use crate::perm::{actions::SimpleApplication, Action, Permutation};

use super::StabchainRecord;

/// Wrapper around StabchainRecord to act as a node in the stabiliser tree.
#[derive(Debug, Clone)]
pub struct StabTreeRecord<P, V, A = SimpleApplication<P>>
where
    A: Action<P>,
    P: Permutation,
{
    record: StabchainRecord<P, V, A>,
    // Parents of this node
    parents: Vec<usize>,
    // Children of this node
    children: Vec<usize>,
}

impl<P, V, A> StabTreeRecord<P, V, A>
where
    A: Action<P>,
    P: Permutation,
{
    // If this is a root, i.e the top of a chain
    fn is_root(&self) -> bool {
        self.parents.is_empty()
    }

    // If this node is a leaf, i.e the bottom of a chain
    fn is_leaf(&self) -> bool {
        self.children.is_empty()
    }
}
