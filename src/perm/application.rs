use super::*;

struct SimpleApplication<P>(std::marker::PhantomData<P>);

impl<P> ApplicationStrategy<P> for SimpleApplication<P>
where
    P: Permutation,
{
    type Input = usize;
    type Output = usize;

    fn apply(&self, p: P, input: Self::Input) -> Self::Output {
        p.apply(input)
    }
}

struct ConjugationStrategy<P>(std::marker::PhantomData<P>);

impl<P> ApplicationStrategy<P> for ConjugationStrategy<P>
where
    P: Permutation,
{
    type Input = P;
    type Output = P;

    fn apply(&self, p: P, input: Self::Input) -> Self::Output {
        p.inv().multiply(&input).multiply(&p)
    }
}

struct MultiplicationApplicationStrategy<P>(std::marker::PhantomData<P>);

impl<P> ApplicationStrategy<P> for MultiplicationApplicationStrategy<P>
where
    P: Permutation,
{
    type Input = P;
    type Output = P;

    fn apply(&self, p: P, input: Self::Input) -> Self::Output {
        p.multiply(&input)
    }
}
