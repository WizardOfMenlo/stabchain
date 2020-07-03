use super::export::CyclePermutation;
use super::DefaultPermutation;
use rand::seq::SliceRandom;

/// Use this to generate a random permutation on n points
/// ```
/// let perm = stabchain::perm::utils::random_permutation(100);
/// ```
pub fn random_permutation(n: usize) -> DefaultPermutation {
    let mut rng = rand::thread_rng();
    let mut vec: Vec<usize> = (0..n).collect();
    vec.shuffle(&mut rng);
    DefaultPermutation::from_vec(vec)
}

/// Generates a permutation of order n, where the least permuted element is start
pub fn order_n_permutation(start: usize, n: usize) -> DefaultPermutation {
    assert!(n > 0);
    assert!(start > 0);
    CyclePermutation::from_vec(vec![(start..(start + n)).collect()]).into()
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::perm::Permutation;

    #[test]
    fn create_random() {
        random_permutation(10);
    }

    #[test]
    fn order_n_start() {
        let perm = order_n_permutation(10, 25);
        for i in 0..9 {
            assert_eq!(perm.apply(i), i)
        }

        assert!(perm.apply(9) != 9);
    }

    #[test]
    fn order_n_order() {
        use crate::perm::builder::PermBuilder;
        let perm = order_n_permutation(10, 25);
        for i in 1..25 {
            assert!(!perm.build_pow(i).collapse().is_id());
        }

        assert!(perm.build_pow(25).collapse().is_id())
    }
}
