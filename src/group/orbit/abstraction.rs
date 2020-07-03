use crate::perm::Permutation;
use std::collections::HashMap;

/// A trait encapsulating the different ways in which a transversal can access a representative
pub trait TransversalResolver<P>: Default {
    type AssociatedTransversal: super::transversal::Transversal<P>;

    /// Compute the representative
    fn representative(&self, map: &HashMap<usize, P>, base: usize, point: usize) -> Option<P>;

    /// Convert into a full blown transversal
    fn into_transversal(&self, map: HashMap<usize, P>, base: usize) -> Self::AssociatedTransversal;
}

/// A dispatcher which does simple lookups
#[derive(Debug, Clone, Copy, Default)]
pub struct SimpleTransversalResolver;

impl<P> TransversalResolver<P> for SimpleTransversalResolver
where
    P: Clone,
{
    type AssociatedTransversal = super::transversal::SimpleTransversal<P>;

    fn representative(&self, map: &HashMap<usize, P>, _: usize, point: usize) -> Option<P> {
        map.get(&point).cloned()
    }

    fn into_transversal(&self, map: HashMap<usize, P>, base: usize) -> Self::AssociatedTransversal {
        super::transversal::SimpleTransversal::from_raw(base, map, SimpleTransversalResolver)
    }
}

/// A dispatcher that does full Factored Transversal lookups
#[derive(Debug, Clone, Copy, Default)]
pub struct FactoredTransversalResolver;

impl<P> TransversalResolver<P> for FactoredTransversalResolver
where
    P: Permutation,
{
    type AssociatedTransversal = super::transversal::FactoredTransversal<P>;

    fn representative(&self, map: &HashMap<usize, P>, base: usize, point: usize) -> Option<P> {
        super::transversal::factored_transversal::representative_raw(map, base, point)
    }

    // Note that no validation is actually done here
    fn into_transversal(&self, map: HashMap<usize, P>, base: usize) -> Self::AssociatedTransversal {
        super::transversal::FactoredTransversal::from_raw(base, map, FactoredTransversalResolver)
    }
}
