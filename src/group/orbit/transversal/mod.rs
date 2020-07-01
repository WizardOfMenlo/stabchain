pub mod factored_transversal;
pub mod simple_transversal;

pub trait Transversal {
    /// Calculate a representative of the given element in the orbit, or None if this element isn't in the orbit.
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(0, &[Permutation::from(vec![1, 0, 2])]);
    /// assert_eq!(1, fc.representative(1).unwrap().apply(0));
    /// assert_eq!(None, fc.representative(2));
    ///```
    fn representative(&self, point: usize) -> Option<Permutation>;

    /// Get the base element of the Factored Transversal.
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(0, &[Permutation::from(vec![1, 0])]);
    /// assert_eq!(0, fc.base());
    ///```
    fn base(&self) -> usize;

    /// Get the orbit size.
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(0, &[Permutation::from(vec![1, 0])]);
    /// assert_eq!(2, fc.len());
    ///```
    fn len(&self) -> usize;

    /// Test if an element is in the orbit.
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(1, &[Permutation::from(vec![1, 0])]);
    /// assert_eq!(1, fc.base());
    /// assert!(fc.in_orbit(1));
    ///```
    fn in_orbit(&self, pos: usize) -> bool {
        self.transversal.contains_key(&pos)
    }

    /// Gets the orbits
    ///```
    /// use stabchain::group::orbit::factored_transversal::FactoredTransversal;
    /// use stabchain::perm::Permutation;
    /// let fc = FactoredTransversal::from_generators(1, &[Permutation::from(vec![1, 0])]);
    /// assert_eq!(1, fc.base());
    /// let orbit = fc.orbit();
    /// assert_eq!(orbit.len(), 2);
    /// ```
    fn orbit(&self) -> super::Orbit {
        self.into()
    }
}
