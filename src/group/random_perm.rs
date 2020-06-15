use crate::perm::Permutation;
use rand::rngs::ThreadRng;
use rand::Rng;
use std::cmp::max;
pub struct RandPerm {
    size: usize,
    rng: ThreadRng,
    gen_elements: Vec<Permutation>,
    accum: Permutation,
}

impl RandPerm {
    /// Construct and initialise a random permutation generator.
    /// ```
    /// use stabchain::perm::Permutation;
    /// use stabchain::group::random_perm::RandPerm;
    /// let generators : Vec<Permutation> = vec![Permutation::from(vec![1, 0]), Permutation::from(vec![0, 2, 3, 1])];
    /// let rand_perm = RandPerm::from_generators(11, generators, 50);
    /// ```
    pub fn from_generators(
        min_size: usize,
        generators: Vec<Permutation>,
        initial_runs: usize,
    ) -> Self {
        let rng = rand::thread_rng();
        let mut gen_elements: Vec<Permutation> = if !generators.is_empty() {
            generators
        } else {
            vec![Permutation::id()]
        };
        let k = gen_elements.len();
        //Repeat elements if there aren't enough generators.
        for i in k..min_size {
            gen_elements.push(gen_elements[(i - k) % k].clone());
        }
        let accum = Permutation::id();
        let size = max(min_size, k);
        let mut rand = RandPerm {
            size,
            rng,
            gen_elements,
            accum,
        };
        // Inital randomisation.
        for _ in 0..initial_runs {
            rand.random_permutation();
        }
        rand
    }

    /// Generate a random permutation.
    /// ```
    /// use stabchain::perm::Permutation;
    /// use stabchain::group::random_perm::RandPerm;
    /// let generators : Vec<Permutation> = vec![Permutation::from(vec![1, 0]), Permutation::from(vec![0, 2, 3, 1])];
    /// let mut rand_perm = RandPerm::from_generators(11, generators, 50);
    /// rand_perm.random_permutation();
    /// ```
    pub fn random_permutation(&mut self) -> Permutation {
        let s = self.rng.gen_range(0, self.size);
        let mut t = s;
        // Generate another index that isn't equal to s.
        while t == s {
            t = self.rng.gen_range(0, self.size);
        }
        // Either take product or quotient.
        let e = self.rng.gen_range(-1, 2);
        // Randomly determine order of operation.
        // The operation works by replacing a list entry with a product, and then accumulating with the stored permutation.
        if self.rng.gen::<bool>() {
            self.gen_elements[s] = self.gen_elements[s].multiply(&self.gen_elements[t].pow(e));
            self.accum = self.accum.multiply(&self.gen_elements[s]);
        } else {
            self.gen_elements[s] = self.gen_elements[t].pow(e).multiply(&self.gen_elements[s]);
            self.accum = self.gen_elements[s].multiply(&self.accum);
        }
        self.a.clone()
    }
}

#[cfg(test)]
mod tests {
    #[test]
    /// Test that only the indentity permutation is generated from an empty set of generators.
    fn empty_generators() {
        use super::Permutation;
        use super::RandPerm;
        let id = Permutation::id();
        let mut rand_perm = RandPerm::from_generators(10, vec![], 50);
        for _ in 0..50 {
            assert_eq!(id, rand_perm.random_permutation());
        }
    }
    #[test]
    /// Test that elements generated are in the subgroup generated by the generator
    fn closure_small() {
        use super::Permutation;
        use super::RandPerm;
        let generator = Permutation::from(vec![3, 0, 1, 2]);
        let elements = vec![
            generator.clone(),
            generator.pow(2),
            generator.pow(3),
            generator.pow(4),
        ];
        let mut rand_perm = RandPerm::from_generators(10, vec![generator], 50);
        for _ in 0..50 {
            assert!(elements.contains(&rand_perm.random_permutation()));
        }
    }

    #[ignore] //remove once test is implemented.
    #[test]
    /// Test that elements generated are in the subgroup for multiple generators.
    fn closure_larger() {
        // Do once we have a better subgroup test.
        todo!();
    }
}