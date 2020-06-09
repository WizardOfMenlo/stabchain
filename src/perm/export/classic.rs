use crate::perm::Permutation;

/// A permutation, that is on the integral set [1, n].
/// It is called classical as classically this is how permutations are stored
#[derive(Debug)]
pub struct ClassicalPermutation(Permutation);

impl ClassicalPermutation {
    /// Get a identity permutation
    pub fn id() -> Self {
        ClassicalPermutation(Permutation::id())
    }

    /// Is this permutation the identity?
    pub fn is_id(&self) -> bool {
        self.0.is_id()
    }

    /// Apply the permutation to an integer in the
    /// range [1, n]. Panics is `x == 0`
    pub fn apply(&self, x: usize) -> usize {
        assert!(x != 0);
        self.0.apply(x - 1) + 1
    }

    /// Instantiate from a slice of images in the
    /// range [1, n]. Panics otherwise
    pub fn from_slice(images: &[usize]) -> Self {
        assert!(images.iter().all(|&x| x != 0));
        ClassicalPermutation(Permutation::from_vec(
            images.iter().map(|i| i - 1).collect(),
        ))
    }

    /// Gets the images of this permutation
    pub(crate) fn images(&self) -> Vec<usize> {
        self.0.vals.iter().map(|i| i + 1).collect()
    }

    pub fn lmp(&self) -> Option<usize> {
        self.0.lmp().map(|i| i + 1)
    }
}

impl From<Permutation> for ClassicalPermutation {
    fn from(perm: Permutation) -> Self {
        ClassicalPermutation(perm)
    }
}

impl From<ClassicalPermutation> for Permutation {
    fn from(perm: ClassicalPermutation) -> Self {
        perm.0
    }
}
