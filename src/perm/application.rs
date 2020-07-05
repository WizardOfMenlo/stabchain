use super::*;

#[derive(Debug)]
pub struct SimpleApplication<P>(std::marker::PhantomData<P>);

impl<P> Default for SimpleApplication<P> {
    fn default() -> Self {
        SimpleApplication(std::marker::PhantomData::default())
    }
}

impl<P> ApplicationStrategy<P> for SimpleApplication<P>
where
    P: Permutation,
{
    type OrbitT = usize;

    fn apply(&self, p: &P, input: Self::OrbitT) -> Self::OrbitT {
        p.apply(input)
    }
}

pub struct ConjugationStrategy<P>(std::marker::PhantomData<P>);

impl<P> ApplicationStrategy<P> for ConjugationStrategy<P>
where
    P: Permutation,
{
    type OrbitT = P;

    fn apply(&self, p: &P, input: Self::OrbitT) -> Self::OrbitT {
        p.inv().multiply(&input).multiply(&p)
    }
}

pub struct MultiplicationApplicationStrategy<P>(std::marker::PhantomData<P>);

impl<P> ApplicationStrategy<P> for MultiplicationApplicationStrategy<P>
where
    P: Permutation,
{
    type OrbitT = P;

    fn apply(&self, p: &P, input: Self::OrbitT) -> Self::OrbitT {
        p.multiply(&input)
    }
}
