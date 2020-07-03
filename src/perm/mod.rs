//! Digraphs
//!
//! This crate implements permutations on integers

pub mod algos;
pub mod builder;
pub mod export;
pub mod impls;
pub mod utils;

pub type DefaultPermutation = impls::standard::StandardPermutation;

pub trait Permutation {
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
