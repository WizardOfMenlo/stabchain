pub mod selector;

use criterion::{criterion_group, BenchmarkId, Criterion};
const RANGE_OF_VALUES: [usize; 5] = [8, 10, 16, 20, 32];
use stabchain::group::stabchain::builder::{IFTBuilderStrategy, NaiveBuilderStrategy};
use stabchain::group::stabchain::moved_point_selector::DefaultSelector;
use stabchain::group::Group;

fn stabchain_cyclic(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__stabchain__ss__cyclic");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| g.stabchain())
        });
        group.bench_with_input(BenchmarkId::new("naive", i), i, |b, i| {
            let g = Group::cyclic(*i);
            let strat = NaiveBuilderStrategy::new(DefaultSelector::default());
            b.iter(|| g.stabchain_with_strategy(strat.clone()))
        });
        group.bench_with_input(BenchmarkId::new("ift", i), i, |b, i| {
            let g = Group::cyclic(*i);
            let strat = IFTBuilderStrategy::new(DefaultSelector::default());
            b.iter(|| g.stabchain_with_strategy(strat.clone()))
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
        group.bench_with_input(BenchmarkId::new("naive", i), i, |b, i| {
            let g = Group::symmetric(*i);
            let strat = NaiveBuilderStrategy::new(DefaultSelector::default());
            b.iter(|| g.stabchain_with_strategy(strat.clone()))
        });
        group.bench_with_input(BenchmarkId::new("ift", i), i, |b, i| {
            let g = Group::symmetric(*i);
            let strat = IFTBuilderStrategy::new(DefaultSelector::default());
            b.iter(|| g.stabchain_with_strategy(strat.clone()))
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
        group.bench_with_input(BenchmarkId::new("naive", i), i, |b, i| {
            let g = Group::product(&Group::symmetric(*i), &Group::symmetric(*i));
            let strat = NaiveBuilderStrategy::new(DefaultSelector::default());
            b.iter(|| g.stabchain_with_strategy(strat.clone()))
        });
        group.bench_with_input(BenchmarkId::new("ift", i), i, |b, i| {
            let g = Group::product(&Group::symmetric(*i), &Group::symmetric(*i));
            let strat = IFTBuilderStrategy::new(DefaultSelector::default());
            b.iter(|| g.stabchain_with_strategy(strat.clone()))
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
