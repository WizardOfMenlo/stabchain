pub mod selectors;

use crate::perm::actions::SimpleApplication;
use crate::perm::{Action, DefaultPermutation, Permutation};

pub struct Base<P = DefaultPermutation, A = SimpleApplication<P>>
where
    A: Action<P>,
{
    points: Vec<A::OrbitT>,
    action: A,
}

impl<P> Base<P>
where
    P: Permutation,
{
    pub fn new(points: Vec<usize>) -> Self {
        Self::new_with_action(points, SimpleApplication::default())
    }
}

impl<P, A> Base<P, A>
where
    A: Action<P>,
    P: Permutation,
{
    pub fn new_with_action(points: Vec<A::OrbitT>, action: A) -> Self {
        Self { points, action }
    }

    /// Find if there is perm which fixes all the points and is not the id
    pub fn base_for_subset(&self, perms: impl IntoIterator<Item = P>) -> bool {
        !perms
            .into_iter()
            .filter(|p| !p.is_id())
            .map(|perm| {
                self.points
                    .iter()
                    .map(move |i| (i.clone(), self.action.apply(&perm, i.clone())))
            })
            .any(|mut it| it.all(|pair| pair.0 == pair.1))
    }

    /// Find any perm that fixes all the points and is not the id
    pub fn base_for_subset_counterexample(&self, perms: impl IntoIterator<Item = P>) -> Option<P> {
        perms
            .into_iter()
            .filter(|p| !p.is_id())
            .map(|perm| {
                (
                    perm.clone(),
                    self.points
                        .iter()
                        .map(move |i| (i.clone(), self.action.apply(&perm, i.clone()))),
                )
            })
            .flat_map(|(p, mut it)| {
                if it.all(|pair| pair.0 == pair.1) {
                    Some(p)
                } else {
                    None
                }
            })
            .next()
    }

    /// Get an iterator over the base points
    pub fn iter(&self) -> impl Iterator<Item = &A::OrbitT> {
        self.points.iter()
    }

    /// Get the base in vec form
    pub fn base(&self) -> &[A::OrbitT] {
        &self.points[..]
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use crate::group::Group;

    #[test]
    fn test_valid_base() {
        let base = Base::new(vec![0, 1, 2, 3, 4, 5]);
        let els = Group::symmetric(5).bruteforce_elements();
        assert!(base.base_for_subset(els))
    }

    #[test]
    fn test_invalid_base() {
        let base = Base::new(vec![0, 1]);
        let els = Group::symmetric(4).bruteforce_elements();
        assert!(!base.base_for_subset(els))
    }

    #[test]
    fn test_invalid_base_counter() {
        let base = Base::new(vec![0, 1]);
        let els = Group::symmetric(4).bruteforce_elements();
        let counter = base.base_for_subset_counterexample(els);
        assert!(counter.is_some());
        let counter = counter.unwrap();
        assert!(!counter.is_id());
        for &el in base.iter() {
            assert_eq!(counter.apply(el), el);
        }
    }
}
