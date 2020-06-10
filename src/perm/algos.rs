use super::Permutation;

/// The implementation of inverse, to be used mostly for benchmarking
pub fn inv(p: &Permutation) -> Permutation {
    let vals = &p.vals;
    let inv = inv_unchecked(vals);
    Permutation::from_vec_unchecked(inv)
}

pub(super) fn inv_unchecked(vals: &[usize]) -> Vec<usize> {
    let mut v = vec![0; vals.len()];
    for i in 0..vals.len() {
        v[vals[i]] = i;
    }
    v
}
