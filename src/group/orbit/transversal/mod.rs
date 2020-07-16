//! Various utilities related to transversals

pub mod factored_transversal;
pub mod simple_transversal;
pub mod skeleton;

pub use factored_transversal::FactoredTransversal;
pub use simple_transversal::SimpleTransversal;

use crate::perm::actions::SimpleApplication;
use crate::perm::Action;

// TODO: Note that a lot of this was thought with Orbit : Copy in mind. Now that this is not the case anymore it might
// be worthwhile to optimize

/// A trait that the different implementations of transversals should implement
#[allow(clippy::len_without_is_empty)]
pub trait Transversal<P, A = SimpleApplication<P>>
where
    A: Action<P>,
{
    /// Calculate a representative of the given element in the orbit, or None if this element isn't in the orbit.
    fn representative(&self, point: A::OrbitT) -> Option<P>;

    /// Get the base element of the Transversal.
    fn base(&self) -> A::OrbitT;

    /// Get the orbit size.
    fn len(&self) -> usize;

    /// Test if an element is in the orbit.
    fn in_orbit(&self, pos: A::OrbitT) -> bool;

    /// Gets the orbits
    fn orbit(&self) -> super::Orbit<A::OrbitT>;

    /// Get the action used for the transversal
    fn action(&self) -> A {
        A::default()
    }
}

#[cfg(test)]
macro_rules! transversal_tests {
    ($name:ty, $short:ident) => {
        mod $short {
            use crate::group::orbit::transversal::Transversal;
            use crate::group::Group;
            use crate::perm::*;

            #[test]
            fn id_transveral() {
                let g = Group::trivial();
                let fc = <$name>::new(&g, 3);
                assert_eq!(fc.base(), 3);
                assert!(fc.in_orbit(3));
                assert!(!fc.in_orbit(2));
                assert!(!fc.in_orbit(1));
                //check orbit size
                assert_eq!(1, fc.len());
            }

            #[test]
            fn id_representatives() {
                let g = Group::trivial();
                let fc = <$name>::new(&g, 3);
                assert_eq!(DefaultPermutation::id(), fc.representative(3).unwrap());
                assert_eq!(None, fc.representative(2))
            }

            #[test]
            /// Test with a small permutation as the only generator.
            fn small_fc() {
                let perm = DefaultPermutation::from_images(&[0, 3, 2, 1]);
                let g = Group::new(&[perm]);
                let fc = <$name>::new(&g, 1);
                assert_eq!(fc.base(), 1);
                assert!(fc.in_orbit(1));
                assert!(fc.in_orbit(3));
                assert!(!fc.in_orbit(0));
                assert!(!fc.in_orbit(2));
                //check orbit size
                assert_eq!(2, fc.len());
            }

            #[test]
            /// Test with a permutation of 4 points that is a 4-cycle.
            fn full_cycle() {
                let perm = DefaultPermutation::from_images(&[1, 2, 3, 0]);
                let g = Group::new(&[perm]);
                let fc = <$name>::new(&g, 3);
                for i in 0_usize..=3 {
                    assert!(fc.in_orbit(i));
                    assert_eq!(i, fc.representative(i).unwrap().apply(3));
                }
                assert_eq!(4, fc.len());
            }
        }
    };
}

#[cfg(test)]
mod tests {
    transversal_tests!(crate::group::orbit::transversal::SimpleTransversal, simple);
    transversal_tests!(
        crate::group::orbit::transversal::FactoredTransversal,
        factored
    );
}
