use std::ops::RangeInclusive;

use std::fs::File;
use std::io::BufReader;
use std::path;

use stabchain::group::group_library::GAPGroup;

use criterion::{criterion_group, BatchSize, BenchmarkId, Criterion};
const RANGE_OF_VALUES: RangeInclusive<usize> = 200_usize..=260;
use stabchain::group::stabchain::base::selectors::DefaultSelector;
use stabchain::group::stabchain::builder::random::parameters::RandomAlgoParameters;
use stabchain::group::stabchain::builder::*;
use stabchain::group::Group;
use stabchain::perm::actions::SimpleApplication;
use stabchain::perm::DefaultPermutation;

use num::BigUint;
use rand::seq::SliceRandom;
use rand::SeedableRng;

///Macro for benchmarking a specific stabiliser chain strategy.
macro_rules! bench_stabchain_impl {
    ($bencher: ident, $name:expr, $i:ident, $strat:expr, $setup:tt) => {
        $bencher.bench_with_input(BenchmarkId::new($name, $i), &$i.clone(), |b, _i| {
            let strat = $strat;
            b.iter_batched(
                $setup,
                |g| g.stabchain_with_strategy(strat.clone()),
                BatchSize::SmallInput,
            )
        });
    };
}

///Macro for benchmarking a specific stabiliser chain strategy with a known order.
macro_rules! bench_stabchain_impl_with_order {
    ($bencher: ident, $name:expr, $i:ident, $group:tt, $strat:expr) => {
        $bencher.bench_with_input(BenchmarkId::new($name, $i), $i, |b, i| {
            let g = $group.clone();
            let strat = $strat(g.stabchain().order());
            b.iter(|| g.stabchain_with_strategy(strat.clone()))
        });
    };
}

fn import_groups(path: &str) -> Vec<Group> {
    let file = File::open(path);
    let reader = BufReader::new(file.unwrap());
    let groups: Vec<GAPGroup> = serde_json::from_reader(reader).unwrap();
    groups.iter().map(move |g| g.to_group()).collect()
}

fn stabchain_primitive_one_trans(c: &mut Criterion) {
    stabchain_primitive_template(c, "one_trans", "_deg_prim_oneTrans")
}

fn stabchain_primitive_trans(c: &mut Criterion) {
    stabchain_primitive_template(c, "trans", "_deg_prim")
}

fn stabchain_primitive_template(c: &mut Criterion, name: &str, path_start: &str) {
    let mut rand;
    let mut group = c.benchmark_group(format!("group__stabchain__ss__primitive__{}", name));
    for i in RANGE_OF_VALUES {
        let path = format!("data/{}{}.json", i, path_start);
        let grps = import_groups(path.as_str());
        if grps.len() == 0 {
            continue;
        }
        // Reseed each time to ensure we have the same groups for each implementation.
        rand = rand_xorshift::XorShiftRng::from_seed([(i % (u8::MAX as usize)) as u8; 16]);
        bench_stabchain_impl!(
            group,
            "naive",
            i,
            NaiveBuilderStrategy::new(
                SimpleApplication::<DefaultPermutation>::default(),
                DefaultSelector::default()
            ),
            (|| grps.choose(&mut rand).unwrap().clone())
        );
        rand = rand_xorshift::XorShiftRng::from_seed([32; 16]);
        bench_stabchain_impl!(
            group,
            "ift",
            i,
            IftBuilderStrategy::new(
                SimpleApplication::<DefaultPermutation>::default(),
                DefaultSelector::default()
            ),
            (|| grps.choose(&mut rand).unwrap().clone())
        );
        rand = rand_xorshift::XorShiftRng::from_seed([32; 16]);
        bench_stabchain_impl!(
            group,
            "random_shallow",
            i,
            RandomBuilderStrategyShallow::new_with_params(
                SimpleApplication::default(),
                DefaultSelector::default(),
                RandomAlgoParameters::default()
                    .rng(rand_xorshift::XorShiftRng::from_seed([42; 16])),
            ),
            (|| grps.choose(&mut rand).unwrap().clone())
        );
        rand = rand_xorshift::XorShiftRng::from_seed([32; 16]);
        bench_stabchain_impl!(
            group,
            "random_shallow_quick_test",
            i,
            RandomBuilderStrategyShallow::new_with_params(
                SimpleApplication::default(),
                DefaultSelector::default(),
                RandomAlgoParameters::default()
                    .quick_test(true)
                    .rng(rand_xorshift::XorShiftRng::from_seed([42; 16])),
            ),
            (|| grps.choose(&mut rand).unwrap().clone())
        );
    }
    group.finish();
}

criterion_group!(
    stabchain_group_export,
    //stabchain_primitive_one_trans,
    stabchain_primitive_trans
);
