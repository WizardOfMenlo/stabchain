use num::BigUint;
use serde::{Deserialize, Serialize};

use super::Group;
use crate::perm::{export::ClassicalPermutation, DefaultPermutation, Permutation};

/// A simple struct that keeps track of additional information of a group, such
/// as the order. This is very useful for testing stabilizer chains
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DecoratedGroup<P = DefaultPermutation> {
    group: Group<P>,
    size: BigUint,
}

impl<P> DecoratedGroup<P> {
    /// Create a new decorated group (note that this does not checks whatsover)
    pub fn new(group: Group<P>, size: BigUint) -> Self {
        Self { group, size }
    }

    /// Switch the underlying group permutation type
    pub fn map<F, T>(self, func: F) -> DecoratedGroup<T>
    where
        F: FnMut(P) -> T,
    {
        DecoratedGroup {
            group: self.group.map(func),
            size: self.size,
        }
    }

    /// Get the associated group
    pub fn group(&self) -> &Group<P> {
        &self.group
    }

    /// Get the order of the group
    pub fn order(&self) -> &BigUint {
        &self.size
    }
}

impl<P> From<Group<P>> for DecoratedGroup<P>
where
    P: Permutation,
{
    fn from(g: Group<P>) -> Self {
        let order = g.stabchain().order();
        DecoratedGroup::new(g, order)
    }
}

#[derive(Deserialize)]
pub struct GAPGroup {
    pub generators: Vec<Vec<usize>>,
    pub size: serde_json::Number,
}

impl GAPGroup {
    pub fn to_group(self) -> Group {
        self.generators
            .into_iter()
            .map(|images| ClassicalPermutation::from_slice(&images[..]).into())
            .collect()
    }

    pub fn to_decorated_group(self) -> DecoratedGroup {
        let size = self.size.clone();
        DecoratedGroup::new(
            self.to_group(),
            size.to_string().parse::<BigUint>().unwrap(),
        )
    }
}
