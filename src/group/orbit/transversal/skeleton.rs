//! Utility to avoid code duplication in the context of transversals

use super::Transversal;
use crate::group::orbit::abstraction::TransversalResolver;
use crate::perm::Action;

use std::collections::HashMap;

/// Struct that avoids code duplication
#[derive(Debug)]
pub struct TransversalSkeleton<P, R, A>
where
    A: Action<P>,
{
    base: A::OrbitT,
    transversal: HashMap<A::OrbitT, P>,
    resolver: R,
    action: std::marker::PhantomData<A>,
}

impl<P, R, A> TransversalSkeleton<P, R, A>
where
    A: Action<P>,
{
    pub(crate) fn from_raw(
        base: A::OrbitT,
        transversal: HashMap<A::OrbitT, P>,
        resolver: R,
    ) -> Self {
        TransversalSkeleton {
            base,
            transversal,
            resolver,
            action: Default::default(),
        }
    }

    pub(crate) fn raw_elements(&self) -> impl Iterator<Item = (&A::OrbitT, &P)> {
        self.transversal.iter()
    }
}

impl<P, R, A> Transversal<P, A> for TransversalSkeleton<P, R, A>
where
    R: TransversalResolver<P, A>,
    A: Action<P>,
{
    /// Get the base of the transversal
    fn base(&self) -> A::OrbitT {
        self.base.clone()
    }

    /// Get the orbit from the transversal
    fn orbit(&self) -> crate::group::orbit::Orbit<A::OrbitT> {
        crate::group::orbit::Orbit::from_raw(
            self.base.clone(),
            self.transversal.keys().cloned().collect(),
        )
    }

    /// Get the computed representative
    fn representative(&self, delta: A::OrbitT) -> Option<P> {
        self.resolver
            .representative(&self.transversal, self.base.clone(), delta)
    }

    /// Get the size of the orbit
    fn len(&self) -> usize {
        self.transversal.len()
    }

    /// Checks if element is in the orbit
    fn in_orbit(&self, delta: A::OrbitT) -> bool {
        self.transversal.contains_key(&delta)
    }
}
