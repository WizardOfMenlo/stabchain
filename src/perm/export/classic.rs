use super::cycles::CyclePermutation;
use crate::perm::Permutation;

/// A permutation, that is on the integral set [1, n].
/// It is called classical as classically this is how permutations are stored
#[derive(Debug, PartialEq)]
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

impl From<CyclePermutation> for ClassicalPermutation {
    fn from(perm: CyclePermutation) -> Self {
        let cycles = perm.cycles();
        let n = cycles.iter().flatten().max().cloned().unwrap_or(0);

        if n == 0 {
            return ClassicalPermutation::id();
        }

        let mut images = Vec::new();

        for i in 1..=n {
            let cycle = cycles.iter().find(|cycle| cycle.contains(&i));
            // In this case the point is fixed
            if cycle.is_none() {
                images.push(i);
                continue;
            }

            let cycle = cycle.unwrap();
            // Since we already know it contains it, the unwrap is safe
            let i_index = cycle.iter().position(|&j| i == j).unwrap();
            images.push(cycle[(i_index + 1) % cycle.len()]);
        }

        ClassicalPermutation::from_slice(&images[..])
    }
}

impl From<ClassicalPermutation> for Permutation {
    fn from(perm: ClassicalPermutation) -> Self {
        perm.0
    }
}

#[cfg(test)]
mod tests {
    use super::ClassicalPermutation;

    #[test]
    fn id_creation() {
        let id = ClassicalPermutation::id();
        assert!(id.is_id());
        assert!(id.images().is_empty());
    }

    #[test]
    fn non_conventional_id() {
        let id = ClassicalPermutation::from_slice(&vec![1, 2, 3, 4, 5, 6]);
        assert!(id.is_id());
        assert!(id.images().is_empty());
    }

    #[test]
    fn from_vector() {
        let perm = ClassicalPermutation::from_slice(&vec![1, 3, 4, 2, 5, 6]);
        assert!(!perm.is_id());
        assert_eq!(perm.images(), vec![1, 3, 4, 2]);
    }

    #[test]
    #[should_panic]
    fn from_invalid_vector() {
        let _perm = ClassicalPermutation::from_slice(&vec![1, 3, 4, 2, 0]);
    }

    #[test]
    fn application() {
        let perm = ClassicalPermutation::from_slice(&vec![1, 3, 4, 2]);
        assert_eq!(perm.apply(1), 1);
        assert_eq!(perm.apply(2), 3);
        assert_eq!(perm.apply(3), 4);
        assert_eq!(perm.apply(4), 2);
        assert_eq!(perm.apply(5), 5);
    }

    #[test]
    #[should_panic]
    fn invalid_application() {
        let perm = ClassicalPermutation::from_slice(&vec![1, 3, 4, 2]);
        perm.apply(0);
    }

    use crate::perm::Permutation;

    #[test]
    fn from_permutation() {
        let basic = Permutation::from_vec(vec![0, 2, 1]);
        let classic: ClassicalPermutation = basic.into();
        assert_eq!(classic.images(), vec![1, 3, 2]);
    }

    #[test]
    fn to_permutation() {
        let classic = ClassicalPermutation::from_slice(&vec![1, 3, 2]);
        let basic: Permutation = classic.into();
        assert_eq!(basic.as_vec(), &vec![0, 2, 1][..]);
    }
}
