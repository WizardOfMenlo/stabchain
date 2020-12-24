use crate::perm::Permutation;
// BTree is used since it supports hash
use std::collections::BTreeMap;
use std::iter::FromIterator;
use std::rc::Rc;

#[derive(Debug, Clone, Hash, PartialEq, Eq)]
pub struct MapPermutation {
    images: Rc<BTreeMap<usize, usize>>,
}

impl MapPermutation {
    pub fn from_vec(images: &[usize]) -> Self {
        crate::perm::utils::valid_images(images).unwrap();
        Self::from_vec_unchecked(images)
    }

    fn from_vec_unchecked(images: &[usize]) -> Self {
        images
            .iter()
            .copied()
            .enumerate()
            .filter(|(i, o)| i != o)
            .collect()
    }
}

impl Permutation for MapPermutation {
    fn id() -> Self {
        MapPermutation {
            images: Rc::new(BTreeMap::new()),
        }
    }

    fn is_id(&self) -> bool {
        self.images.is_empty()
    }

    fn from_images(images: &[usize]) -> Self {
        Self::from_vec(images)
    }

    fn apply(&self, x: usize) -> usize {
        self.images.get(&x).copied().unwrap_or(x)
    }

    fn multiply(&self, other: &Self) -> Self {
        if self.is_id() {
            return other.clone();
        }

        if other.is_id() {
            return self.clone();
        }

        let first_changes = self.images.iter().map(|(i, o)| (*i, other.apply(*o)));
        let second_changes = other
            .images
            .iter()
            .filter(|(i, _)| !self.images.contains_key(*i))
            .map(|(&i, &o)| (i, o));

        first_changes
            .chain(second_changes)
            .filter(|(i, o)| i != o)
            .collect()
    }

    fn inv(&self) -> Self {
        self.images.iter().map(|(i, o)| (*o, *i)).collect()
    }

    fn lmp(&self) -> Option<usize> {
        self.images.keys().max().copied()
    }

    fn shift(&self, pos: usize) -> Self {
        self.images
            .iter()
            .map(|(i, o)| (i + pos, o + pos))
            .collect()
    }
}

impl FromIterator<(usize, usize)> for MapPermutation {
    fn from_iter<T: IntoIterator<Item = (usize, usize)>>(iter: T) -> Self {
        MapPermutation {
            images: Rc::new(iter.into_iter().collect()),
        }
    }
}
