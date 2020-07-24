//! Permutations on integers
//!
//! This crate implements permutations on integers

pub mod actions;
pub mod algos;
pub mod builder;
pub mod export;
pub mod impls;
pub mod utils;

use std::hash::Hash;

/// The DefaultPermutation type. It is the permutation that, trough our testing,
/// seems to perform better
pub type DefaultPermutation = impls::standard::StandardPermutation;

/// A trait encapsulating what being a permutation is like (permutation on points ndr)
pub trait Permutation: Clone + Eq + Hash {
    /// Given some images, build a permutation
    fn from_images(images: &[usize]) -> Self;

    /// Get the images of the permutation
    fn images(&self) -> Vec<usize> {
        self.lmp()
            .map(|n| (0..=n).map(|i| self.apply(i)).collect())
            .unwrap_or_else(Vec::new)
    }

    /// Get the identity
    fn id() -> Self;

    /// Is the permutation the identity
    fn is_id(&self) -> bool;

    /// Apply the permutation to a point
    fn apply(&self, x: usize) -> usize;

    /// Inverse of the permutation
    fn inv(&self) -> Self;

    /// Multiply two permutations
    fn multiply(&self, other: &Self) -> Self;

    /// Exponentiate this permutation
    fn pow(&self, pow: isize) -> Self {
        let perm = if pow < 0 { self.inv() } else { self.clone() };

        builder::pow::pow(perm, pow.abs() as usize)
    }

    /// Shift the permutation some places on the right
    fn shift(&self, pos: usize) -> Self;

    /// Get the order of the permutation
    fn order(&self) -> usize {
        let mut acc = Self::id();
        let mut counter = 0;
        while !acc.is_id() {
            acc = acc.multiply(self);
            counter += 1;
        }
        counter
    }

    /// Computes self * other^-1
    fn divide(&self, other: &Self) -> Self {
        self.multiply(&other.inv())
    }

    /// Get the smallest moved point
    fn lmp(&self) -> Option<usize>;
}

/// Trait to select which action does the permutation induce
pub trait Action<P>: Default + Clone {
    type OrbitT: Hash + Eq + Clone;

    fn apply(&self, p: &P, input: Self::OrbitT) -> Self::OrbitT;
}

macro_rules! impl_conversions {
    ($first:ty, $second:ty) => {
        impl From<$first> for $second {
            fn from(p: $first) -> Self {
                <$second>::from_images(&p.images()[..])
            }
        }
    };
}

macro_rules! impl_display {
    ($perm:ty) => {
        impl std::fmt::Display for $perm {
            fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
                use crate::perm::export::CyclePermutation;
                write!(f, "{}", CyclePermutation::from(self.clone()))
            }
        }
    };
}

macro_rules! impl_all {
    ([$first:ty], $($other:ty, )*) => {
        $(impl_conversions!($first, $other);)*
        impl_display!($first);
    };
}

use crate::perm::impls::{
    based::BasedPermutation, map::MapPermutation, standard::StandardPermutation,
    sync::SyncPermutation, word::WordPermutation,
};

impl_all!(
    [StandardPermutation],
    BasedPermutation,
    MapPermutation,
    WordPermutation,
);

impl_all!(
    [BasedPermutation],
    StandardPermutation,
    MapPermutation,
    SyncPermutation,
    WordPermutation,
);

impl_all!(
    [MapPermutation],
    BasedPermutation,
    StandardPermutation,
    SyncPermutation,
    WordPermutation,
);

impl_all!(
    [SyncPermutation],
    MapPermutation,
    BasedPermutation,
    WordPermutation,
);

impl_all!(
    [WordPermutation],
    SyncPermutation,
    MapPermutation,
    BasedPermutation,
    StandardPermutation,
);
