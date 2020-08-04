pub mod selector;

use criterion::{criterion_group, BenchmarkId, Criterion};
const RANGE_OF_VALUES: [usize; 5] = [8, 10, 16, 20, 32];
use stabchain::group::stabchain::builder::*;
use stabchain::group::stabchain::moved_point_selector::{DefaultSelector, FmpSelector};
use stabchain::group::Group;
use stabchain::perm::actions::SimpleApplication;

///Macro for benchmarking a specific stabiliser chain strategy.
macro_rules! bench_stabchain_impl {
    ($bencher: ident, $name:expr, $i:ident, $group:tt, $strat:expr) => {
        $bencher.bench_with_input(BenchmarkId::new($name, $i), $i, |b, i| {
            let g = $group(i);
            let strat = $strat;
            b.iter(|| g.stabchain_with_strategy(strat.clone()))
        });
    };
}

fn stabchain_cyclic(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__stabchain__ss__cyclic");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("default", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| g.stabchain())
        });
        bench_stabchain_impl!(
            group,
            "naive",
            i,
            (|i: &usize| Group::cyclic(*i)),
            NaiveBuilderStrategy::new(SimpleApplication::default(), DefaultSelector::default())
        );
        bench_stabchain_impl!(
            group,
            "ift",
            i,
            (|i: &usize| Group::cyclic(*i)),
            IFTBuilderStrategy::new(SimpleApplication::default(), DefaultSelector::default())
        );
        bench_stabchain_impl!(
            group,
            "random",
            i,
            (|i: &usize| Group::cyclic(*i)),
            RandomBuilderStrategy::new(SimpleApplication::default(), FmpSelector::default())
        );
        bench_stabchain_impl!(
            group,
            "random_shallow",
            i,
            (|i: &usize| Group::cyclic(*i)),
            RandomBuilderStrategyShallow::new(SimpleApplication::default(), FmpSelector::default())
        );
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
        bench_stabchain_impl!(
            group,
            "naive",
            i,
            (|i: &usize| Group::symmetric(*i)),
            NaiveBuilderStrategy::new(SimpleApplication::default(), DefaultSelector::default())
        );
        bench_stabchain_impl!(
            group,
            "ift",
            i,
            (|i: &usize| Group::symmetric(*i)),
            IFTBuilderStrategy::new(SimpleApplication::default(), DefaultSelector::default())
        );
        bench_stabchain_impl!(
            group,
            "random",
            i,
            (|i: &usize| Group::symmetric(*i)),
            RandomBuilderStrategy::new(SimpleApplication::default(), FmpSelector::default())
        );
        bench_stabchain_impl!(
            group,
            "random_shallow",
            i,
            (|i: &usize| Group::symmetric(*i)),
            RandomBuilderStrategyShallow::new(SimpleApplication::default(), FmpSelector::default())
        );
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
        group.sample_size(20);
        bench_stabchain_impl!(
            group,
            "naive",
            i,
            (|i: &usize| Group::product(&Group::symmetric(*i), &Group::symmetric(*i))),
            NaiveBuilderStrategy::new(SimpleApplication::default(), DefaultSelector::default())
        );
        bench_stabchain_impl!(
            group,
            "ift",
            i,
            (|i: &usize| Group::product(&Group::symmetric(*i), &Group::symmetric(*i))),
            IFTBuilderStrategy::new(SimpleApplication::default(), DefaultSelector::default())
        );
        bench_stabchain_impl!(
            group,
            "random",
            i,
            (|i: &usize| Group::product(&Group::symmetric(*i), &Group::symmetric(*i))),
            RandomBuilderStrategy::new(SimpleApplication::default(), FmpSelector::default())
        );
        bench_stabchain_impl!(
            group,
            "random_shallow",
            i,
            (|i: &usize| Group::product(&Group::symmetric(*i), &Group::symmetric(*i))),
            RandomBuilderStrategyShallow::new(SimpleApplication::default(), FmpSelector::default())
        );
    }
    group.finish();
}

criterion_group!(
    stabchain,
    stabchain_cyclic,
    stabchain_symmetric,
    stabchain_direct_product_symm,
);
