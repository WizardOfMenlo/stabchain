use super::Group;
use crate::perm::Permutation;
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
pub fn random_subproduct_full<T: Rng>(rng: &mut T, gens: &[Permutation]) -> Permutation {
    random_subproduct_subset(rng, gens, gens.len())
}

/// Apply a point to permutations stored as a word.
pub fn apply_permutation_word<'a>(
    perm_word: impl IntoIterator<Item = &'a Permutation>,
    x: usize,
) -> usize {
    perm_word.into_iter().fold(x, |accum, p| p.apply(accum))
}

/// Generate a random subproduct of a random k sized subset of the given generators.
pub fn random_subproduct_subset<T: Rng>(
    rng: &mut T,
    gens: &[Permutation],
    k: usize,
) -> Permutation {
    gens.choose_multiple(rng, k)
        .fold(Permutation::id(), |accum, elem| {
            if rng.gen::<bool>() {
                accum
            } else {
                accum.multiply(elem)
            }
        })
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::perm::export::CyclePermutation;
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
        let g = Group::new(&[
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
        let g = Group::new(&[
            CyclePermutation::single_cycle(&[1, 2, 4]).into(),
            CyclePermutation::single_cycle(&[3, 5, 8]).into(),
            CyclePermutation::single_cycle(&[7, 9]).into(),
            CyclePermutation::single_cycle(&[1, 5, 6, 9]).into(),
        ]);
        for _ in 0..50 {
            random_subproduct_subset(&mut rng, g.generators(), 2);
        }
    }
}
