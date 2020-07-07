use criterion::{criterion_group, BenchmarkId, Criterion};
const RANGE_OF_VALUES: [usize; 4] = [8, 16, 32, 64];
#[allow(deprecated)]
use stabchain::group::brute_force::group_elements;
use stabchain::group::Group;

#[allow(deprecated)]
fn brute_force_vs_orbit_symmetric(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__bruteforce__classic_vs_orbit_symm");
    for i in [3, 4, 5].iter() {
        group.bench_with_input(BenchmarkId::new("classic", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| group_elements(&g));
        });
        group.bench_with_input(BenchmarkId::new("orbit", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| g.bruteforce_elements());
        });
    }
    group.finish();
}

#[allow(deprecated)]
fn brute_force_vs_orbit_cyclic(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__bruteforce__classic_vs_orbit_cyclic");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("classic", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| group_elements(&g));
        });
        group.bench_with_input(BenchmarkId::new("orbit", i), i, |b, i| {
            let g = Group::cyclic(*i);
            b.iter(|| g.bruteforce_elements());
        });
    }
    group.finish();
}

criterion_group!(
    bruteforce,
    brute_force_vs_orbit_cyclic,
    brute_force_vs_orbit_symmetric
);
