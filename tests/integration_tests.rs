use std::fs::File;
use std::io::BufReader;

use lazy_static::lazy_static;

use stabchain::group::Group;
use stabchain::group::orbit::transversal::valid_transversal;
use stabchain::group::stabchain::valid_stabchain;
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
    groups
        .into_iter()
        .take(LIMIT)
        .collect()
}

#[test]
fn test_transversals() {
    let mut errors = 0;
    for g in GROUP_LIBRARY.iter().cloned().map(|g| g.map(DefaultPermutation::from)) {
        let transversal = g.transversal(0);
        let validation = valid_transversal(&transversal);
        if validation.is_err() {
            errors += 1;
            println!("{:?}", validation.unwrap_err());
        } 
    }

    println!("{} errors out of {}", errors, LIMIT);
    assert_eq!(errors, 0);
}

#[test]
fn test_stabilizer() {
    let mut errors = 0;
    for g in GROUP_LIBRARY.iter().cloned().map(|g| g.map(DefaultPermutation::from)) {
        let transversal = g.stabchain();
        let validation = valid_stabchain(&transversal);
        if validation.is_err() {
            errors += 1;
            println!("{:?}", validation.unwrap_err());
        } 
    }

    println!("{} errors out of {}", errors, LIMIT);
    assert_eq!(errors, 0);
}

#[test]
fn test_stabilizer_ift() {
    use stabchain::group::stabchain::builder::IFTBuilderStrategy;
    use stabchain::group::stabchain::moved_point_selector::LmpSelector;
    use stabchain::perm::actions::SimpleApplication;

    let mut errors = 0;
    for g in GROUP_LIBRARY.iter().cloned().map(|g| g.map(DefaultPermutation::from)) {
        let transversal = g.stabchain_with_strategy(IFTBuilderStrategy::new(SimpleApplication::default(), LmpSelector::default()));
        let validation = valid_stabchain(&transversal);
        if validation.is_err() {
            errors += 1;
            println!("{:?}", validation.unwrap_err());
        } 
    }

    println!("{} errors out of {}", errors, LIMIT);
    assert_eq!(errors, 0);
}