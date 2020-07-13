//! Digraphs
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
pub type DefaultPermutation = impls::map::MapPermutation;

/// A trait encapsulating what being a permutation is like (permutation on points ndr)
pub trait Permutation: Clone + Eq + Hash {
    /// Given some images, build a permutation
    fn from_images(images: &[usize]) -> Self;

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
