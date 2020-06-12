use crate::perm::Permutation;
use rand::rngs::ThreadRng;
use rand::Rng;
use std::cmp::max;
pub struct RandPerm {
    size: usize,
    rng: ThreadRng,
    gen_elements: Vec<Permutation>,
    a: Permutation,
}

impl RandPerm {
    /// Construct and initialise a random permutation generator.
    /// ```
    /// use stabchain::perm::Permutation;
    /// use stabchain::perm::rand_perm::RandPerm;
    /// let generators : Vec<Permutation> = vec![Permutation::from(vec![1, 0]), Permutation::from(vec![0, 2, 3, 1])];
    /// let rand_perm = RandPerm::from_generators(11, generators, 50);
    /// ```
    pub fn from_generators(
        min_size: usize,
        generators: Vec<Permutation>,
        initial_runs: usize,
    ) -> Self {
        let rng = rand::thread_rng();
        let mut gen_elements: Vec<Permutation> = generators.clone();
        let k = gen_elements.len();
        //Repeat elements if there aren't enough generators.
        for i in k..min_size {
            gen_elements.push(generators[(i - k) % k].clone());
        }
        let a = Permutation::id();
        let size = max(min_size, k);
        let mut rand = RandPerm {
            size,
            rng,
            gen_elements,
            a,
        };
        // Inital randomisation.
        for _ in 0..initial_runs {
            rand.random_permutation();
        }
        rand
    }

    /// Generate a random permutation.
    pub fn random_permutation(&mut self) -> Permutation {
        let s = self.rng.gen_range(0, self.size);
        let mut t = s;
        // Generate another index that isn't equal to s.
        while t == s {
            t = self.rng.gen_range(0, self.size);
        }
        // Either take product or quotient.
        let e = self.rng.gen_range(-1, 2);
        //Randomly determine order of operation.
        if self.rng.gen::<f64>() < 0.50 {
            self.gen_elements[s] = self.gen_elements[s].multiply(&self.gen_elements[t].pow(e));
            self.a = self.a.multiply(&self.gen_elements[s]);
        } else {
            self.gen_elements[s] = self.gen_elements[t].pow(e).multiply(&self.gen_elements[s]);
            self.a = self.gen_elements[s].multiply(&self.a);
        }
        self.a.clone()
    }
}
