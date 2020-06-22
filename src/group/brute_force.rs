use super::Group;
use crate::perm::Permutation;

use std::collections::{HashSet, VecDeque};
use std::iter::FromIterator;

/// Very naive way to get all elements in a group
/// Please don't do this in practice
// I think this is a false positive
#[deny(clippy::mutable_key_type)]
pub fn group_elements(g: &Group) -> Group {
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

    res.insert(Permutation::id());
    let gens: Vec<_> = res.into_iter().collect();
    Group::new(&gens[..])
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_trivial() {
        let g = Group::trivial();
        assert_eq!(group_elements(&g).generators().len(), 1);
    }

    #[test]
    fn test_cyclic() {
        let g = Group::cyclic(10);
        assert_eq!(group_elements(&g).generators().len(), 10);
    }

    #[test]
    fn test_alternating() {
        let g = Group::alternating(4);
        assert_eq!(group_elements(&g).generators().len(), 12);
    }

    #[test]
    fn test_symmetric() {
        let g = Group::symmetric(4);
        assert_eq!(group_elements(&g).generators().len(), 24);
    }
}
