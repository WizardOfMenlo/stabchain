use super::StabchainRecord;
use crate::perm::Permutation;

pub fn is_in_group<'a>(it: impl IntoIterator<Item = &'a StabchainRecord>, p: &Permutation) -> bool {
    // Early exit
    if p.is_id() {
        return true;
    }

    let mut g = p.clone();
    for record in it {
        let base = record.base;
        let application = p.apply(base);
        if !record.transversal.contains_key(&application) {
            return false;
        }

        let representative = record.transversal.get(&application).unwrap();
        g = g.divide(&representative);
    }

    g.is_id()
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::group::Group;

    #[test]
    fn id_test() {
        let g = Group::trivial();
        let stab = g.stabchain();
        assert!(is_in_group(stab.iter(), &Permutation::id()));
    }

    #[test]
    fn perm_in_symmetric() {
        use crate::perm::utils::random_permutation;

        let g = Group::symmetric(5);
        let stab = g.stabchain();
        assert!(is_in_group(stab.iter(), &Permutation::id()));
        let perm = random_permutation(5);

        for g in stab.iter() {
            println!("base := {}", g.base() + 1);
            println!("{}", g.group());
        }

        dbg!(&stab);
        dbg!(&perm);
        assert!(is_in_group(stab.iter(), &perm));
    }
}
