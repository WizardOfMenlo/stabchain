//! Group utilities which I was not sure where to place

use super::Group;
use crate::perm::{Action, Permutation};
use rand::seq::SliceRandom;
use rand::Rng;

/// Creates a group generated from n copies of the cyclic group
pub fn copies_of_cyclic(specification: &[usize]) -> Group {
    assert!(specification.iter().all(|&n| n > 0));

    specification
        .iter()
        .map(|n| Group::cyclic(*n))
        .fold(Group::trivial(), |g1, g2| Group::product(&g1, &g2))
}

/// Generate random subproduct of the given generators.
pub fn random_subproduct_full<T, P>(rng: &mut T, gens: &[P]) -> P
where
    P: Permutation,
    T: Rng,
{
    random_subproduct_subset(rng, gens, gens.len())
}

/// Apply a point to permutations stored as a word.
pub fn apply_permutation_word<'a, P, A>(
    perm_word: impl IntoIterator<Item = &'a P>,
    x: A::OrbitT,
    strat: &A,
) -> A::OrbitT
where
    P: 'a + Permutation,
    A: Action<P>,
{
    perm_word
        .into_iter()
        .fold(x, |accum, p| strat.apply(p, accum))
}

/// Convert from a permutation stored as a word, into a single permutation.
pub fn collapse_perm_word<'a, P>(p: impl IntoIterator<Item = &'a P>) -> P
where
    P: 'a + Permutation,
{
    p.into_iter()
        .fold(Permutation::id(), |accum, perm| accum.multiply(&perm))
}

/// Generate a random subproduct of a random k sized subset of the given generators.
pub fn random_subproduct_subset<R, P>(rng: &mut R, gens: &[P], k: usize) -> P
where
    P: Permutation,
    R: Rng,
{
    gens.choose_multiple(rng, k)
        .fold(Permutation::id(), |accum, elem| {
            if rng.gen::<bool>() {
                accum
            } else {
                accum.multiply(elem)
            }
        })
}

/// Generate a word representation of a random subproduct of the given generators.
pub fn random_subproduct_word_subset<R, P>(rng: &mut R, gens: &[P], k: usize) -> Vec<P>
where
    P: Permutation,
    R: Rng,
{
    // TODO: CHeck 1 + k/2
    gens.choose_multiple(rng, k)
        .filter(|_| rng.gen::<bool>())
        .cloned()
        .collect::<Vec<P>>()
}

/// Generate random subproduct of the given generators.
pub fn random_subproduct_word_full<T, P>(rng: &mut T, gens: &[P]) -> Vec<P>
where
    P: Permutation,
    T: Rng,
{
    random_subproduct_word_subset(rng, gens, gens.len())
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::perm::actions::SimpleApplication;
    use crate::perm::export::CyclePermutation;
    use crate::perm::impls::standard::StandardPermutation;
    use rand::thread_rng;

    #[test]
    fn test_generator_len() {
        let g = copies_of_cyclic(&[3, 4, 5]);
        assert_eq!(g.generators().len(), 3)
    }

    #[test]
    fn test_generator_orbit() {
        let g = copies_of_cyclic(&[3, 4, 5]);
        assert_eq!(g.orbit(0).len(), 3);
        assert_eq!(g.orbit(1).len(), 3);
        assert_eq!(g.orbit(2).len(), 3);
        assert_eq!(g.orbit(3).len(), 4);
        assert_eq!(g.orbit(4).len(), 4);
        assert_eq!(g.orbit(5).len(), 4);
        assert_eq!(g.orbit(6).len(), 4);
        assert_eq!(g.orbit(7).len(), 5);
        assert_eq!(g.orbit(8).len(), 5);
        assert_eq!(g.orbit(9).len(), 5);
        assert_eq!(g.orbit(10).len(), 5);
        assert_eq!(g.orbit(11).len(), 5);
        assert_eq!(g.orbit(12).len(), 1);
    }

    #[test]
    fn test_random_subproduct_full() {
        let mut rng = thread_rng();
        let g = Group::<StandardPermutation>::new(&[
            CyclePermutation::single_cycle(&[1, 2, 4]).into(),
            CyclePermutation::single_cycle(&[3, 5, 8]).into(),
            CyclePermutation::single_cycle(&[7, 9]).into(),
            CyclePermutation::single_cycle(&[1, 5, 6, 9]).into(),
        ]);
        for _ in 0..50 {
            random_subproduct_full(&mut rng, g.generators());
        }
    }

    #[test]
    fn test_random_subproduct_subset() {
        let mut rng = thread_rng();
        let g = Group::<StandardPermutation>::new(&[
            CyclePermutation::single_cycle(&[1, 2, 4]).into(),
            CyclePermutation::single_cycle(&[3, 5, 8]).into(),
            CyclePermutation::single_cycle(&[7, 9]).into(),
            CyclePermutation::single_cycle(&[1, 5, 6, 9]).into(),
        ]);
        for _ in 0..50 {
            random_subproduct_subset(&mut rng, g.generators(), 2);
        }
    }

    ///Test that applying a permutation as a word gives the same image as collapsing that permutation.
    #[test]
    fn test_apply_permutation_word() {
        //Test an empty word.
        let empty_word = vec![];
        let strat = SimpleApplication::default();
        assert_eq!(3, apply_permutation_word(&empty_word, 3, &strat));
        let perm_word: Vec<StandardPermutation> = vec![
            CyclePermutation::single_cycle(&[1, 2, 4]).into(),
            CyclePermutation::single_cycle(&[3, 5, 8]).into(),
            CyclePermutation::single_cycle(&[7, 9]).into(),
            CyclePermutation::single_cycle(&[1, 5, 6, 9]).into(),
        ];
        let collapsed_word = collapse_perm_word(&perm_word);
        for i in 0..9 {
            assert_eq!(
                collapsed_word.apply(i),
                apply_permutation_word(&perm_word, i, &strat)
            );
        }
    }
}
