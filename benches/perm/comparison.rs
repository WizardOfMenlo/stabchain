use criterion::{criterion_group, BenchmarkId, Criterion};
use stabchain::perm::utils::random_permutation;

use stabchain::perm::Permutation;

use stabchain::perm::impls::{
    based::BasedPermutation, map::MapPermutation, standard::StandardPermutation,
    sync::SyncPermutation, word::WordPermutation,
};

const RANGE_OF_VALUES: [usize; 7] = [8, 16, 32, 64, 128, 256, 512];

macro_rules! cmp_permutation {
    ($($types:ty, )*) => {
        fn random_instantiation(c: &mut Criterion) {
            let mut group = c.benchmark_group(concat!(
                "permutation__cmp__random_creation"
            ));
            for i in RANGE_OF_VALUES.iter() {
                $(
                group.bench_with_input(BenchmarkId::new(stringify!($types), i), i, |b, i| {
                    b.iter(|| random_permutation::<$types>(*i))
                });
                )*
            }

            group.finish();
        }

        fn simple_application(c: &mut Criterion) {
            let mut group = c.benchmark_group(concat!(
                "permutation__cmp__simple_application"
            ));
            for i in RANGE_OF_VALUES.iter() {
                $(
                group.bench_with_input(BenchmarkId::new(stringify!($types), i), i, |b, i| {
                    let first = random_permutation::<$types>(*i);
                    b.iter(|| (0..*i).map(|n| first.apply(n)).collect::<Vec<_>>())
                });
                )*
            }

            group.finish();
        }

        fn inverses(c: &mut Criterion) {
            let mut group = c.benchmark_group(concat!(
                "permutation__cmp__inverses"
            ));
            for i in RANGE_OF_VALUES.iter() {
                $(
                group.bench_with_input(BenchmarkId::new(stringify!($types), i), i, |b, i| {
                    let first = random_permutation::<$types>(*i);
                    b.iter(|| first.inv() )
                });
                )*
            }

            group.finish();
        }

        fn lmp(c: &mut Criterion) {
            let mut group = c.benchmark_group(concat!(
                "permutation__cmp__lmp"
            ));
            for i in RANGE_OF_VALUES.iter() {
                $(
                group.bench_with_input(BenchmarkId::new(stringify!($types), i), i, |b, i| {
                    let first = random_permutation::<$types>(*i);
                    b.iter(|| first.lmp() )
                });
                )*
            }

            group.finish();
        }

        fn lmp_multiple(c: &mut Criterion) {
            let mut group = c.benchmark_group(concat!(
                "permutation__cmp__lmp_multiple"
            ));
            for i in RANGE_OF_VALUES.iter() {
                $(
                group.bench_with_input(BenchmarkId::new(stringify!($types), i), i, |b, i| {
                    let perms : Vec<_> = (0..32).map(|_| random_permutation::<$types>(*i)).collect();
                    b.iter(|| perms.iter().fold(<$types>::id(), |acc, p| acc.multiply(p)).lmp() )
                });
                )*
            }

            group.finish();
        }

        fn single_multiplication(c: &mut Criterion) {
            let mut group = c.benchmark_group(concat!(
                "permutation__cmp__single_mult"
            ));
            for i in RANGE_OF_VALUES.iter() {
                $(
                group.bench_with_input(BenchmarkId::new(stringify!($types), i), i, |b, i| {
                    let first = random_permutation::<$types>(*i);
                    let second = random_permutation::<$types>(*i);
                    b.iter(|| first.multiply(&second) )
                });
                )*
            }

            group.finish();
        }

        fn multiple_multiplication(c: &mut Criterion) {
            let mut group = c.benchmark_group(concat!(
                "permutation__cmp__multiple_mult"
            ));
            for i in RANGE_OF_VALUES.iter() {
                $(
                group.bench_with_input(BenchmarkId::new(stringify!($types), i), i, |b, i| {
                    let perms : Vec<_> = (0..32).map(|_| random_permutation::<$types>(*i)).collect();
                    b.iter(|| perms.iter().fold(<$types>::id(), |acc, p| acc.multiply(p)) )
                });
                )*
            }

            group.finish();
        }

        fn multiple_multiplication_and_application(c: &mut Criterion) {
            let mut group = c.benchmark_group(concat!(
                "permutation__cmp__multiple_mult_and_appl"
            ));
            for i in RANGE_OF_VALUES.iter() {
                $(
                group.bench_with_input(BenchmarkId::new(stringify!($types), i), i, |b, i| {
                    let perms : Vec<_> = (0..32).map(|_| random_permutation::<$types>(*i)).collect();
                    b.iter(|| { let p = perms.iter().fold(<$types>::id(), |acc, p| acc.multiply(p));
                        (0..*i).map(|n| p.apply(n)).collect::<Vec<_>>()
                     } )
                });
                )*
            }

            group.finish();
        }

        fn order(c: &mut Criterion) {
            let mut group = c.benchmark_group(concat!(
                "permutation__cmp__order"
            ));
            for i in RANGE_OF_VALUES.iter() {
                $(
                group.bench_with_input(BenchmarkId::new(stringify!($types), i), i, |b, i| {
                    let first = random_permutation::<$types>(*i);
                    b.iter(|| first.order())
                });
                )*
            }

            group.finish();
        }

        fn shift(c: &mut Criterion) {
            let mut group = c.benchmark_group(concat!(
                "permutation__cmp__shift"
            ));
            for i in RANGE_OF_VALUES.iter() {
                $(
                group.bench_with_input(BenchmarkId::new(stringify!($types), i), i, |b, i| {
                    let first = random_permutation::<$types>(*i);
                    b.iter(|| first.shift(i / 2));
                });
                )*
            }

            group.finish();
        }

    };
}

cmp_permutation!(
    StandardPermutation,
    SyncPermutation,
    BasedPermutation,
    MapPermutation,
    WordPermutation,
);

criterion_group!(
    cmp,
    random_instantiation,
    simple_application,
    inverses,
    single_multiplication,
    multiple_multiplication,
    multiple_multiplication_and_application,
    lmp,
    lmp_multiple,
    order,
    shift
);
