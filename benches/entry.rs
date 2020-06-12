use criterion::criterion_main;

mod group;
mod perm;

use perm::permutation;

criterion_main!(permutation);
