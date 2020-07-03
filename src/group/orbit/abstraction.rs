use crate::perm::DefaultPermutation;
use std::collections::HashMap;

/// A trait encapsulating the different ways in which a transversal can access a representative
pub trait TransversalResolver: Default {
    type AssociatedTransversal: super::transversal::Transversal;

    /// Compute the representative
    fn representative(
        &self,
        map: &HashMap<usize, DefaultPermutation>,
        base: usize,
        point: usize,
    ) -> Option<DefaultPermutation>;

    /// Convert into a full blown transversal
    fn into_transversal(
        &self,
        map: HashMap<usize, DefaultPermutation>,
        base: usize,
    ) -> Self::AssociatedTransversal;
}

/// A dispatcher which does simple lookups
#[derive(Debug, Clone, Copy, Default)]
pub struct SimpleTransversalResolver;

impl TransversalResolver for SimpleTransversalResolver {
    type AssociatedTransversal = super::transversal::SimpleTransversal;

    fn representative(
        &self,
        map: &HashMap<usize, DefaultPermutation>,
        _: usize,
        point: usize,
    ) -> Option<DefaultPermutation> {
        map.get(&point).cloned()
    }

    fn into_transversal(
        &self,
        map: HashMap<usize, DefaultPermutation>,
        base: usize,
    ) -> Self::AssociatedTransversal {
        super::transversal::SimpleTransversal::from_raw(base, map, SimpleTransversalResolver)
    }
}

/// A dispatcher that does full Factored Transversal lookups
#[derive(Debug, Clone, Copy, Default)]
pub struct FactoredTransversalResolver;

impl TransversalResolver for FactoredTransversalResolver {
    type AssociatedTransversal = super::transversal::FactoredTransversal;

    fn representative(
        &self,
        map: &HashMap<usize, DefaultPermutation>,
        base: usize,
        point: usize,
    ) -> Option<DefaultPermutation> {
        super::transversal::factored_transversal::representative_raw(map, base, point)
    }

    // Note that no validation is actually done here
    fn into_transversal(
        &self,
        map: HashMap<usize, DefaultPermutation>,
        base: usize,
    ) -> Self::AssociatedTransversal {
        super::transversal::FactoredTransversal::from_raw(base, map, FactoredTransversalResolver)
    }
}
