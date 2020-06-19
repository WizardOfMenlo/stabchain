use super::StabchainRecord;
use crate::perm::Permutation;

pub fn in_group<'a>(it: impl IntoIterator<Item = &'a StabchainRecord>, p: &Permutation) -> bool {
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