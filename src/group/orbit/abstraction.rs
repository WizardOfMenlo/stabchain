use crate::perm::actions::SimpleApplication;
use crate::perm::{Action, Permutation};
use std::collections::HashMap;

/// A trait encapsulating the different ways in which a transversal can access a representative
pub trait TransversalResolver<P, A = SimpleApplication<P>>: Default
where
    A: Action<P>,
{
    type AssociatedTransversal: super::transversal::Transversal<P, A>;

    /// Compute the representative
    fn representative(
        &self,
        map: &HashMap<A::OrbitT, P>,
        base: A::OrbitT,
        point: A::OrbitT,
    ) -> Option<P>;

    /// Convert into a full blown transversal
    fn into_transversal(
        &self,
        map: HashMap<A::OrbitT, P>,
        base: A::OrbitT,
    ) -> Self::AssociatedTransversal;
}

/// A dispatcher which does simple lookups
#[derive(Debug, Clone, Copy, Default)]
pub struct SimpleTransversalResolver;

impl<P, A> TransversalResolver<P, A> for SimpleTransversalResolver
where
    P: Clone,
    A: Action<P>,
{
    type AssociatedTransversal = super::transversal::SimpleTransversal<P, A>;

    fn representative(
        &self,
        map: &HashMap<A::OrbitT, P>,
        _: A::OrbitT,
        point: A::OrbitT,
    ) -> Option<P> {
        map.get(&point).cloned()
    }

    fn into_transversal(
        &self,
        map: HashMap<A::OrbitT, P>,
        base: A::OrbitT,
    ) -> Self::AssociatedTransversal {
        super::transversal::SimpleTransversal::from_raw(base, map, SimpleTransversalResolver)
    }
}

/// A dispatcher that does full Factored Transversal lookups
#[derive(Debug, Clone, Copy, Default)]
pub struct FactoredTransversalResolver<A>(pub(crate) A);

impl<P, A> TransversalResolver<P, A> for FactoredTransversalResolver<A>
where
    P: Permutation,
    A: Action<P>,
{
    type AssociatedTransversal = super::transversal::FactoredTransversal<P, A>;

    fn representative(
        &self,
        map: &HashMap<A::OrbitT, P>,
        base: A::OrbitT,
        point: A::OrbitT,
    ) -> Option<P> {
        super::transversal::factored_transversal::representative_raw(map, base, point, &self.0)
    }

    // Note that no validation is actually done here
    fn into_transversal(
        &self,
        map: HashMap<A::OrbitT, P>,
        base: A::OrbitT,
    ) -> Self::AssociatedTransversal {
        super::transversal::FactoredTransversal::from_raw(
            base,
            map,
            FactoredTransversalResolver(self.0.clone()),
        )
    }
}
