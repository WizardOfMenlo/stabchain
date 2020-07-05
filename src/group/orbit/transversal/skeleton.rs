use super::Transversal;
use crate::group::orbit::abstraction::TransversalResolver;

use std::collections::HashMap;

/// Struct that avoids code duplication
#[derive(Debug)]
pub struct TransversalSkeleton<P, R, OrbitT> {
    base: OrbitT,
    transversal: HashMap<OrbitT, P>,
    resolver: R,
}

impl<P, R, OrbitT> TransversalSkeleton<P, R, OrbitT> {
    pub(crate) fn from_raw(base: OrbitT, transversal: HashMap<OrbitT, P>, resolver: R) -> Self {
        TransversalSkeleton {
            base,
            transversal,
            resolver,
        }
    }

    pub(crate) fn raw_elements(&self) -> impl Iterator<Item = (&OrbitT, &P)> {
        self.transversal.iter()
    }
}

impl<P, R, OrbitT> Transversal<P, OrbitT> for TransversalSkeleton<P, R, OrbitT>
where
    OrbitT: std::hash::Hash + Eq + Clone,
    R: TransversalResolver<P, OrbitT>,
{
    /// Get the base of the transversal
    fn base(&self) -> OrbitT {
        self.base.clone()
    }

    /// Get the orbit from the transversal
    fn orbit(&self) -> crate::group::orbit::Orbit<OrbitT> {
        crate::group::orbit::Orbit::from_raw(
            self.base.clone(),
            self.transversal.keys().cloned().collect(),
        )
    }

    /// Get the computed representative
    fn representative(&self, delta: OrbitT) -> Option<P> {
        self.resolver
            .representative(&self.transversal, self.base.clone(), delta)
    }

    /// Get the size of the orbit
    fn len(&self) -> usize {
        self.transversal.len()
    }

    /// Checks if element is in the orbit
    fn in_orbit(&self, delta: OrbitT) -> bool {
        self.transversal.contains_key(&delta)
    }
}
