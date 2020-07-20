use num::BigUint;
use serde::{Deserialize, Serialize};

use super::Group;
use crate::perm::DefaultPermutation;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DecoratedGroup<P = DefaultPermutation> {
    group: Group<P>,
    size: BigUint,
}

impl<P> DecoratedGroup<P> {
    pub fn new(group: Group<P>, size: BigUint) -> Self {
        Self { group, size }
    }

    pub fn map<F, T>(self, func: F) -> DecoratedGroup<T>
    where
        F: FnMut(P) -> T,
    {
        DecoratedGroup {
            group: self.group.map(func),
            size: self.size,
        }
    }

    pub fn group(&self) -> &Group<P> {
        &self.group
    }
}
