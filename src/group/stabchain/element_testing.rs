use super::StabchainRecord;
use crate::perm::Permutation;

/// Given a stabilizer chain, computes whether the given element is in the group
pub fn is_in_group<'a>(it: impl IntoIterator<Item = &'a StabchainRecord>, p: &Permutation) -> bool {
    // Early exit
    if p.is_id() {
        return true;
    }

    let mut g = p.clone();
    for record in it {
        let base = record.base;
        let application = g.apply(base);

        if !record.transversal.contains_key(&application) {
            return false;
        }

        let representative = record.transversal.get(&application).unwrap();
        g = g.divide(&representative);
    }

    g.is_id()
}

/// Given a stabilizer chain, computes a list of coset representatives of the given element if it is in the group
/// So that p == s_m s_m-1 ... s_1
pub fn coset_representative<'a>(
    it: impl IntoIterator<Item = &'a StabchainRecord>,
    p: &Permutation,
) -> Option<Vec<Permutation>> {
    // Early exit
    if p.is_id() {
        // The empty product is the identity
        return Some(Vec::new());
    }

    let mut res = Vec::new();
    let mut g = p.clone();
    for record in it {
        let base = record.base;
        let application = g.apply(base);

        if !record.transversal.contains_key(&application) {
            return None;
        }

        let representative = record.transversal.get(&application).unwrap();
        res.push(representative.clone());
        g = g.divide(&representative);
    }

    if !g.is_id() {
        None
    } else {
        Some(res)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::group::Group;

    #[test]
    fn id_test() {
        let g = Group::trivial();
        let stab = g.stabchain();
        assert!(is_in_group(stab.iter(), &Permutation::id()));
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
        use crate::perm::export::CyclePermutation;

        let g = Group::new(&[
            CyclePermutation::single_cycle(&[1, 2, 3]).into(),
            CyclePermutation::single_cycle(&[2, 3, 4]).into(),
        ]);

        let chain = g.stabchain_base(&[0, 1]);

        let perm = CyclePermutation::from_vec(vec![vec![1, 2], vec![3, 4]]).into();

        assert!(is_in_group(chain.iter(), &perm));
    }

    #[test]
    fn book_example_complete_test() {
        use crate::perm::export::CyclePermutation;

        let g = Group::new(&[
            CyclePermutation::single_cycle(&[1, 2, 3]).into(),
            CyclePermutation::single_cycle(&[2, 3, 4]).into(),
        ]);

        let chain = g.stabchain_base(&[0, 1]);

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
        assert!(is_in_group(stab.iter(), &Permutation::id()));

        for _ in 0..50 {
            let perm = random_permutation(5);
            assert!(is_in_group(stab.iter(), &perm));
        }
    }

    #[ignore]
    #[test]
    //Brute force to check if all elements of the symmetric group are in the resulting stabilizer chain.
    fn perm_in_symmetric_brute_force() {
        use crate::group::brute_force::group_elements;
        let g = Group::symmetric(6);
        let chain = g.stabchain();
        for perm in group_elements(&g) {
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
        let repr = coset_representative(stab.iter(), &Permutation::id());
        assert!(repr.is_some());
        assert_eq!(repr.unwrap().len(), 0);
        assert!(coset_representative(stab.iter(), &Permutation::from_vec(vec![1, 2, 0])).is_none());
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
        let mut acc = Permutation::id();
        while !repr.is_empty() {
            let elem = repr.pop().unwrap();
            acc = acc.multiply(&elem);
        }
        assert_eq!(acc, perm);
    }
}
