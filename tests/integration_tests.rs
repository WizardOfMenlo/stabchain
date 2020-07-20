use std::fs::File;
use std::io::BufReader;

use lazy_static::lazy_static;

use rand::seq::IteratorRandom;

use stabchain::group::group_library::DecoratedGroup;
use stabchain::group::orbit::transversal::valid_transversal;
use stabchain::group::stabchain::valid_stabchain;
use stabchain::perm::export::ExportablePermutation;
use stabchain::perm::DefaultPermutation;

// We use this to limit the number of groups to test
const LIMIT: usize = 1000;

lazy_static! {
    static ref GROUP_LIBRARY: Vec<DecoratedGroup<ExportablePermutation>> = group_library();
}

fn group_library() -> Vec<DecoratedGroup<ExportablePermutation>> {
    let input = File::open("data/groups.json").unwrap();
    let input = BufReader::new(input);

    let groups: Vec<DecoratedGroup<ExportablePermutation>> =
        serde_json::from_reader(input).unwrap();
    groups.into_iter().collect()
}

fn general_test<F, E>(name: &str, mut validator: F)
where
    F: FnMut(DecoratedGroup) -> Result<(), E>,
    E: std::fmt::Debug,
{
    let mut rng = rand::thread_rng();
    let mut errors = Vec::new();
    for g in GROUP_LIBRARY
        .iter()
        .cloned()
        .map(|g| g.map(DefaultPermutation::from))
        .choose_multiple(&mut rng, LIMIT)
    {
        let validation = validator(g.clone());
        if validation.is_err() {
            let err = validation.unwrap_err();
            println!("[{}] Error {:?}", name, &err);
            println!("[{}] Error on {}", name, g.group());
            errors.push((g, err));
        }
    }

    println!("[{}] {} errors out of {}", name, errors.len(), LIMIT);
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

        valid_stabchain(&stabilizer)
    });
}
