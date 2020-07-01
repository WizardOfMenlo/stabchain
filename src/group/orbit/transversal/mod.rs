use crate::perm::Permutation;

pub mod factored_transversal;
pub mod simple_transversal;

pub use factored_transversal::FactoredTransversal;
pub use simple_transversal::SimpleTransversal;

pub trait Transversal {
    /// Calculate a representative of the given element in the orbit, or None if this element isn't in the orbit.
    fn representative(&self, point: usize) -> Option<Permutation>;

    /// Get the base element of the Transversal.
    fn base(&self) -> usize;

    /// Get the orbit size.
    fn len(&self) -> usize;

    /// Test if an element is in the orbit.
    fn in_orbit(&self, pos: usize) -> bool;

    /// Gets the orbits
    fn orbit(&self) -> super::Orbit;
}
