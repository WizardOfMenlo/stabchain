use super::impls::standard::StandardPermutation;

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
