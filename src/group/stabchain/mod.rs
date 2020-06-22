pub mod element_testing;
mod moved_point_selector;

use crate::group::orbit::transversal::Transversal;
use crate::group::Group;
use crate::perm::Permutation;
use moved_point_selector::MovedPointSelector;

use std::collections::{HashMap, VecDeque};
use std::iter::FromIterator;

#[derive(Debug)]
pub struct Stabchain {
    chain: Vec<StabchainRecord>,
}

impl Stabchain {
    fn new_impl(g: &Group, selector: impl MovedPointSelector) -> Self {
        let mut builder = StabchainBuilder::new(selector);
        for gen in g.generators() {
            builder.extend(gen.clone());
        }

        builder.build()
    }

    /// Creates a stabilizer chain from a Group
    pub fn new(g: &Group) -> Self {
        Self::new_impl(g, moved_point_selector::LmpSelector)
    }

    pub fn new_with_base(g: &Group, base: &[usize]) -> Self {
        Self::new_impl(g, moved_point_selector::FixedBaseSelector::new(base))
    }

    /// Get the base corresponding to this stabilizer chain
    pub fn base(&self) -> Vec<usize> {
        self.chain.iter().map(|g| g.base).collect()
    }

    /// Get chain length
    pub fn len(&self) -> usize {
        // We don't include the end item here
        self.chain.len()
    }

    /// Is the chain empty (i.e. originary group was trivial)
    pub fn is_empty(&self) -> bool {
        self.len() == 0
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
struct StabchainBuilder<T: MovedPointSelector> {
    current_pos: usize,
    chain: Vec<StabchainRecord>,
    selector: T,
}

impl<T: MovedPointSelector> StabchainBuilder<T> {
    fn new(selector: T) -> Self {
        StabchainBuilder {
            current_pos: 0,
            chain: Vec::new(),
            selector,
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
        if element_testing::is_in_group(self.current_chain(), &p) {
            return;
        }

        // Bottom of the chain
        if self.bottom_of_the_chain() {
            let moved_point = self.selector.moved_point(&p);
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
                new_transversal.insert(new_image, orbit_element_repr.multiply(&p));
            }
        }

        // We now want to check all the newly added elements
        let mut to_check =
            VecDeque::from_iter(new_transversal.iter().map(|(o, p)| (*o, p.clone())));

        // Update the record
        record.transversal.extend(new_transversal);

        // While we have orbit elements (and representatives to check)
        while !to_check.is_empty() {
            // Get the pair
            let (orbit_element, orbit_element_repr) = to_check.pop_back().unwrap();

            // For each generator (and p)
            for generator in std::iter::once(&p).chain(record.gens.generators()) {
                let new_image = generator.apply(orbit_element);

                // If we have already seen the image
                if record.transversal.contains_key(&new_image) {
                    // Get the representative
                    let image_repr = record.transversal.get(&new_image).unwrap();

                    // Extend lower level
                    let new_perm = orbit_element_repr
                        .multiply(generator)
                        .multiply(&image_repr.inv());
                    self.extend_lower_level(new_perm);
                } else {
                    // Compute the repr s.t. repr^(orbit_element_repr * generator) = orbit_element ^ generator = new_image
                    let repr = orbit_element_repr.multiply(generator);

                    // Store in transversal
                    record.transversal.insert(new_image, repr.clone());

                    // Update and ask to check the new image
                    to_check.push_back((new_image, repr));
                }
            }
        }

        // Update the generators adding p
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

    fn check_well_formed_chain(s: &Stabchain) {
        let mut previous = None;
        for record in s.chain.iter() {
            let gens = record.group();
            let transversal = record.transversal();

            // Check the computed transversal, and the one computed from generators agree
            // We do not directly check the transversal since representatives are not unique
            assert_eq!(transversal.orbit(), gens.orbit(record.base));

            for elem in transversal.orbit().iter().copied() {
                assert_eq!(
                    elem,
                    transversal
                        .representative(elem)
                        .unwrap()
                        .apply(record.base())
                );
            }

            // Check that everything is stabilized correctly
            if !previous.is_none() {
                let stabilized = previous.unwrap();
                assert_eq!(gens.orbit(stabilized).len(), 1);
            }

            previous = Some(record.base);
        }
    }

    #[test]
    fn trivial_chain() {
        let g = Group::trivial();
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
        assert!(chain.is_empty());
    }

    #[test]
    fn klein4_chain() {
        let g = Group::klein_4();
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
    }

    #[test]
    fn cyclic_chain() {
        let g = Group::cyclic(100);
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
    }

    #[test]
    fn dihedral_chain() {
        let g = Group::dihedral_2n(3);
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
    }

    #[test]
    fn alternating_chain() {
        let g = Group::alternating(5);
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
    }

    #[test]
    fn symmetric_chain() {
        let g = Group::symmetric(5);
        let chain = g.stabchain();
        check_well_formed_chain(&chain);
    }

    #[test]
    fn book_example() {
        use crate::perm::export::CyclePermutation;
        use std::collections::HashMap;

        let chain = Stabchain {
            chain: vec![
                StabchainRecord {
                    base: 0,
                    gens: Group::new(&[
                        CyclePermutation::from_vec(vec![vec![1, 2, 3]]).into(),
                        CyclePermutation::from_vec(vec![vec![2, 3, 4]]).into(),
                    ]),
                    transversal: {
                        let mut m = HashMap::new();
                        m.insert(0, Permutation::id());
                        m.insert(1, CyclePermutation::from_vec(vec![vec![1, 2, 3]]).into());
                        m.insert(2, CyclePermutation::from_vec(vec![vec![1, 3, 2]]).into());
                        m.insert(3, CyclePermutation::from_vec(vec![vec![1, 4, 2]]).into());
                        m
                    },
                },
                StabchainRecord {
                    base: 1,
                    gens: Group::new(&[CyclePermutation::from_vec(vec![vec![2, 3, 4]]).into()]),
                    transversal: {
                        let mut m = HashMap::new();
                        m.insert(1, Permutation::id());
                        m.insert(2, CyclePermutation::from_vec(vec![vec![2, 3, 4]]).into());
                        m.insert(3, CyclePermutation::from_vec(vec![vec![2, 4, 3]]).into());
                        m
                    },
                },
            ],
        };

        check_well_formed_chain(&chain);
    }
}
