use criterion::{criterion_group, BenchmarkId, Criterion};

const RANGE_OF_VALUES: [usize; 4] = [8, 16, 32, 64];

use stabchain::group::Group;

// Comparing orbit optimizations

fn orbit_vs_optmized_orbit_complete(c: &mut Criterion) {
    use stabchain::group::orbit::{orbit, orbit_complete_opt};

    let mut group = c.benchmark_group("group__orbit__orbit_vs_optmized_orbit_complete");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("orbit", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| orbit(&g, 0));
        });
        group.bench_with_input(BenchmarkId::new("orbit_optmized", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| orbit_complete_opt(&g, 0));
        });
    }
    group.finish();
}

fn orbit_vs_optmized_orbit_complete_many_generators(c: &mut Criterion) {
    use stabchain::group::orbit::{orbit, orbit_complete_opt};

    let mut group = c.benchmark_group("group__orbit__orbit_vs_optmized_orbit_complete_many_gens");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("orbit", i), i, |b, i| {
            let g = Group::alternating(*i);
            b.iter(|| orbit(&g, 0));
        });
        group.bench_with_input(BenchmarkId::new("orbit_optmized", i), i, |b, i| {
            let g = Group::alternating(*i);
            b.iter(|| orbit_complete_opt(&g, 0));
        });
    }
    group.finish();
}

fn orbit_vs_optmized_orbit_uncomplete(c: &mut Criterion) {
    use stabchain::group::orbit::{orbit, orbit_complete_opt};
    use stabchain::group::utils::copies_of_cyclic;

    let mut group = c.benchmark_group("group__orbit__orbit_vs_optmized_orbit_uncomplete");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("orbit", i), i, |b, i| {
            let g = copies_of_cyclic(&[*i, 20, 20]);
            b.iter(|| orbit(&g, 0));
        });
        group.bench_with_input(BenchmarkId::new("orbit_optmized", i), i, |b, i| {
            let g = copies_of_cyclic(&[*i, 20, 20]);
            b.iter(|| orbit_complete_opt(&g, 0));
        });
    }
    group.finish();
}

criterion_group!(
    orbit_impl,
    orbit_vs_optmized_orbit_complete,
    orbit_vs_optmized_orbit_uncomplete,
    orbit_vs_optmized_orbit_complete_many_generators
);
