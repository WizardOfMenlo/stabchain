use super::Permutation;
use rand::seq::SliceRandom;

/// Use this to generate a random permutation on n points
/// ```
/// let perm = stabchain::perm::utils::random_permutation(100);
/// ```
pub fn random_permutation(n: usize) -> Permutation {
    let mut rng = rand::thread_rng();
    let mut vec: Vec<usize> = (0..n).collect();
    vec.shuffle(&mut rng);
    Permutation::from_vec(vec)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn create_random() {
        random_permutation(10);
    }

    #[test]
    fn multiplication() {
        let a = random_permutation(10);
        let b = random_permutation(10);

        a.multiply(&b).inv();
    }
}
