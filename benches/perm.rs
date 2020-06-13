use criterion::{black_box, criterion_group, BenchmarkId, Criterion};

use stabchain::perm::utils::random_permutation;
use stabchain::perm::Permutation;

const RANGE_OF_VALUES: [usize; 7] = [8, 16, 32, 64, 128, 256, 512];

/// How costly is it to instantiate a random permutation
fn random_instantiation(c: &mut Criterion) {
    let mut group = c.benchmark_group("permutation__random_creation");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            b.iter(|| random_permutation(*i))
        });
    }

    group.finish();
}

/// Checks the common case of computing (a * b)^-1 = b^-1 * a^-1
fn inverse_of_product(c: &mut Criterion) {
    use stabchain::perm::algos::inv;
    let mut group = c.benchmark_group("permutation__inv_prod");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let first = random_permutation(*i);
            let second = random_permutation(*i);
            b.iter(|| black_box(inv(&first.multiply(&second))))
        });
        group.bench_with_input(
            BenchmarkId::new("permutation__prod_of_inv", i),
            i,
            |b, i| {
                let first = random_permutation(*i);
                let second = random_permutation(*i);
                b.iter(|| {
                    let first = inv(&first);
                    let second = inv(&second);

                    second.multiply(&first)
                })
            },
        );
    }
    group.finish();
}

/// Benchmark the check of an identity, although this should be constant due to it being an empty check.
fn identity_check(c: &mut Criterion) {
    let id = Permutation::id();
    c.bench_function("permutation__is_id", |b| b.iter(|| id.is_id()));
}

/// Benchmarking for inverting of elements.
fn inverse(c: &mut Criterion) {
    use stabchain::perm::algos::inv;
    let mut group = c.benchmark_group("permutation__inverse");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let perm = random_permutation(*i);
            b.iter(|| inv(&perm))
        });
    }
    group.finish();
}

criterion_group!(
    permutation,
    random_instantiation,
    inverse_of_product,
    identity_check,
    inverse
);
