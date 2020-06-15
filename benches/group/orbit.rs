use criterion::{criterion_group, BenchmarkId, Criterion};

const RANGE_OF_VALUES: [usize; 4] = [8, 16, 32, 64];

use stabchain::group::Group;

// Comparing different methods of obtaining an orbit ---------------------------

fn orbit_vs_factored_symmetric(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__orbit__orbit_vs_factored_symmetric");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("orbit", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| g.orbit(0));
        });
        group.bench_with_input(BenchmarkId::new("factored_transversal", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| g.factored_transversal(0).orbit());
        });
        group.bench_with_input(BenchmarkId::new("transversal", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| g.transversal(0).orbit());
        });
    }
    group.finish();
}

fn orbit_vs_factored_dihedral(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__orbit__orbit_vs_factored_dihedral");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("orbit", i), i, |b, i| {
            let g = Group::dihedral_2n(*i);
            b.iter(|| g.orbit(0));
        });
        group.bench_with_input(BenchmarkId::new("factored_transversal", i), i, |b, i| {
            let g = Group::dihedral_2n(*i);
            b.iter(|| g.factored_transversal(0).orbit());
        });
        group.bench_with_input(BenchmarkId::new("transversal", i), i, |b, i| {
            let g = Group::dihedral_2n(*i);
            b.iter(|| g.transversal(0).orbit());
        });
    }
    group.finish();
}

fn orbit_vs_factored_cyclic(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__orbit__orbit_vs_factored_cyclic");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("orbit", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| g.orbit(0));
        });
        group.bench_with_input(BenchmarkId::new("factored_transversal", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| g.factored_transversal(0).orbit());
        });
        group.bench_with_input(BenchmarkId::new("transversal", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| g.transversal(0).orbit());
        });
    }
    group.finish();
}

// Comparing representative calculation ---------------------------

fn transversal_vs_factored_symmetric(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__orbit__transversal_vs_factored_symmetric");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("factored_transversal", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| {
                let transversal = g.factored_transversal(0);
                let orbit = transversal.orbit().to_set().clone();
                orbit
                    .into_iter()
                    .map(|i| transversal.representative(i))
                    .collect::<Vec<_>>()
            });
        });
        group.bench_with_input(BenchmarkId::new("transversal", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| {
                let transversal = g.transversal(0);
                let orbit = transversal.orbit().to_set().clone();
                orbit
                    .into_iter()
                    .map(|i| transversal.representative(i))
                    .collect::<Vec<_>>()
            });
        });
    }
    group.finish();
}

fn transversal_vs_factored_dihedral(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__orbit__transversal_vs_factored_dihedral");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("factored_transversal", i), i, |b, i| {
            let g = Group::dihedral_2n(*i);
            b.iter(|| {
                let transversal = g.factored_transversal(0);
                let orbit = transversal.orbit().to_set().clone();
                orbit
                    .into_iter()
                    .map(|i| transversal.representative(i))
                    .collect::<Vec<_>>()
            });
        });
        group.bench_with_input(BenchmarkId::new("transversal", i), i, |b, i| {
            let g = Group::dihedral_2n(*i);
            b.iter(|| {
                let transversal = g.transversal(0);
                let orbit = transversal.orbit().to_set().clone();
                orbit
                    .into_iter()
                    .map(|i| transversal.representative(i))
                    .collect::<Vec<_>>()
            });
        });
    }
    group.finish();
}

fn transversal_vs_factored_cyclic(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__orbit__transversal_vs_factored_cyclic");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("factored_transversal", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| {
                let transversal = g.factored_transversal(0);
                let orbit = transversal.orbit().to_set().clone();
                orbit
                    .into_iter()
                    .map(|i| transversal.representative(i))
                    .collect::<Vec<_>>()
            });
        });
        group.bench_with_input(BenchmarkId::new("transversal", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| {
                let transversal = g.transversal(0);
                let orbit = transversal.orbit().to_set().clone();
                orbit
                    .into_iter()
                    .map(|i| transversal.representative(i))
                    .collect::<Vec<_>>()
            });
        });
    }
    group.finish();
}

criterion_group!(
    orbit,
    orbit_vs_factored_symmetric,
    orbit_vs_factored_dihedral,
    orbit_vs_factored_cyclic,
    transversal_vs_factored_symmetric,
    transversal_vs_factored_dihedral,
    transversal_vs_factored_cyclic,
);
