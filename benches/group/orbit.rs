use criterion::{criterion_group, BenchmarkId, Criterion};

const RANGE_OF_VALUES: [usize; 7] = [8, 16, 32, 64, 128, 256, 512];

use stabchain::group::Group;

/// Checks the common case of computing (a * b)^-1 = b^-1 * a^-1
fn orbit_vs_factored_symmetric(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__orbit__orbit_vs_factored_symmetric");
    for i in RANGE_OF_VALUES.iter() {
        group.bench_with_input(BenchmarkId::new("orbit", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| g.orbit(0));
        });
        group.bench_with_input(BenchmarkId::new("factored_transversal", i), i, |b, i| {
            let g = Group::symmetric(*i);
            b.iter(|| g.factored_transversal(0).orbit().collect::<Vec<_>>());
        });
    }
    group.finish();
}

criterion_group!(orbit, orbit_vs_factored_symmetric);
