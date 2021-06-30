use stabchain::group::Group;
use std::str::FromStr;
use structopt::StructOpt;

use stabchain::group::stabchain::base::selectors::LmpSelector;
use stabchain::group::stabchain::builder::*;
use stabchain::perm::actions::SimpleApplication;
use stabchain::perm::*;

use std::time::Instant;

use criterion::black_box;

use tracing::Level;

#[derive(Debug)]
enum RunMode {
    Deterministic,
    DeterministicIFT,
    RandomShallow,
}

impl FromStr for RunMode {
    type Err = String;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        Ok(match s {
            "deterministic" => RunMode::Deterministic,
            "ift" => RunMode::DeterministicIFT,
            "shallow" => RunMode::RandomShallow,
            _ => return Err("Could not parse".to_string()),
        })
    }
}

#[derive(StructOpt)]
struct Arguments {
    #[structopt(short, long)]
    mode: RunMode,
    #[structopt(short, long)]
    debug: bool,
}

fn run<S: BuilderStrategy<DefaultPermutation> + Clone>(g: Group<DefaultPermutation>, strategy: S) {
    let start = Instant::now();
    let stabchain = g.stabchain_with_strategy(strategy.clone());
    black_box(stabchain);
    let duration = start.elapsed();
    println!("Finished in {:?}", duration);
}

fn main() {
    let args = Arguments::from_args();

    if args.debug {
        tracing_subscriber::fmt()
            .with_max_level(Level::DEBUG)
            .init();
    }

    let g = Group::symmetric(10);

    #[allow(deprecated)]
    match args.mode {
        RunMode::Deterministic => run(
            g,
            DefaultStrategy::new(SimpleApplication::default(), LmpSelector::default()),
        ),
        RunMode::DeterministicIFT => run(
            g,
            IftBuilderStrategy::new(SimpleApplication::default(), LmpSelector::default()),
        ),
        RunMode::RandomShallow => run(
            g,
            RandomBuilderStrategyShallow::new(SimpleApplication::default(), LmpSelector::default()),
        ),
    }
}
