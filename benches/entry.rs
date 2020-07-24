use criterion::criterion_main;

mod group;
mod perm;

use group::bruteforce_elements::bruteforce;
use group::orbit;
use group::orbit::{
    factored_transversal::factored_transversal_impl, orbit_impl, transversal::transversal_impl,
};

use group::stabilizer_chain::{selector::selector, stabchain};

use perm::{comparison::cmp, permutation};

criterion_main!(
    permutation,
    cmp,
    orbit,
    orbit_impl,
    bruteforce,
    transversal_impl,
    factored_transversal_impl,
    stabchain,
    selector
);
