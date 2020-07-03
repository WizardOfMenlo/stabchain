use crate::perm::DefaultPermutation;

pub mod factored_transversal;
pub mod simple_transversal;
pub mod skeleton;

pub use factored_transversal::FactoredTransversal;
pub use simple_transversal::SimpleTransversal;

#[allow(clippy::len_without_is_empty)]
pub trait Transversal {
    /// Calculate a representative of the given element in the orbit, or None if this element isn't in the orbit.
    fn representative(&self, point: usize) -> Option<DefaultPermutation>;

    /// Get the base element of the Transversal.
    fn base(&self) -> usize;

    /// Get the orbit size.
    fn len(&self) -> usize;

    /// Test if an element is in the orbit.
    fn in_orbit(&self, pos: usize) -> bool;

    /// Gets the orbits
    fn orbit(&self) -> super::Orbit;
}
