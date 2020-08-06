use crate::perm::Permutation;
const ID_ERROR: &str = "Should never be id";

use super::BaseSelector;

/// A selector that always chooses the biggest moved point in a permutation
#[derive(Default, Debug, Copy, Clone)]
pub struct LmpSelector;

impl<P> BaseSelector<P, usize> for LmpSelector
where
    P: Permutation,
{
    fn moved_point(&mut self, p: &P, _: usize) -> usize {
        p.lmp().expect(ID_ERROR)
    }
}

///Struct for a base point selector that takes the first point to be moved.
#[derive(Default, Debug, Copy, Clone)]
pub struct FmpSelector;

impl<P> BaseSelector<P, usize> for FmpSelector
where
    P: Permutation,
{
    fn moved_point(&mut self, p: &P, _: usize) -> usize {
        //Find the first point that isn't fixed.
        (0..p.lmp().expect(ID_ERROR))
            .find(|&x| p.apply(x) != x)
            .expect(ID_ERROR)
    }
}
