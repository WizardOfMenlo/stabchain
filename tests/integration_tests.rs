use std::fs::File;
use std::io::BufReader;

use lazy_static::lazy_static;

use rand::seq::IteratorRandom;

use stabchain::group::orbit::transversal::valid_transversal;
use stabchain::group::stabchain::valid_stabchain;
use stabchain::group::Group;
use stabchain::perm::export::ExportablePermutation;
use stabchain::perm::DefaultPermutation;

// We use this to limit the number of groups to test
const LIMIT: usize = 1000;

lazy_static! {
    static ref GROUP_LIBRARY: Vec<Group<ExportablePermutation>> = group_library();
}

fn group_library() -> Vec<Group<ExportablePermutation>> {
    let input = File::open("data/groups.json").unwrap();
    let input = BufReader::new(input);

    let groups: Vec<Group<ExportablePermutation>> = serde_json::from_reader(input).unwrap();
    groups.into_iter().collect()
}

fn general_test<F, E>(mut validator: F)
where
    F: FnMut(Group) -> Result<(), E>,
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
        let validation = validator(g);
        if validation.is_err() {
            let err = validation.unwrap_err();
            println!("{:?}", &err);
            errors.push(err);
        }
    }

    println!("{} errors out of {}", errors.len(), LIMIT);
    assert_eq!(errors.len(), 0);
}

#[test]
fn test_transversals() {
    general_test(|g| {
        let transversal = g.transversal(0);
        valid_transversal(&transversal)
    })
}

#[test]
fn test_stabilizer() {
    general_test(|g| {
        let stabilizer = g.stabchain();
        valid_stabchain(&stabilizer)
    });
}

#[test]
fn test_stabilizer_ift() {
    use stabchain::group::stabchain::builder::IFTBuilderStrategy;
    use stabchain::group::stabchain::moved_point_selector::LmpSelector;
    use stabchain::perm::actions::SimpleApplication;

    general_test(|g| {
        let stabilizer = g.stabchain_with_strategy(IFTBuilderStrategy::new(
            SimpleApplication::default(),
            LmpSelector::default(),
        ));

        valid_stabchain(&stabilizer)
    });
}
