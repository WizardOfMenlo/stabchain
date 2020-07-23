mod classic;
mod cycles;

use serde::{Deserialize, Serialize};

pub use classic::ClassicalPermutation;
pub use cycles::CyclePermutation;

use crate::perm::Permutation;

/// A permutation that is easy to export
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExportablePermutation(Vec<usize>);

impl<P> From<P> for ExportablePermutation
where
    P: Permutation,
{
    fn from(perm: P) -> Self {
        ClassicalPermutation::from(perm).into()
    }
}

impl From<ClassicalPermutation> for ExportablePermutation {
    fn from(perm: ClassicalPermutation) -> Self {
        ExportablePermutation(perm.images())
    }
}

macro_rules! impl_from_for_perm {
    ($name:ty) => {
        impl From<ExportablePermutation> for $name {
            fn from(perm: ExportablePermutation) -> Self {
                let vec: Vec<_> = perm.0.iter().map(|i| i - 1).collect();
                <$name>::from_images(&vec[..])
            }
        }
    };
}

macro_rules! impl_all {
    ($($name:ty), *) => {
        $(impl_from_for_perm!($name);)*
    };
}

use super::impls::{
    based::BasedPermutation, map::MapPermutation, standard::StandardPermutation,
    sync::SyncPermutation, word::WordPermutation,
};

impl_all!(
    StandardPermutation,
    SyncPermutation,
    MapPermutation,
    BasedPermutation,
    WordPermutation
);
