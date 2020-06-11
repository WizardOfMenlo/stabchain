use crate::perm::Permutation;
use rand::rngs::ThreadRng;
use rand::Rng;

pub struct rand_perm {
    size: usize,
    rng: ThreadRng,
    gen_elements: Vec<Permutation>,
    a: Permutation,
}

impl rand_perm {
    pub fn from_generators(size: usize, generators: Vec<Permutation>) -> Self {
        let mut rng = rand::thread_rng();
        let mut gen_elements: Vec<Permutation> = generators.clone();
        let k = gen_elements.len();
        for i in (k + 1)..=size {
            gen_elements[i] = generators[i - k].clone();
        }
        let a = Permutation::id();
        let mut rand = rand_perm {
            size,
            rng,
            gen_elements,
            a,
        };
        for _ in 0..50 {
            rand.random_permutation();
        }
        rand
    }

    pub fn random_permutation(&mut self) {}
}
