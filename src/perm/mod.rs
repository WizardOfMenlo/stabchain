//! Digraphs
//!
//! This crate implements permutations on integers

pub mod algos;
pub mod builder;
pub mod export;
pub mod impls;
pub mod utils;

use impls::standard::StandardPermutation;

pub type DefaultPermutation = StandardPermutation;

pub trait Permutation {
    fn from_images(images: &[usize]) -> Self;

    fn id() -> Self;

    fn is_id(&self) -> bool;

    fn apply(&self, x: usize) -> usize;

    fn inv(&self) -> Self;

    fn multiply(&self, other: &Self) -> Self;

    fn pow(&self, pow: isize) -> Self;

    fn order(&self) -> usize;

    fn divide(&self, other: &Self) -> Self;
    fn lmp(&self) -> Option<usize>;
}
