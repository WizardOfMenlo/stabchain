use criterion::criterion_main;

mod group;
mod perm;

use group::orbit;
use group::orbit::{
    factored_transversal::factored_transversal_impl, orbit_impl, transversal::transversal_impl,
};

use group::stabilizer_chain::stabchain;

use perm::permutation;

criterion_main!(
    permutation,
    orbit,
    orbit_impl,
    transversal_impl,
    factored_transversal_impl,
    stabchain
);
