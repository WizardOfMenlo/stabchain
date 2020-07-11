mod classic;
mod cycles;

use serde::{Deserialize, Serialize};

pub use classic::ClassicalPermutation;
pub use cycles::CyclePermutation;

use super::impls::standard::StandardPermutation;

/// A permutation that is easy to export
#[derive(Debug, Serialize, Deserialize)]
pub struct ExportablePermutation(Vec<usize>);

impl From<StandardPermutation> for ExportablePermutation {
    fn from(perm: StandardPermutation) -> Self {
        ClassicalPermutation::from(perm).into()
    }
}

impl From<ClassicalPermutation> for ExportablePermutation {
    fn from(perm: ClassicalPermutation) -> Self {
        ExportablePermutation(perm.images())
    }
}
