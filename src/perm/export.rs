use super::Permutation;
use serde::{
    ser::{SerializeStruct, Serializer},
    Deserialize, Serialize,
};
use std::fmt;

pub struct ExportablePermutation(Permutation);

impl ExportablePermutation {
    pub fn from_slice(images: &[usize]) -> Self {
        ExportablePermutation(Permutation::from_vec(
            images.iter().map(|i| i + 1).collect(),
        ))
    }

    pub fn apply(&self, x: usize) -> usize {
        self.0.apply(x - 1) + 1
    }

    pub fn images(&self) -> Vec<usize> {
        self.0.vals.iter().map(|i| i + 1).collect()
    }
}

impl From<Permutation> for ExportablePermutation {
    fn from(perm: Permutation) -> Self {
        ExportablePermutation(perm)
    }
}

impl fmt::Debug for ExportablePermutation {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("Permutation")
            .field("images", &self.images())
            .finish()
    }
}

impl Serialize for ExportablePermutation {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        let mut s = serializer.serialize_struct("ExportablePermutation", 1)?;
        s.serialize_field("images", &self.images())?;
        s.end()
    }
}
