//! Some useful abstractions to abstract over the two different kind of transversals.
//! In particular useful for stabchain as it allows to build factored transversal quite transparently

use crate::perm::actions::SimpleApplication;
use crate::perm::impls::word::WordPermutation;
use crate::perm::{Action, Permutation};
use crate::DetHashMap;

use std::fmt::Debug;

/// A trait encapsulating the different ways in which a transversal can access a representative
pub trait TransversalResolver<P, A = SimpleApplication<P>>: Default + Debug
where
    A: Action<P>,
{
    /// The transversal that can be built from a DetHashMap by this resolver
    type AssociatedTransversal: super::transversal::Transversal<P, A>;

    /// Compute the representative
    fn representative(
        &self,
        map: &DetHashMap<A::OrbitT, P>,
        base: A::OrbitT,
        point: A::OrbitT,
    ) -> Option<P>;

    /// Compute representative as word
    fn representative_as_word(
        &self,
        map: &DetHashMap<A::OrbitT, P>,
        base: A::OrbitT,
        point: A::OrbitT,
    ) -> Option<WordPermutation<P>>
    where
        P: Permutation,
    {
        self.representative(map, base, point)
            .map(|p| WordPermutation::from_perm(&p))
    }

    /// Convert into a full blown transversal
    fn to_transversal(
        &self,
        map: DetHashMap<A::OrbitT, P>,
        base: A::OrbitT,
    ) -> Self::AssociatedTransversal;
}

/// A dispatcher which does simple lookups
#[derive(Debug, Clone, Copy, Default)]
pub struct SimpleTransversalResolver;

impl<P, A> TransversalResolver<P, A> for SimpleTransversalResolver
where
    P: Clone + Debug,
    A: Action<P>,
{
    type AssociatedTransversal = super::transversal::SimpleTransversal<P, A>;

    fn representative(
        &self,
        map: &DetHashMap<A::OrbitT, P>,
        _: A::OrbitT,
        point: A::OrbitT,
    ) -> Option<P> {
        map.get(&point).cloned()
    }

    fn to_transversal(
        &self,
        map: DetHashMap<A::OrbitT, P>,
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
        map: &DetHashMap<A::OrbitT, P>,
        base: A::OrbitT,
        point: A::OrbitT,
    ) -> Option<P> {
        super::transversal::factored_transversal::representative_raw(map, base, point, &self.0)
    }

    fn representative_as_word(
        &self,
        map: &DetHashMap<A::OrbitT, P>,
        base: A::OrbitT,
        point: A::OrbitT,
    ) -> Option<WordPermutation<P>>
    where
        P: Permutation,
    {
        super::transversal::shallow_transversal::representative_raw_as_word(
            map,
            base,
            point,
            &self.0,
            map.len(),
        )
    }

    // Note that no validation is actually done here
    fn to_transversal(
        &self,
        map: DetHashMap<A::OrbitT, P>,
        base: A::OrbitT,
    ) -> Self::AssociatedTransversal {
        super::transversal::FactoredTransversal::from_raw(
            base,
            map,
            FactoredTransversalResolver(self.0.clone()),
        )
    }
}
