use crate::perm::{ActionStrategy, Permutation};
use std::collections::HashMap;

/// A trait encapsulating the different ways in which a transversal can access a representative
pub trait TransversalResolver<P, OrbitT = usize>: Default {
    type AssociatedTransversal: super::transversal::Transversal<P, OrbitT>;

    /// Compute the representative
    fn representative(&self, map: &HashMap<OrbitT, P>, base: OrbitT, point: OrbitT) -> Option<P>;

    /// Convert into a full blown transversal
    fn into_transversal(
        &self,
        map: HashMap<OrbitT, P>,
        base: OrbitT,
    ) -> Self::AssociatedTransversal;
}

/// A dispatcher which does simple lookups
#[derive(Debug, Clone, Copy, Default)]
pub struct SimpleTransversalResolver;

impl<P, OrbitT> TransversalResolver<P, OrbitT> for SimpleTransversalResolver
where
    P: Clone,
    OrbitT: std::hash::Hash + Eq + Clone,
{
    type AssociatedTransversal = super::transversal::SimpleTransversal<P, OrbitT>;

    fn representative(&self, map: &HashMap<OrbitT, P>, _: OrbitT, point: OrbitT) -> Option<P> {
        map.get(&point).cloned()
    }

    fn into_transversal(
        &self,
        map: HashMap<OrbitT, P>,
        base: OrbitT,
    ) -> Self::AssociatedTransversal {
        super::transversal::SimpleTransversal::from_raw(base, map, SimpleTransversalResolver)
    }
}

/// A dispatcher that does full Factored Transversal lookups
#[derive(Debug, Clone, Copy, Default)]
pub struct FactoredTransversalResolver<A>(pub(crate) A);

impl<P, OrbitT, A> TransversalResolver<P, OrbitT> for FactoredTransversalResolver<A>
where
    P: Permutation,
    OrbitT: std::hash::Hash + Eq + Clone,
    A: ActionStrategy<P, OrbitT = OrbitT> + Default,
{
    type AssociatedTransversal = super::transversal::FactoredTransversal<P, A>;

    fn representative(&self, map: &HashMap<OrbitT, P>, base: OrbitT, point: OrbitT) -> Option<P> {
        super::transversal::factored_transversal::representative_raw(
            map,
            base,
            point,
            self.0.clone(),
        )
    }

    // Note that no validation is actually done here
    fn into_transversal(
        &self,
        map: HashMap<OrbitT, P>,
        base: OrbitT,
    ) -> Self::AssociatedTransversal {
        super::transversal::FactoredTransversal::from_raw(
            base,
            map,
            FactoredTransversalResolver(self.0.clone()),
        )
    }
}
