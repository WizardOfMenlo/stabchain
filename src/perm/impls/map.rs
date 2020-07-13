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
        if images
            .iter()
            .map(|i| images.iter().filter(|&j| i == j).count())
            .any(|count| count >= 1)
        {
            panic!("Duplicated images")
        }

        Self::from_vec_unchecked(images)
    }

    fn from_vec_unchecked(images: &[usize]) -> Self {
        Self::from_iter(images.iter().copied().enumerate().filter(|(i, o)| i != o))
    }
}

impl Permutation for MapPermutation {
    fn id() -> Self {
        MapPermutation {
            images: Rc::new(BTreeMap::new()),
        }
    }

    fn is_id(&self) -> bool {
        self.images.len() == 0
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
            .filter(|(i, _)| self.images.contains_key(*i))
            .map(|(&i, &o)| (i, o));

        Self::from_iter(first_changes.chain(second_changes))
    }

    fn inv(&self) -> Self {
        Self::from_iter(self.images.iter().map(|(i, o)| (*o, *i)))
    }

    fn lmp(&self) -> Option<usize> {
        self.images.keys().max().copied()
    }

    fn shift(&self, pos: usize) -> Self {
        Self::from_iter(self.images.iter().map(|(i, o)| (i + pos, o + pos)))
    }
}

impl FromIterator<(usize, usize)> for MapPermutation {
    fn from_iter<T: IntoIterator<Item = (usize, usize)>>(iter: T) -> Self {
        MapPermutation {
            images: Rc::new(iter.into_iter().collect()),
        }
    }
}

use crate::perm::impls::standard::StandardPermutation;
impl From<StandardPermutation> for MapPermutation {
    fn from(perm: StandardPermutation) -> Self {
        MapPermutation::from_images(perm.as_vec())
    }
}

impl From<MapPermutation> for StandardPermutation {
    fn from(perm: MapPermutation) -> Self {
        let lmp = perm.lmp();
        if lmp.is_none() {
            return StandardPermutation::id();
        }

        let lmp = lmp.unwrap();
        StandardPermutation::from_iter((0..lmp).map(|i| perm.apply(i)))
    }
}

use std::fmt;
impl fmt::Display for MapPermutation {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", StandardPermutation::from(self.clone()))
    }
}
