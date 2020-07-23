mod classic;
mod cycles;

use serde::{Deserialize, Serialize};

pub use classic::ClassicalPermutation;
pub use cycles::CyclePermutation;

use super::impls::standard::StandardPermutation;
use super::impls::sync::SyncPermutation;

/// A permutation that is easy to export
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExportablePermutation(Vec<usize>);

impl From<StandardPermutation> for ExportablePermutation {
    fn from(perm: StandardPermutation) -> Self {
        ClassicalPermutation::from(perm).into()
    }
}

impl From<ExportablePermutation> for StandardPermutation {
    fn from(perm: ExportablePermutation) -> Self {
        use std::iter::FromIterator;
        StandardPermutation::from_iter(perm.0.iter().map(|i| i - 1))
    }
}

impl From<SyncPermutation> for ExportablePermutation {
    fn from(perm: SyncPermutation) -> Self {
        StandardPermutation::from(perm).into()
    }
}

impl From<ExportablePermutation> for SyncPermutation {
    fn from(perm: ExportablePermutation) -> Self {
        StandardPermutation::from(perm).into()
    }
}

impl From<ClassicalPermutation> for ExportablePermutation {
    fn from(perm: ClassicalPermutation) -> Self {
        ExportablePermutation(perm.images())
    }
}
