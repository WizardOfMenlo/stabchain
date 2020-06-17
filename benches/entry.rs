use criterion::criterion_main;

mod group;
mod perm;

use group::orbit::{orbit, orbit_impl};
use perm::permutation;

criterion_main!(permutation, orbit, orbit_impl);
