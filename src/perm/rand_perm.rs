use crate::perm::Permutation;
use rand::rngs::ThreadRng;
use rand::Rng;

pub struct RandPerm {
    size: usize,
    rng: ThreadRng,
    gen_elements: Vec<Permutation>,
    a: Permutation,
}

impl RandPerm {
    pub fn from_generators(size: usize, generators: Vec<Permutation>, initial_runs: usize) -> Self {
        let mut rng = rand::thread_rng();
        let mut gen_elements: Vec<Permutation> = generators.clone();
        let k = gen_elements.len();
        for i in (k + 1)..=size {
            gen_elements[i] = generators[i - k].clone();
        }
        let a = Permutation::id();
        let mut rand = RandPerm {
            size,
            rng,
            gen_elements,
            a,
        };
        for _ in 0..initial_runs {
            rand.random_permutation();
        }
        rand
    }

    pub fn random_permutation(&mut self) -> Permutation {
        let s = self.rng.gen_range(0, self.size);
        let mut t = s;
        while t == s {
            t = self.rng.gen_range(0, self.size);
        }
        let e = self.rng.gen_range(-1, 2);
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
