use criterion::criterion_main;

mod group;
mod perm;

use group::orbit::orbit;
use perm::permutation;

criterion_main!(permutation, orbit);
