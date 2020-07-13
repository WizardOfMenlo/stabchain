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
        crate::perm::utils::validate_images(images).unwrap();
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

        Self::from_iter(first_changes.chain(second_changes).filter(|(i, o)| i != o))
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
        StandardPermutation::from_iter((0..=lmp).map(|i| perm.apply(i)))
    }
}

use std::fmt;
impl fmt::Display for MapPermutation {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", StandardPermutation::from(self.clone()))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    #[should_panic]
    fn invalid_missing_0() {
        MapPermutation::from_images(&[1, 2, 3]);
    }

    #[test]
    #[should_panic]
    fn invalid_double_value() {
        MapPermutation::from_images(&[0, 1, 2, 2]);
    }

    #[test]
    fn id_perm() {
        assert_eq!(MapPermutation::id(), MapPermutation::id());
        assert_eq!(
            MapPermutation::id(),
            MapPermutation::from_images(&[0, 1, 2])
        );
    }

    #[test]
    fn test_is_id() {
        let perm = MapPermutation::from_images(&[0, 1, 2]);
        assert!(perm.is_id());
        let perm = MapPermutation::from_images(&[0, 2, 1, 4, 3]);
        assert!(perm.multiply(&perm.inv()).is_id())
    }

    #[test]
    fn not_eq_perm() {
        assert_ne!(
            MapPermutation::id(),
            MapPermutation::from_images(&[2, 1, 0])
        );
        assert_ne!(
            MapPermutation::from_images(&[2, 1, 0]),
            MapPermutation::id()
        );
    }

    #[test]
    fn apply_perm() {
        let id = MapPermutation::id();
        let cycle = MapPermutation::from_images(&[1, 2, 0]);

        assert_eq!(0, id.apply(0));
        assert_eq!(1, id.apply(1));
        assert_eq!(1, cycle.apply(0));
        assert_eq!(2, cycle.apply(1));
        assert_eq!(0, cycle.apply(2));
        assert_eq!(3, cycle.apply(3));
    }

    #[test]
    fn mult_perm() {
        let id = MapPermutation::id();
        let cycle = MapPermutation::from_images(&[1, 2, 0]);
        let cycle2 = MapPermutation::from_images(&[2, 0, 1]);

        let id = &id;
        let cycle = &cycle;
        let cycle2 = &cycle2;

        assert_eq!(*id, id.multiply(id));
        assert_eq!(*cycle, cycle.multiply(id));
        assert_eq!(*cycle, id.multiply(cycle));
        assert_eq!(*cycle2, cycle.multiply(cycle));
        assert_eq!(*id, cycle.multiply(cycle).multiply(cycle));
        assert_ne!(*cycle, cycle.multiply(cycle));
        assert_eq!(*cycle, cycle.pow(1));
        assert_eq!(cycle.pow(-1), cycle.multiply(cycle));
        assert_eq!(cycle.pow(-2), *cycle);
        assert_eq!(cycle.pow(3), *id);
        assert_eq!(cycle.pow(10), *cycle);
    }

    /// Check that multiplication is correct for non-commuting elements.
    #[test]
    fn mult_perm_non_commutative() {
        let perm1 = MapPermutation::from_images(&[1, 0]);
        let perm2 = MapPermutation::from_images(&[0, 2, 1]);

        let expected_perm = MapPermutation::from_images(&[2, 0, 1]);

        assert_eq!(perm1.multiply(&perm2), expected_perm);
        // Should not be the same when order is reveresed.
        assert_ne!(perm2.multiply(&perm1), expected_perm);
        let perm1 = MapPermutation::from_images(&[1, 2, 3, 0]);
        let perm2 = MapPermutation::from_images(&[0, 2, 1]);
        let expected_perm = MapPermutation::from_images(&[2, 1, 3, 0]);
        assert_eq!(perm1.multiply(&perm2), expected_perm);
        // Should not be the same when order is reveresed.
        assert_ne!(perm2.multiply(&perm1), expected_perm);
    }

    /// Check that the multiplication is associative
    #[test]
    fn mult_perm_associative() {
        let perm1 = MapPermutation::from_images(&[1, 5, 4, 0, 2, 3]);
        let perm2 = MapPermutation::from_images(&[3, 2, 0, 1]);
        let perm3 = MapPermutation::from_images(&[6, 5, 4, 3, 2, 1, 0]);
        assert_eq!(
            perm1.multiply(&perm2).multiply(&perm3),
            perm1.multiply(&perm2.multiply(&perm3))
        );
    }

    /// Test that multiplication for the lazy or eager implementaions are identical
    #[test]
    fn mult_perm_lazy_eager() {
        use crate::perm::builder::PermBuilder;
        let perm1 = MapPermutation::from_images(&[2, 3, 0, 1]);
        let perm2 = MapPermutation::from_images(&[2, 1, 0]);
        assert_eq!(
            perm1.multiply(&perm2),
            perm1.build_multiply(&perm2).collapse()
        )
    }

    /// Test inverse for the indentity.
    #[test]
    fn invert_perm_id() {
        let id = MapPermutation::id();
        assert_eq!(id, id.inv());
        assert_eq!(id, id.inv().inv());
    }
    /// Test inverting permutation for normal cases.
    #[test]
    fn invert_perm() {
        let id = MapPermutation::id();
        //Permutation that is its own inverse
        let perm1 = MapPermutation::from_images(&[5, 4, 2, 6, 1, 0, 3]);
        assert_eq!(perm1, perm1.inv());
        assert_eq!(perm1.multiply(&perm1.inv()), id);
        // n-cycle permutations
        let perm2 = MapPermutation::from_images(&[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        let perm2_inv = MapPermutation::from_images(&[9, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
        assert_ne!(perm2, perm2_inv);
        assert_eq!(perm2_inv, perm2.inv());
        assert_eq!(perm2, perm2.inv().inv());
        assert_eq!(perm2, perm2_inv.inv());
        assert_eq!(perm2.multiply(&perm2_inv), id);
        assert_eq!(perm2_inv.multiply(&perm2), id);
        //Permutations with more than one cycle.
        let perm3 = MapPermutation::from_images(&[2, 5, 4, 6, 0, 3, 1]);
        let perm3_inv = MapPermutation::from_images(&[4, 6, 0, 5, 2, 1, 3]);
        assert_ne!(perm3, perm3_inv);
        assert_eq!(perm3_inv, perm3.inv());
        assert_eq!(perm3, perm3.inv().inv());
        assert_eq!(perm3, perm3_inv.inv());
        assert_eq!(perm3.multiply(&perm3_inv), id);
        assert_eq!(perm3_inv.multiply(&perm3), id);
    }

    #[test]
    fn trailing_end_edge() {
        let a = MapPermutation::from_images(&[1, 3, 2, 0]);
        let b = MapPermutation::from_images(&[3, 2, 0, 1]);
        a.multiply(&b).inv();
    }

    #[test]
    fn div_perm() {
        let id = MapPermutation::id();
        let cycle = MapPermutation::from_images(&[1, 2, 0]);
        let cycle2 = MapPermutation::from_images(&[2, 0, 1]);

        let id = &id;
        let cycle = &cycle;
        let cycle2 = &cycle2;

        assert_eq!(*id, id.divide(id));
        assert_eq!(*cycle, cycle.divide(id));
        assert_eq!(*cycle2, id.divide(cycle));
        assert_eq!(*cycle, id.divide(cycle2));
        assert_eq!(*id, cycle.divide(cycle));
        assert_eq!(*cycle, id.divide(cycle2));
        assert_eq!(*cycle2, id.divide(cycle));
    }

    #[test]
    fn test_shift_identity() {
        let p = MapPermutation::id();
        assert!(p.shift(3).is_id())
    }

    #[test]
    fn test_shift() {
        let perm: MapPermutation = MapPermutation::from_images(&[1, 2, 0]);
        let shifted: MapPermutation = MapPermutation::from_images(&[0, 1, 2, 4, 5, 3]);
        assert_eq!(perm.shift(3), shifted)
    }
}
