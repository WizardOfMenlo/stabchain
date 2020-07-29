use std::fs::File;
use std::io::BufReader;

use lazy_static::lazy_static;
use rand::seq::IteratorRandom;
use rayon::prelude::*;

use stabchain::group::group_library::DecoratedGroup;
use stabchain::group::orbit::transversal::valid_transversal;
use stabchain::group::stabchain::valid_stabchain;
use stabchain::perm::export::ExportablePermutation;
use stabchain::perm::impls::sync::SyncPermutation;

// We use this to limit the number of groups to test
const DEFAULT_LIMIT: usize = 1000;

lazy_static! {
    static ref GROUP_LIBRARY: Vec<DecoratedGroup<SyncPermutation>> =
        load_libraries(&["data/small.json", "data/transitive.json"]);
    static ref LIMIT: usize = std::env::var("STABCHAIN_GROUP_TESTING_LIMIT")
        .ok()
        .and_then(|s| s.parse::<usize>().ok())
        .unwrap_or(DEFAULT_LIMIT);
    static ref NO_LIMIT: bool = std::env::var("STABCHAIN_GROUP_TESTING_NO_LIMIT").is_ok();
}

fn load_libraries(paths: &[&str]) -> Vec<DecoratedGroup<SyncPermutation>> {
    paths.iter().map(|p| group_library(*p)).flatten().collect()
}

fn group_library(path: &str) -> impl IntoIterator<Item = DecoratedGroup<SyncPermutation>> {
    let input = File::open(path).unwrap();
    let input = BufReader::new(input);

    let groups: Vec<DecoratedGroup<ExportablePermutation>> =
        serde_json::from_reader(input).unwrap();
    groups.into_iter().map(|g| g.map(SyncPermutation::from))
}

fn general_test<F, E>(name: &str, validator: F)
where
    F: Fn(DecoratedGroup<SyncPermutation>) -> Result<(), E> + Send + Sync,
    E: std::fmt::Debug + Send,
{
    let mut rng = rand::thread_rng();

    let groups = if *NO_LIMIT {
        GROUP_LIBRARY.to_vec()
    } else {
        GROUP_LIBRARY
            .iter()
            .cloned()
            .choose_multiple(&mut rng, *LIMIT)
    };

    let errors = groups
        .par_iter()
        .cloned()
        .map(|g| {
            let validation = validator(g.clone());
            if validation.is_err() {
                let err = validation.unwrap_err();
                println!("[{}] Error {:?}", name, &err);
                println!("[{}] Error on {}", name, g.group());
                Some((g, err))
            } else {
                None
            }
        })
        .flatten()
        .collect::<Vec<_>>();

    println!("[{}] {} errors out of {}", name, errors.len(), *LIMIT);
    assert_eq!(errors.len(), 0);
}

#[test]
fn test_transversals() {
    general_test("transversal", |g| {
        let transversal = g.group().transversal(0);
        valid_transversal(&transversal)
    })
}

#[test]
fn test_stabilizer() {
    general_test("stabilizer", |g| {
        let stabilizer = g.group().stabchain();
        assert_eq!(&stabilizer.order(), g.order());
        valid_stabchain(&stabilizer)
    });
}

#[test]
fn test_stabilizer_ift() {
    use stabchain::group::stabchain::builder::IFTBuilderStrategy;
    use stabchain::group::stabchain::moved_point_selector::LmpSelector;
    use stabchain::perm::actions::SimpleApplication;

    general_test("ift_stabilizer", |g| {
        let stabilizer = g.group().stabchain_with_strategy(IFTBuilderStrategy::new(
            SimpleApplication::default(),
            LmpSelector::default(),
        ));

        assert_eq!(&stabilizer.order(), g.order());
        valid_stabchain(&stabilizer)
    });
}
