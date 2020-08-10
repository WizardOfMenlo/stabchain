use rand::rngs::ThreadRng;

#[derive(Debug, Clone)]
pub struct RandomAlgoParameters<R = ThreadRng> {
    c1: usize,
    c2: usize,
    c3: usize,
    c4: usize,
    orbit_bound: usize,
    base_bound: usize,
    quick_test: bool,
    rng: R,
}

#[derive(Debug, Clone)]
pub struct Constants {
    pub c1: usize,
    pub c2: usize,
    pub c3: usize,
    pub c4: usize,
    pub orbit_bound: usize,
    pub base_bound: usize,
    pub quick_test: bool,
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

    pub fn quick_test(mut self, quick_test: bool) -> Self {
        self.quick_test = quick_test;
        self
    }

    pub fn rng<K>(self, rng: K) -> RandomAlgoParameters<K> {
        RandomAlgoParameters {
            rng,
            c1: self.c1,
            c2: self.c2,
            c3: self.c3,
            c4: self.c4,
            orbit_bound: self.orbit_bound,
            base_bound: self.base_bound,
            quick_test: self.quick_test,
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
                quick_test: self.quick_test,
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
            quick_test: false,
            rng: rand::thread_rng(),
        }
    }
}
