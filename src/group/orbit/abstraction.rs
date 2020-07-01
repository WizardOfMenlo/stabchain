use crate::perm::Permutation;
use std::collections::HashMap;
pub trait TransversalResolver: Default {
    type AssociatedTransversal;

    fn representative(
        &self,
        map: &HashMap<usize, Permutation>,
        base: usize,
        point: usize,
    ) -> Option<Permutation>;

    fn into_transversal(
        &self,
        map: HashMap<usize, Permutation>,
        base: usize,
    ) -> Self::AssociatedTransversal;
}

#[derive(Debug, Clone, Copy, Default)]
pub struct SimpleTransversalResolver;

impl TransversalResolver for SimpleTransversalResolver {
    type AssociatedTransversal = super::transversal::Transversal;

    fn representative(
        &self,
        map: &HashMap<usize, Permutation>,
        _: usize,
        point: usize,
    ) -> Option<Permutation> {
        map.get(&point).cloned()
    }

    fn into_transversal(
        &self,
        map: HashMap<usize, Permutation>,
        base: usize,
    ) -> Self::AssociatedTransversal {
        super::transversal::Transversal::from_raw(base, map)
    }
}

#[derive(Debug, Clone, Copy, Default)]
pub struct FactoredTransversalResolver;

impl TransversalResolver for FactoredTransversalResolver {
    type AssociatedTransversal = super::factored_transversal::FactoredTransversal;

    fn representative(
        &self,
        map: &HashMap<usize, Permutation>,
        base: usize,
        point: usize,
    ) -> Option<Permutation> {
        super::factored_transversal::representative_raw(map, base, point)
    }

    // Note that no validation is actually done here
    fn into_transversal(
        &self,
        map: HashMap<usize, Permutation>,
        base: usize,
    ) -> Self::AssociatedTransversal {
        super::factored_transversal::FactoredTransversal::from_raw(base, map)
    }
}
