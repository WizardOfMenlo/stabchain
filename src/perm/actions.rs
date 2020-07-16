use super::*;

/// Fallback to application by application
#[derive(Debug, Clone)]
pub struct SimpleApplication<P>(std::marker::PhantomData<P>);

impl<P> Default for SimpleApplication<P> {
    fn default() -> Self {
        SimpleApplication(std::marker::PhantomData::default())
    }
}

impl<P> Action<P> for SimpleApplication<P>
where
    P: Permutation,
{
    type OrbitT = usize;

    fn apply(&self, p: &P, input: Self::OrbitT) -> Self::OrbitT {
        p.apply(input)
    }
}

/// Action is on permutation, and it is done by conjugation (p^-1 a p)
#[derive(Debug, Clone)]
pub struct ConjugationAction<P>(std::marker::PhantomData<P>);

impl<P> Default for ConjugationAction<P> {
    fn default() -> Self {
        Self(std::marker::PhantomData::default())
    }
}

impl<P> Action<P> for ConjugationAction<P>
where
    P: Permutation,
{
    type OrbitT = P;

    fn apply(&self, p: &P, input: Self::OrbitT) -> Self::OrbitT {
        p.inv().multiply(&input).multiply(&p)
    }
}

/// Action is by permutation multiplication
#[derive(Debug, Clone)]
pub struct MultiplicationAction<P>(std::marker::PhantomData<P>);

impl<P> Default for MultiplicationAction<P> {
    fn default() -> Self {
        Self(std::marker::PhantomData::default())
    }
}

impl<P> Action<P> for MultiplicationAction<P>
where
    P: Permutation,
{
    type OrbitT = P;

    fn apply(&self, p: &P, input: Self::OrbitT) -> Self::OrbitT {
        p.multiply(&input)
    }
}