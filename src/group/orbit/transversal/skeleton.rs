use super::Transversal;
use crate::group::orbit::abstraction::TransversalResolver;
use crate::perm::DefaultPermutation;

use std::collections::HashMap;

/// Struct that avoids code duplication
#[derive(Debug)]
pub struct TransversalSkeleton<R> {
    base: usize,
    transversal: HashMap<usize, DefaultPermutation>,
    resolver: R,
}

impl<R> TransversalSkeleton<R> {
    pub(crate) fn from_raw(
        base: usize,
        transversal: HashMap<usize, DefaultPermutation>,
        resolver: R,
    ) -> Self {
        TransversalSkeleton {
            base,
            transversal,
            resolver,
        }
    }

    pub(crate) fn raw_elements(&self) -> impl Iterator<Item = (&usize, &DefaultPermutation)> {
        self.transversal.iter()
    }
}

impl<R> Transversal for TransversalSkeleton<R>
where
    R: TransversalResolver,
{
    /// Get the base of the transversal
    fn base(&self) -> usize {
        self.base
    }

    /// Get the orbit from the transversal
    fn orbit(&self) -> crate::group::orbit::Orbit {
        crate::group::orbit::Orbit::from_raw(self.base, self.transversal.keys().copied().collect())
    }

    /// Get the computed representative
    fn representative(&self, delta: usize) -> Option<DefaultPermutation> {
        self.resolver
            .representative(&self.transversal, self.base, delta)
    }

    /// Get the size of the orbit
    fn len(&self) -> usize {
        self.transversal.len()
    }

    /// Checks if element is in the orbit
    fn in_orbit(&self, delta: usize) -> bool {
        self.transversal.contains_key(&delta)
    }
}
