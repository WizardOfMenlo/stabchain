use super::Group;
use crate::perm::Permutation;

use std::collections::{HashSet, VecDeque};
use std::iter::FromIterator;

/// Very naive way to get all elements in a group
/// Please don't do this in practice
// Since Permutation has RefCell it could theorically mess up the ordering. However, since the hash is dependant only
// on the fixed part is will not in practice
#[allow(clippy::mutable_key_type)]
pub fn group_elements<P: Permutation>(g: &Group<P>) -> Vec<P> {
    let gens = g.generators();
    let mut res = HashSet::new();
    // Get everything that is not the identity
    let mut to_check = VecDeque::from_iter(gens.iter().cloned().filter(|p| !p.is_id()));
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_trivial() {
        let g = Group::trivial();
        assert_eq!(group_elements(&g).len(), 1);
    }

    #[test]
    fn test_cyclic() {
        let g = Group::cyclic(10);
        assert_eq!(group_elements(&g).len(), 10);
    }

    #[test]
    fn test_alternating() {
        let g = Group::alternating(4);
        assert_eq!(group_elements(&g).len(), 12);
    }

    #[test]
    fn test_symmetric() {
        let g = Group::symmetric(4);
        assert_eq!(group_elements(&g).len(), 24);
    }
}
