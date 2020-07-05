//! Digraphs
//!
//! This crate implements permutations on integers

pub mod algos;
pub mod application;
pub mod builder;
pub mod export;
pub mod impls;
pub mod utils;

use impls::standard::StandardPermutation;
use std::hash::Hash;

pub type DefaultPermutation = StandardPermutation;

pub trait Permutation: Clone + Eq + Hash {
    fn from_images(images: &[usize]) -> Self;

    fn id() -> Self;

    fn is_id(&self) -> bool;

    fn apply(&self, x: usize) -> usize;

    fn inv(&self) -> Self;

    fn multiply(&self, other: &Self) -> Self;

    fn pow(&self, pow: isize) -> Self;

    fn shift(&self, pos: usize) -> Self;

    fn order(&self) -> usize;

    fn divide(&self, other: &Self) -> Self;
    fn lmp(&self) -> Option<usize>;
}

pub trait ApplicationStrategy<P> {
    type OrbitT;

    fn apply(&self, p: &P, input: Self::OrbitT) -> Self::OrbitT;
}
