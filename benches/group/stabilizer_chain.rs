use criterion::{criterion_group, BenchmarkId, Criterion};
const RANGE_OF_VALUES: [usize; 5] = [8, 10, 16, 20, 32];
use stabchain::group::Group;

fn stabchain_cyclic(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__stabchain__ss__cyclic");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| g.stabchain())
        });
    }
    group.finish();
}

fn stabchain_symmetric(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__stabchain__ss__symmetric");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| g.stabchain())
        });
    }
    group.finish();
}

fn stabchain_direct_product_symm(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__stabchain__ss__product_symmetric");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let g = Group::product(&Group::symmetric(*i), &Group::symmetric(*i));
            b.iter(|| g.stabchain())
        });
    }
    group.finish();
}

criterion_group!(
    stabchain,
    stabchain_cyclic,
    stabchain_symmetric,
    stabchain_direct_product_symm,
);
