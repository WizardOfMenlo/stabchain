pub mod element_testing;

use crate::group::orbit::transversal::Transversal;
use crate::group::Group;
use crate::perm::Permutation;

use std::collections::{HashMap, VecDeque};
use std::iter::FromIterator;

#[derive(Debug)]
pub struct Stabchain {
    chain: Vec<StabchainRecord>,
}

impl Stabchain {
    /// Creates a stabilizer chain from a Group
    pub fn new(g: Group) -> Self {
        let mut builder = StabchainBuilder::new();
        for gen in g.generators() {
            builder.extend(gen.clone());
        }

        builder.build()
    }

    /// Get the base corresponding to this stabilizer chain
    pub fn base(&self) -> Vec<usize> {
        self.chain.iter().map(|g| g.base).collect()
    }

    /// Get G^(n)
    pub fn layer(&self, n: usize) -> Option<&StabchainRecord> {
        self.chain.get(n)
    }

    /// Get an iterator over the records
    pub fn iter(&self) -> impl Iterator<Item = &StabchainRecord> {
        self.chain.iter()
    }
}

impl IntoIterator for Stabchain {
    type Item = StabchainRecord;
    type IntoIter = std::vec::IntoIter<Self::Item>;

    fn into_iter(self) -> Self::IntoIter {
        self.chain.into_iter()
    }
}

// Helper struct, used to build the stabilizer chain
struct StabchainBuilder {
    current_pos: usize,
    chain: Vec<StabchainRecord>,
}

impl StabchainBuilder {
    fn new() -> Self {
        StabchainBuilder {
            current_pos: 0,
            chain: Vec::new(),
        }
    }

    fn bottom_of_the_chain(&self) -> bool {
        self.current_pos == self.chain.len()
    }

    fn current_chain(&self) -> &[StabchainRecord] {
        if self.bottom_of_the_chain() {
            return &[];
        }
        &self.chain[self.current_pos..self.chain.len()]
    }

    fn extend_lower_level(&mut self, p: Permutation) {
        self.current_pos += 1;
        self.extend_inner(p);
        self.current_pos -= 1;
    }

    fn extend_inner(&mut self, p: Permutation) {
        // Note that id always in group
        if element_testing::in_group(self.current_chain(), &p) {
            return;
        }

        // Bottom of the chain
        if self.bottom_of_the_chain() {
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
            self.extend_lower_level(representative);
            return;
        }

        // Then we already had something in this layer
        // Gets the record to be updated
        let mut record = self.chain[self.current_pos].clone();

        let mut to_check = VecDeque::from_iter(record.transversal.keys().copied());
        let mut new_transversal = HashMap::new();
        while !to_check.is_empty() {
            let orbit_element = to_check.pop_back().unwrap();
            let orbit_element_repr = record.transversal.get(&orbit_element).unwrap();
            let new_image = p.apply(orbit_element);
            // If we already saw the element
            if record.transversal.contains_key(&new_image)
                || new_transversal.contains_key(&new_image)
            {
                let image_repr = record
                    .transversal
                    .get(&new_image)
                    .or_else(|| new_transversal.get(&new_image))
                    .unwrap();

                let new_perm = orbit_element_repr.multiply(&p).multiply(&image_repr.inv());
                self.extend_lower_level(new_perm);
            } else {
                // TODO: Is this the correct way to update transversal
                new_transversal.insert(new_image, orbit_element_repr.multiply(&p));
            }
        }

        // We now want to check all the newly added elements
        let mut to_check =
            VecDeque::from_iter(new_transversal.iter().map(|(o, p)| (*o, p.clone())));

        // Update the record
        record.transversal.extend(new_transversal);

        while !to_check.is_empty() {
            let (orbit_element, orbit_element_repr) = to_check.pop_back().unwrap();
            for generator in std::iter::once(&p).chain(record.gens.generators()) {
                let new_image = generator.apply(orbit_element);
                if record.transversal.contains_key(&new_image) {
                    let image_repr = record.transversal.get(&new_image).unwrap();

                    let new_perm = orbit_element_repr
                        .multiply(generator)
                        .multiply(&image_repr.inv());
                    self.extend_lower_level(new_perm);
                } else {
                    // TODO: Is this how to update the transversal
                    record
                        .transversal
                        .insert(new_image, orbit_element_repr.multiply(generator));
                }
            }
        }

        record.gens =
            Group::from_iter(std::iter::once(&p).chain(record.gens.generators()).cloned());

        // Store the updated record in the chain
        self.chain[self.current_pos] = record;
    }

    fn extend(&mut self, p: Permutation) {
        self.current_pos = 0;
        self.extend_inner(p);
    }

    fn build(self) -> Stabchain {
        Stabchain { chain: self.chain }
    }
}

/// All the information stored in a layer of the stabilizer chain
#[derive(Debug, Clone)]
pub struct StabchainRecord {
    base: usize,
    gens: Group,
    transversal: HashMap<usize, Permutation>,
}

impl StabchainRecord {
    /// Get the associated group
    pub fn group(&self) -> &Group {
        &self.gens
    }

    /// Get the base of this layer, i.e. the element that the next layer stabilizes
    pub fn base(&self) -> usize {
        self.base
    }

    /// Get the transversal of the base under this group
    pub fn transversal(&self) -> Transversal {
        Transversal::from_raw(self.base, self.transversal.clone())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn random_test() {
        let g = Group::product(
            &Group::product(&Group::cyclic(500), &Group::cyclic(30)),
            &Group::cyclic(11),
        );
        let chain = Stabchain::new(g);
        for record in &chain.chain {
            println!("Base: {}", record.base + 1);
            print!("Gens: <");
            for gen in record.gens.generators() {
                print!("{}, ", gen);
            }
            println!(">");
            println!();
        }

        panic!();
    }
}
