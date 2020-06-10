use criterion::{black_box, criterion_group, criterion_main, BenchmarkId, Criterion};

use stabchain::perm::utils::random_permutation;
use stabchain::perm::Permutation;

pub fn inverse_of_product(c: &mut Criterion) {
    let mut group = c.benchmark_group("inv_prod");
    for i in [8, 16, 32, 64, 128, 256, 512].iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let first = random_permutation(*i);
            let second = random_permutation(*i);
            b.iter(|| black_box(first.multiply(&second).inv()))
        });
        // Note this benchmark is actually unfair, as first and second are cached
        group.bench_with_input(BenchmarkId::new("prod_of_inv", i), i, |b, i| {
            let first = random_permutation(*i);
            let second = random_permutation(*i);
            b.iter(|| black_box(second.inv().multiply(&first.inv())))
        });
    }
    group.finish();
}

/// Benchmark the check of an identity, although this should be constant due to it being an empty check.
pub fn identity_check(c: &mut Criterion) {
    let id = Permutation::id();
    c.bench_function("is_id", |b| b.iter(|| id.is_id()));
}

/// Benchmarking for inverting of elements.
pub fn inverse(c: &mut Criterion) {
    let mut group = c.benchmark_group("inverse");
    for i in [8, 16, 32, 64, 128, 256, 512].iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let perm = random_permutation(*i);
            b.iter(|| black_box(perm.inv()))
        });
    }
    group.finish();
}

criterion_group!(benches, inverse_of_product, identity_check, inverse);
criterion_main!(benches);
