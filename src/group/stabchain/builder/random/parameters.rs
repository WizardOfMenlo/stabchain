use rand::rngs::ThreadRng;

#[derive(Debug, Clone)]
pub struct RandomAlgoParameters<R = ThreadRng> {
    c1: usize,
    c2: usize,
    c3: usize,
    c4: usize,
    orbit_bound: usize,
    base_bound: usize,
    rng: R,
}

#[derive(Debug, Clone)]
pub struct Constants {
    c1: usize,
    c2: usize,
    c3: usize,
    c4: usize,
    orbit_bound: usize,
    base_bound: usize,
}

impl RandomAlgoParameters {
    pub fn new() -> Self {
        RandomAlgoParameters::default()
    }
}

impl<R> RandomAlgoParameters<R> {
    pub fn c1(mut self, c1: usize) -> Self {
        self.c1 = c1;
        self
    }

    pub fn c2(mut self, c2: usize) -> Self {
        self.c2 = c2;
        self
    }

    pub fn c3(mut self, c3: usize) -> Self {
        self.c3 = c3;
        self
    }

    pub fn c4(mut self, c4: usize) -> Self {
        self.c4 = c4;
        self
    }

    pub fn orbit_bound(mut self, orbit_bound: usize) -> Self {
        self.orbit_bound = orbit_bound;
        self
    }

    pub fn base_bound(mut self, base_bound: usize) -> Self {
        self.base_bound = base_bound;
        self
    }

    pub fn rng<K>(mut self, rng: K) -> RandomAlgoParameters<K> {
        RandomAlgoParameters {
            rng,
            c1: self.c1,
            c2: self.c2,
            c3: self.c3,
            c4: self.c4,
            orbit_bound: self.orbit_bound,
            base_bound: self.base_bound,
        }
    }

    pub fn consts(self) -> (Constants, R) {
        (
            Constants {
                c1: self.c1,
                c2: self.c2,
                c3: self.c3,
                c4: self.c4,
                orbit_bound: self.orbit_bound,
                base_bound: self.base_bound,
            },
            self.rng,
        )
    }
}

impl Default for RandomAlgoParameters {
    fn default() -> Self {
        RandomAlgoParameters {
            c1: 1,
            c2: 1,
            c3: 1,
            c4: 1,
            orbit_bound: 50,
            base_bound: 5,
            rng: rand::thread_rng(),
        }
    }
}
