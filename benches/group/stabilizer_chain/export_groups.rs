use std::ops::RangeInclusive;

use std::fs::{metadata, File};
use std::io::{BufReader, BufWriter};
use std::path::PathBuf;

use stabchain::group::group_library::GAPGroup;

use criterion::{criterion_group, BenchmarkId, Criterion};
const RANGE_OF_VALUES: RangeInclusive<usize> = 1_usize..=50;
use stabchain::group::stabchain::base::selectors::DefaultSelector;
use stabchain::group::stabchain::builder::random::parameters::RandomAlgoParameters;
use stabchain::group::stabchain::builder::*;
use stabchain::group::Group;
use stabchain::perm::actions::SimpleApplication;

use num::BigUint;
use rand::SeedableRng;

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
    groups.iter().map(|g| g.to_group()).collect()
}

fn stabchain_primitive_one_trans(c: &mut Criterion) {
    let mut group = c.benchmark_group("group__stabchain__ss__primitive__one_trans");
    for i in RANGE_OF_VALUES {
        let path = format!("data/{}_deg_prim_oneTrans.json", i);
        let grps = import_groups(path.as_str());
        let id = BenchmarkId::new("default", i);
        for g in &grps {
            group.bench_with_input(id.clone(), g, |b, g| b.iter(|| g.stabchain()));
        }
    }
    group.finish();
}

criterion_group!(stabchain_group_export, stabchain_primitive_one_trans);
