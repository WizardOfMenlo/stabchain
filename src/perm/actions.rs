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
        input.multiply(p)
    }
}

#[cfg(test)]
mod tests {

    macro_rules! action_tests {
        ($id:ty, $testing:expr, $name:ident) => {
            mod $name {

                use super::super::*;
                use crate::perm::utils::random_permutation;
                use crate::perm::DefaultPermutation;

                #[test]
                fn test_identity() {
                    let act = <$id>::default();
                    let id = DefaultPermutation::id();
                    let testing_set = $testing;
                    for i in testing_set {
                        assert_eq!(act.apply(&id, i.clone()), i);
                    }
                }

                #[test]
                fn test_assoc() {
                    let act = <$id>::default();
                    let testing_set = $testing;
                    let a = random_permutation::<DefaultPermutation>(50);
                    let b = random_permutation(50);
                    let prod = a.multiply(&b);
                    for i in testing_set {
                        let left = act.apply(&prod, i.clone());
                        let right = act.apply(&b, act.apply(&a, i));
                        assert_eq!(left, right);
                    }
                }
            }
        };
    }

    action_tests!(SimpleApplication<DefaultPermutation>, 0..100, application);
    action_tests!(
        MultiplicationAction<DefaultPermutation>,
        crate::group::Group::symmetric(5).bruteforce_elements(),
        mult
    );
    action_tests!(
        ConjugationAction<DefaultPermutation>,
        crate::group::Group::symmetric(5).bruteforce_elements(),
        conj
    );
}
