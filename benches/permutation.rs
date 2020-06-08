use criterion::{black_box, criterion_group, criterion_main, BenchmarkId, Criterion};

use stabchain::perm::utils::random_permutation;

pub fn inverse_of_product(c: &mut Criterion) {
    let mut group = c.benchmark_group("Inverse of Product");
    for i in [8, 16, 32, 64, 128, 256, 512].iter() {
        // TODO: This should probably be some random permutation
        group.bench_with_input(BenchmarkId::new("(a * b)^-1", i), i, |b, i| {
            let first = random_permutation(*i);
            let second = random_permutation(*i);
            b.iter(|| black_box(first.multiply(&second).inv()))
        });
        group.bench_with_input(BenchmarkId::new("b^-1 * a^-1", i), i, |b, i| {
            let first = random_permutation(*i);
            let second = random_permutation(*i);
            b.iter(|| black_box(second.inv().multiply(&first.inv())))
        });
    }
    group.finish();
}

criterion_group!(benches, inverse_of_product);
criterion_main!(benches);
