pub mod element_testing;

use crate::group::Group;
use crate::perm::Permutation;
use std::collections::HashMap;

#[derive(Debug)]
pub struct Stabchain {}

struct StabchainBuilder {
    // None represents the last element
    current_pos: Option<usize>,
    chain: Vec<StabchainRecord>,
}

impl StabchainBuilder {
    fn new() -> Self {
        StabchainBuilder {
            current_pos: None,
            chain: Vec::new(),
        }
    }

    fn current_chain(&self) -> &[StabchainRecord] {
        if self.current_pos.is_none() {
            return &[];
        }
        &self.chain[0..self.current_pos.unwrap()]
    }

    fn extend(&mut self, p: Permutation) {
        // Note that id always in in_group
        if element_testing::in_group(self.current_chain(), &p) {
            return;
        }

        // Bottom of the chain
        if self.current_pos.is_none() {
            let moved_point = p.lmp().expect("This should never be id");
            let mut record = StabchainRecord {
                base: moved_point,
                gens: Group::new(&[p.clone()]),
                transversal: [(moved_point, Permutation::id())].iter().cloned().collect(),
            };

            let mut next_orbit_point = p.apply(moved_point);
            let mut representative = p.clone();
            while next_orbit_point != moved_point {
                record
                    .transversal
                    .insert(next_orbit_point, representative.clone());
                next_orbit_point = p.apply(next_orbit_point);
                representative = representative.multiply(&p);
            }
            self.chain.push(record);
            // Note that we do not set current_pos, as it is already None and we are going always down the chain
            self.extend(representative);
            return;
        }

        // Then we already had something in this layer
    }
}

pub struct StabchainRecord {
    base: usize,
    gens: Group,
    transversal: HashMap<usize, Permutation>,
}
