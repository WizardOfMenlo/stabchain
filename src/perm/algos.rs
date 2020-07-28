use super::impls::standard::StandardPermutation;
use crate::perm::Permutation;

/// The implementation of inverse, to be used mostly for benchmarking
pub fn inv(p: &StandardPermutation) -> StandardPermutation {
    let vals = p.as_vec();
    let inv = inv_unchecked(vals);
    StandardPermutation::from_vec_unchecked(inv)
}

pub(super) fn inv_unchecked(vals: &[usize]) -> Vec<usize> {
    let mut v = vec![0; vals.len()];
    for i in 0..vals.len() {
        v[vals[i]] = i;
    }
    v
}

pub fn order_mult(p: &impl Permutation) -> usize {
    let mut acc = p.clone();
    let mut counter = 1;
    while !acc.is_id() {
        acc = acc.multiply(p);
        counter += 1;
    }
    counter
}

pub fn order_cycle(p: &impl Permutation) -> usize {
    use crate::perm::export::CyclePermutation;
    let mut images = p.images();
    images.iter_mut().for_each(|i| *i += 1);
    let cycle = CyclePermutation::from_images(&images[..]);
    cycle.order()
}
