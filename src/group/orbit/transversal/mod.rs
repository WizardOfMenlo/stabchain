pub mod factored_transversal;
pub mod simple_transversal;
pub mod skeleton;

pub use factored_transversal::FactoredTransversal;
pub use simple_transversal::SimpleTransversal;

// TODO: Note that a lot of this was thought with Orbit : Copy in mind. Now that this is not the case anymore it might
// be worthwhile to optimize
#[allow(clippy::len_without_is_empty)]
pub trait Transversal<P, OrbitT = usize> {
    /// Calculate a representative of the given element in the orbit, or None if this element isn't in the orbit.
    fn representative(&self, point: OrbitT) -> Option<P>;

    /// Get the base element of the Transversal.
    fn base(&self) -> OrbitT;

    /// Get the orbit size.
    fn len(&self) -> usize;

    /// Test if an element is in the orbit.
    fn in_orbit(&self, pos: OrbitT) -> bool;

    /// Gets the orbits
    fn orbit(&self) -> super::Orbit<OrbitT>;
}
