use super::MovedPointSelector;

#[derive(Debug, Clone)]
pub struct PartialSelector<F, S> {
    limit: usize,
    first: F,
    second: S,
}

impl<F, S> PartialSelector<F, S> {
    pub fn new(first: F, limit: usize, second: S) -> Self {
        PartialSelector {
            first,
            limit,
            second,
        }
    }
}

impl<P, OrbitT, F, S> MovedPointSelector<P, OrbitT> for PartialSelector<F, S>
where
    F: MovedPointSelector<P, OrbitT>,
    S: MovedPointSelector<P, OrbitT>,
{
    fn moved_point(&mut self, p: &P, pos: usize) -> OrbitT {
        if self.limit < pos {
            self.first.moved_point(p, pos)
        } else {
            self.second.moved_point(p, pos + self.limit)
        }
    }
}
