mod classic;
mod cycles;

use super::Permutation;
use serde::{Deserialize, Serialize};

pub use classic::ClassicalPermutation;
pub use cycles::CyclePermutation;

/// A permutation that is easy to export
#[derive(Debug, Serialize, Deserialize)]
pub struct ExportablePermutation(Vec<usize>);

impl From<Permutation> for ExportablePermutation {
    fn from(perm: Permutation) -> Self {
        ClassicalPermutation::from(perm).into()
    }
}

impl From<ClassicalPermutation> for ExportablePermutation {
    fn from(perm: ClassicalPermutation) -> Self {
        ExportablePermutation(perm.images())
    }
}
