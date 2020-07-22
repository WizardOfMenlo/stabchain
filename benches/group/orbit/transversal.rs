use criterion::{criterion_group, BenchmarkId, Criterion};

const RANGE_OF_VALUES: [usize; 4] = [8, 16, 32, 64];

use stabchain::group::orbit::transversal::simple_transversal::{
    transversal, transversal_complete_opt,
};
use stabchain::group::Group;
use stabchain::perm::actions::SimpleApplication;

// Comparing orbit optimizations

fn transversal_vs_optmized_transversal_complete(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__orbit__transversal_vs_optmized_transversal_complete");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("transversal", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| transversal(&g, 0, &SimpleApplication::default()));
        });
        group.bench_with_input(BenchmarkId::new("transversal_optmized", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| transversal_complete_opt(&g, 0, &SimpleApplication::default()));
        });
    }
    group.finish();
}

fn transversal_vs_optmized_transversal_complete_many_generators(c: &mut Criterion) {
    let mut group =
        c.benchmark_group("group__orbit__transversal_vs_optmized_transversal_complete_many_gens");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("transversal", i), i, |b, i| {
            let g = Group::alternating(*i);
            b.iter(|| transversal(&g, 0, &SimpleApplication::default()));
        });
        group.bench_with_input(BenchmarkId::new("transversal_optmized", i), i, |b, i| {
            let g = Group::alternating(*i);
            b.iter(|| transversal_complete_opt(&g, 0, &SimpleApplication::default()));
        });
    }
    group.finish();
}

fn transversal_vs_optmized_transversal_uncomplete(c: &mut Criterion) {
    use stabchain::group::utils::copies_of_cyclic;

    let mut group =
        c.benchmark_group("group__orbit__transversal_vs_optmized_transversal_uncomplete");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("transversal", i), i, |b, i| {
            let g = copies_of_cyclic(&[*i, 20, 20]);
            b.iter(|| transversal(&g, 0, &SimpleApplication::default()));
        });
        group.bench_with_input(BenchmarkId::new("transversal_optmized", i), i, |b, i| {
            let g = copies_of_cyclic(&[*i, 20, 20]);
            b.iter(|| transversal_complete_opt(&g, 0, &SimpleApplication::default()));
        });
    }
    group.finish();
}

criterion_group!(
    transversal_impl,
    transversal_vs_optmized_transversal_complete,
    transversal_vs_optmized_transversal_complete_many_generators,
    transversal_vs_optmized_transversal_uncomplete
);
