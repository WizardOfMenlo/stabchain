use criterion::{criterion_group, BenchmarkId, Criterion};
const RANGE_OF_VALUES: [usize; 5] = [8, 10, 16, 20, 32];
use stabchain::group::stabchain::base::selectors::{FixedBaseSelector, LmpSelector};
use stabchain::group::Group;
use std::iter::FromIterator;

fn selector_comparison_cyclic(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__stabchain__ss__selector_comparison__cyclic");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| g.stabchain())
        });
        group.bench_with_input(BenchmarkId::new("lmp", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| g.stabchain_with_selector(LmpSelector))
        });
        group.bench_with_input(BenchmarkId::new("fixed", i), i, |b, i| {
            let g = Group::cyclic(*i);
            let selector = FixedBaseSelector::from_iter(0..g.symmetric_super_order());
            b.iter(|| g.stabchain_with_selector(selector.clone()))
        });
    }
    group.finish();
}

fn selector_comparison_symmetric(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__stabchain__ss__selector_comparison__symmetric");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| g.stabchain())
        });
        group.bench_with_input(BenchmarkId::new("lmp", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| g.stabchain_with_selector(LmpSelector))
        });
        group.bench_with_input(BenchmarkId::new("fixed", i), i, |b, i| {
            let g = Group::symmetric(*i);
            let selector = FixedBaseSelector::from_iter(0..g.symmetric_super_order());
            b.iter(|| g.stabchain_with_selector(selector.clone()))
        });
    }
    group.finish();
}

fn selector_comparison_direct_product(c: &mut Criterion) {
    let mut group =
        c.benchmark_group("group__stabchain__ss__selector_comparison__product_symmetric");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let g = Group::direct_product(&Group::symmetric(*i), &Group::symmetric(*i));
            b.iter(|| g.stabchain())
        });
        group.bench_with_input(BenchmarkId::new("naive", i), i, |b, i| {
            let g = Group::direct_product(&Group::symmetric(*i), &Group::symmetric(*i));
            b.iter(|| g.stabchain_with_selector(LmpSelector))
        });
        group.bench_with_input(BenchmarkId::new("ift", i), i, |b, i| {
            let g = Group::direct_product(&Group::symmetric(*i), &Group::symmetric(*i));
            let selector = FixedBaseSelector::from_iter(0..g.symmetric_super_order());
            b.iter(|| g.stabchain_with_selector(selector.clone()))
        });
    }
    group.finish();
}

criterion_group!(
    selector,
    selector_comparison_cyclic,
    selector_comparison_symmetric,
    selector_comparison_direct_product
);
