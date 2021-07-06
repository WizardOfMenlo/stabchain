//! Utilities for testing element membership and coset representatives

use super::StabchainRecord;
use crate::group::orbit::abstraction::TransversalResolver;
use crate::perm::impls::word::WordPermutation;
use crate::perm::{Action, Permutation};

/// Given a stabilizer chain, computes whether the given element is in the group
pub fn is_in_group<'a, P, A, V>(
    it: impl IntoIterator<Item = &'a StabchainRecord<P, V, A>>,
    p: &P,
) -> bool
where
    P: 'a + Permutation,
    A: 'a + Action<P>,
    V: 'a + TransversalResolver<P, A>,
{
    // Early exit
    if p.is_id() {
        return true;
    }

    let applicator = A::default();

    let mut g = p.clone();
    for record in it {
        let base = record.base.clone();
        let application = applicator.apply(&g, base.clone());

        if !record.transversal.contains_key(&application) {
            return false;
        }

        let representative = record
            .resolver()
            .representative(&record.transversal, base, application)
            .unwrap();
        g = g.divide(&representative);
    }

    g.is_id()
}

/// Given a stabilizer chain, computes a list of coset representatives of the given element if it is in the group
/// So that p == s_m s_m-1 ... s_1
pub fn coset_representative<'a, P, A, V>(
    it: impl IntoIterator<Item = &'a StabchainRecord<P, V, A>>,
    p: &P,
) -> Option<Vec<P>>
where
    P: 'a + Permutation,
    A: 'a + Action<P>,
    V: 'a + TransversalResolver<P, A>,
{
    // Early exit
    if p.is_id() {
        // The empty product is the identity
        return Some(Vec::new());
    }

    let it = it.into_iter();

    let applicator = A::default();

    let mut res = Vec::with_capacity(it.size_hint().0);
    let mut g = p.clone();
    for record in it {
        let base = record.base.clone();
        let application = applicator.apply(&g, base.clone());

        if !record.transversal.contains_key(&application) {
            return None;
        }

        let representative = record
            .resolver()
            .representative(&record.transversal, base, application)
            .unwrap();
        res.push(representative.clone());
        g = g.divide(&representative);
    }

    if !g.is_id() {
        None
    } else {
        Some(res)
    }
}

/// Sift the permutation through the chain, returning the residue it generates.
pub fn residue_as_words<'a, P, A, V>(
    it: impl IntoIterator<Item = &'a StabchainRecord<P, V, A>>,
    p: &P,
) -> Vec<P>
where
    V: 'a + TransversalResolver<P, A>,
    P: 'a + Permutation,
    A: 'a + Action<P>,
{
    // Early exit
    if p.is_id() {
        // The empty product is the identity
        return Vec::new();
    }
    let applicator = A::default();
    let mut res = vec![p.clone()];
    let mut g = p.clone();
    for record in it {
        let base = record.base.clone();
        let application = applicator.apply(&g, base.clone());
        if !record.transversal.contains_key(&application) {
            break;
        }

        let representative = record
            .resolver()
            .representative(&record.transversal, base.clone(), application)
            .unwrap();
        res.push(representative.clone());
        g = g.divide(&representative);
    }
    res
}

/// Sift the permutation word through the chain, returning the residue it generates and the drop out level.
pub fn residue_as_words_from_words<'a, V, A, P>(
    it: impl IntoIterator<Item = &'a StabchainRecord<P, V, A>>,
    p: &WordPermutation<P>,
) -> (usize, WordPermutation<P>)
where
    V: 'a + TransversalResolver<P, A>,
    P: 'a + Permutation,
    A: 'a + Action<P>,
{
    //This permutation word will store the resulting residue.
    let mut g: WordPermutation<P> = p.clone();
    //This counts how many layers of the chain the permutation sifts through.
    let mut k = 0;
    let applicator = A::default();
    for record in it {
        let base = record.base.clone();
        let application = applicator.apply_word(&g, base.clone());

        //There is a missing point, so this permutation has not sifted through.
        if !record.transversal.contains_key(&application) {
            break;
        }
        //Already check the point is present, so there should be a representative.
        let representative = record
            .resolver()
            .representative_as_word(&record.transversal, base.clone(), application)
            .unwrap();
        g.multiply_mut_word(&representative.inv_lazy());
        k += 1;
    }
    (k, g)
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::group::Group;
    use crate::perm::DefaultPermutation;

    #[test]
    fn id_test() {
        let g = Group::trivial();
        let stab = g.stabchain();
        assert!(is_in_group(stab.iter(), &DefaultPermutation::id()));
    }

    #[test]
    fn cyclic_test() {
        let g = Group::cyclic(10);
        let stab = g.stabchain();

        let base = g.generators().get(0).cloned().unwrap();
        for i in 0..10 {
            assert!(is_in_group(stab.iter(), &base.pow(i)))
        }
    }

    #[test]
    fn book_example() {
        use super::super::base::selectors::FixedBaseSelector;
        use crate::perm::export::CyclePermutation;

        let g = Group::new(&[
            CyclePermutation::single_cycle(&[1, 2, 3]).into(),
            CyclePermutation::single_cycle(&[2, 3, 4]).into(),
        ]);

        let chain = g.stabchain_with_selector(FixedBaseSelector::new(&[0, 1]));

        let perm: DefaultPermutation =
            CyclePermutation::from_vec(vec![vec![1, 2], vec![3, 4]]).into();

        assert!(is_in_group(chain.iter(), &perm));
    }

    #[test]
    fn symmetric_failing_example() {
        use crate::perm::export::CyclePermutation;

        let g = Group::symmetric(5);
        let chain = g.stabchain();

        assert!(is_in_group(
            chain.iter(),
            &CyclePermutation::single_cycle(&[1, 4]).into()
        ));

        assert!(chain.in_group(&CyclePermutation::single_cycle(&[1, 4]).into()));
    }

    #[test]
    fn book_example_complete_test() {
        use super::super::base::selectors::FixedBaseSelector;
        use crate::perm::export::CyclePermutation;

        let g = Group::<DefaultPermutation>::new(&[
            CyclePermutation::single_cycle(&[1, 2, 3]).into(),
            CyclePermutation::single_cycle(&[2, 3, 4]).into(),
        ]);

        let chain = g.stabchain_with_selector(FixedBaseSelector::new(&[0, 1]));

        let elements = g.bruteforce_elements();
        for el in elements {
            assert!(is_in_group(chain.iter(), &el));
        }
    }

    #[test]
    fn perm_in_symmetric() {
        use crate::perm::utils::random_permutation;

        let g = Group::symmetric(5);
        let stab = g.stabchain();
        assert!(is_in_group(stab.iter(), &DefaultPermutation::id()));

        for _ in 0..50 {
            let perm = random_permutation(5);
            assert!(is_in_group(stab.iter(), &perm));
        }
    }

    #[test]
    //Brute force to check if all elements of the symmetric group are in the resulting stabilizer chain.
    fn perm_in_symmetric_brute_force() {
        let g = Group::symmetric(6);
        let chain = g.stabchain();
        for perm in g.bruteforce_elements() {
            assert!(chain.in_group(&perm));
        }
    }

    #[test]
    //Brute force to check if all element of the alternating group are in the resulting stabilizer chain.
    fn perm_in_alternating_brute_force() {
        let g = Group::alternating(6);
        let chain = g.stabchain();
        for perm in g.bruteforce_elements() {
            assert!(chain.in_group(&perm));
        }
    }

    #[test]
    //Brute force to check if all element of the alternating group are in the resulting stabilizer chain.
    fn perm_in_dihedral_brute_force() {
        let g = Group::dihedral_2n(50);
        let chain = g.stabchain();
        for perm in g.bruteforce_elements() {
            assert!(chain.in_group(&perm));
        }
    }

    #[test]
    #[should_panic]
    fn perm_in_symmetric_invalid() {
        use crate::perm::utils::random_permutation;

        let g = Group::symmetric(5);
        let stab = g.stabchain();
        // With very high probability 1 - (1/6)^256 this should give us an error
        for _ in 0..256 {
            let perm = random_permutation(6);
            assert!(is_in_group(stab.iter(), &perm));
        }
    }

    #[test]
    fn trivial_repr() {
        let g = Group::trivial();
        let stab = g.stabchain();
        let repr = coset_representative(stab.iter(), &DefaultPermutation::id());
        assert!(repr.is_some());
        assert_eq!(repr.unwrap().len(), 0);
        assert!(
            coset_representative(stab.iter(), &DefaultPermutation::from_images(&[1, 2, 0]))
                .is_none()
        );
    }

    #[test]
    fn symmetric_repr() {
        use crate::perm::utils::random_permutation;

        let g = Group::symmetric(10);
        let stab = g.stabchain();
        let perm = random_permutation(10);
        let repr = coset_representative(stab.iter(), &perm);
        assert!(repr.is_some());
        let mut repr = repr.unwrap();
        assert_eq!(repr.len(), stab.len());
        let mut acc = DefaultPermutation::id();
        while !repr.is_empty() {
            let elem = repr.pop().unwrap();
            acc = acc.multiply(&elem);
        }
        assert_eq!(acc, perm);
    }
}
