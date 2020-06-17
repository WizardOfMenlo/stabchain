use criterion::criterion_main;

mod group;
mod perm;

use group::orbit;
use group::orbit::orbit_impl;
use perm::permutation;

criterion_main!(permutation, orbit, orbit_impl);
