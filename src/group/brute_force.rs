//! Mod which contains a deprecated utility for bruteforcing group elements

use super::Group;
use crate::perm::Permutation;
use crate::DetHashSet;

use std::collections::VecDeque;

/// Very naive way to get all elements in a group
/// Please don't do this in practice
// Since Permutation has RefCell it could theorically mess up the ordering. However, since the hash is dependant only
// on the fixed part is will not in practice
#[allow(clippy::mutable_key_type)]
#[deprecated = "Usage of orbit algorithm is much quicker"]
pub fn group_elements<P: Permutation>(g: &Group<P>) -> Vec<P> {
    let gens = g.generators();
    let mut res = DetHashSet::with_capacity_and_hasher(gens.len(), Default::default());
    // Get everything that is not the identity
    let mut to_check = gens
        .iter()
        .cloned()
        .filter(|p| !p.is_id())
        .collect::<VecDeque<P>>();
    while !to_check.is_empty() {
        // Add it to the group (as well as its inverse)
        let element = to_check.pop_back().unwrap();
        res.insert(element.inv());
        res.insert(element.clone());
        let element = element.clone();
        for other in &res {
            let new = element.multiply(other);
            if !new.is_id() && !res.contains(&new) {
                to_check.push_back(new);
            }
        }
    }

    res.insert(P::id());
    res.into_iter().collect()
}

#[allow(deprecated)]
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_trivial() {
        let g = Group::trivial();
        assert_eq!(group_elements(&g).len(), 1);
        assert_eq!(g.bruteforce_elements().len(), 1);
    }

    #[test]
    fn test_cyclic() {
        let g = Group::cyclic(10);
        assert_eq!(group_elements(&g).len(), 10);
        assert_eq!(g.bruteforce_elements().len(), 10);
    }

    #[test]
    fn test_alternating() {
        let g = Group::alternating(4);
        assert_eq!(group_elements(&g).len(), 12);
        assert_eq!(g.bruteforce_elements().len(), 12);
    }

    #[test]
    fn test_symmetric() {
        let g = Group::symmetric(4);
        assert_eq!(group_elements(&g).len(), 24);
        assert_eq!(g.bruteforce_elements().len(), 24);
    }
}
