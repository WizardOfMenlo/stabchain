use super::export::CyclePermutation;
use super::Permutation;
use rand::seq::SliceRandom;

use crate::perm::impls::standard::StandardPermutation;

/// Use this to generate a random permutation on n points
/// ```
/// use stabchain::perm::*;
/// let perm = stabchain::perm::utils::random_permutation::<DefaultPermutation>(100);
/// ```
pub fn random_permutation<P: Permutation>(n: usize) -> P {
    let mut rng = rand::thread_rng();
    let mut vec: Vec<usize> = (0..n).collect();
    vec.shuffle(&mut rng);
    P::from_images(&vec[..])
}

/// Generates a permutation of order n, where the least permuted element is start
pub fn order_n_permutation<P: Permutation>(start: usize, n: usize) -> P {
    assert!(n > 0);
    assert!(start > 0);

    let cycle = CyclePermutation::from_vec(vec![(start..(start + n)).collect()]);
    let standard = StandardPermutation::from(cycle);
    let images = standard.as_vec();
    P::from_images(images)
}

#[derive(Debug)]
pub enum ImageError {
    DuplicatedImage(usize),
    MissingValue(usize),
}

/// Check that an array is in the right format
pub fn valid_images(images: &[usize]) -> Result<(), ImageError> {
    use std::cmp::Ordering;

    let mut vec: Vec<_> = images.into();
    vec.sort_unstable();
    for (index, &value) in vec.iter().enumerate() {
        return match value.cmp(&index) {
            Ordering::Less => Err(ImageError::DuplicatedImage(value)),
            Ordering::Greater => Err(ImageError::MissingValue(index)),
            Ordering::Equal => continue,
        };
    }

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::perm::DefaultPermutation;

    #[test]
    fn create_random() {
        random_permutation::<DefaultPermutation>(10);
    }

    #[test]
    fn order_n_start() {
        let perm = order_n_permutation::<DefaultPermutation>(10, 25);
        for i in 0..9 {
            assert_eq!(perm.apply(i), i)
        }

        assert!(perm.apply(9) != 9);
    }

    #[test]
    fn order_n_order() {
        let perm = order_n_permutation::<DefaultPermutation>(10, 25);
        for i in 1..25 {
            assert!(!perm.pow(i).is_id());
        }

        assert!(perm.pow(25).is_id())
    }

    #[test]
    fn order_and_order() {
        for i in 1..25 {
            assert_eq!(order_n_permutation::<DefaultPermutation>(1, i).order(), i)
        }
    }

    #[test]
    fn validate_images_missing_first() {
        let parse_res = valid_images(&[1, 2, 4, 3]);
        assert!(parse_res.is_err());
    }

    #[test]
    fn validate_images_missing_middle() {
        let parse_res = valid_images(&[0, 1, 3, 2, 5, 7, 6]);
        assert!(parse_res.is_err());
    }

    #[test]
    fn validate_images_duplicated() {
        let parse_res = valid_images(&[0, 1, 2, 3, 5, 4, 2]);
        assert!(parse_res.is_err());
    }
}
