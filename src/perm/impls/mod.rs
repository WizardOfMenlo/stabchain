pub mod based;
pub mod map;
pub mod standard;
pub mod sync;

#[cfg(test)]
macro_rules! permutation_tests {
    ($name:ty, $short:ident) => {
        mod $short {
            use crate::perm::Permutation;

            #[test]
            #[should_panic]
            fn invalid_missing_0() {
                <$name>::from_images(&[1, 2, 3]);
            }

            #[test]
            #[should_panic]
            fn invalid_double_value() {
                <$name>::from_images(&[0, 1, 2, 2]);
            }

            #[test]
            fn id_perm() {
                assert_eq!(<$name>::id(), <$name>::id());
                assert_eq!(<$name>::id(), <$name>::from_images(&[0, 1, 2]));
            }

            #[test]
            fn test_is_id() {
                let perm = <$name>::from_images(&[0, 1, 2]);
                assert!(perm.is_id());
                let perm = <$name>::from_images(&[0, 2, 1, 4, 3]);
                assert!(perm.multiply(&perm.inv()).is_id())
            }

            #[test]
            fn not_eq_perm() {
                assert_ne!(<$name>::id(), <$name>::from_images(&[2, 1, 0]));
                assert_ne!(<$name>::from_images(&[2, 1, 0]), <$name>::id());
            }

            #[test]
            fn apply_perm() {
                let id = <$name>::id();
                let cycle = <$name>::from_images(&[1, 2, 0]);

                assert_eq!(0, id.apply(0));
                assert_eq!(1, id.apply(1));
                assert_eq!(1, cycle.apply(0));
                assert_eq!(2, cycle.apply(1));
                assert_eq!(0, cycle.apply(2));
                assert_eq!(3, cycle.apply(3));
            }

            #[test]
            fn mult_perm() {
                let id = <$name>::id();
                let cycle = <$name>::from_images(&[1, 2, 0]);
                let cycle2 = <$name>::from_images(&[2, 0, 1]);

                let id = &id;
                let cycle = &cycle;
                let cycle2 = &cycle2;

                assert_eq!(*id, id.multiply(id));
                assert_eq!(*cycle, cycle.multiply(id));
                assert_eq!(*cycle, id.multiply(cycle));
                assert_eq!(*cycle2, cycle.multiply(cycle));
                assert_eq!(*id, cycle.multiply(cycle).multiply(cycle));
                assert_ne!(*cycle, cycle.multiply(cycle));
                assert_eq!(*cycle, cycle.pow(1));
                assert_eq!(cycle.pow(-1), cycle.multiply(cycle));
                assert_eq!(cycle.pow(-2), *cycle);
                assert_eq!(cycle.pow(3), *id);
                assert_eq!(cycle.pow(10), *cycle);
            }

            /// Check that multiplication is correct for non-commuting elements.
            #[test]
            fn mult_perm_non_commutative() {
                let perm1 = <$name>::from_images(&[1, 0]);
                let perm2 = <$name>::from_images(&[0, 2, 1]);
                let expected_perm = <$name>::from_images(&[2, 0, 1]);
                assert_eq!(perm1.multiply(&perm2), expected_perm);
                // Should not be the same when order is reveresed.
                assert_ne!(perm2.multiply(&perm1), expected_perm);
                let perm1 = <$name>::from_images(&[1, 2, 3, 0]);
                let perm2 = <$name>::from_images(&[0, 2, 1]);
                let expected_perm = <$name>::from_images(&[2, 1, 3, 0]);
                assert_eq!(perm1.multiply(&perm2), expected_perm);
                // Should not be the same when order is reveresed.
                assert_ne!(perm2.multiply(&perm1), expected_perm);
            }

            /// Check that the multiplication is associative
            #[test]
            fn mult_perm_associative() {
                let perm1 = <$name>::from_images(&[1, 5, 4, 0, 2, 3]);
                let perm2 = <$name>::from_images(&[3, 2, 0, 1]);
                let perm3 = <$name>::from_images(&[6, 5, 4, 3, 2, 1, 0]);
                assert_eq!(
                    perm1.multiply(&perm2).multiply(&perm3),
                    perm1.multiply(&perm2.multiply(&perm3))
                );
            }

            /// Test that multiplication for the lazy or eager implementaions are identical
            #[test]
            fn mult_perm_lazy_eager() {
                use crate::perm::builder::PermBuilder;
                let perm1 = <$name>::from_images(&[2, 3, 0, 1]);
                let perm2 = <$name>::from_images(&[2, 1, 0]);
                assert_eq!(
                    perm1.multiply(&perm2),
                    perm1.build_multiply(&perm2).collapse()
                )
            }

            /// Test inverse for the indentity.
            #[test]
            fn invert_perm_id() {
                let id = <$name>::id();
                assert_eq!(id, id.inv());
                assert_eq!(id, id.inv().inv());
            }
            /// Test inverting permutation for normal cases.
            #[test]
            fn invert_perm() {
                let id = <$name>::id();
                //Permutation that is its own inverse
                let perm1 = <$name>::from_images(&[5, 4, 2, 6, 1, 0, 3]);
                assert_eq!(perm1, perm1.inv());
                assert_eq!(perm1.multiply(&perm1.inv()), id);
                // n-cycle permutations
                let perm2 = <$name>::from_images(&[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
                let perm2_inv = <$name>::from_images(&[9, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
                assert_ne!(perm2, perm2_inv);
                assert_eq!(perm2_inv, perm2.inv());
                assert_eq!(perm2, perm2.inv().inv());
                assert_eq!(perm2, perm2_inv.inv());
                assert_eq!(perm2.multiply(&perm2_inv), id);
                assert_eq!(perm2_inv.multiply(&perm2), id);
                //Permutations with more than one cycle.
                let perm3 = <$name>::from_images(&[2, 5, 4, 6, 0, 3, 1]);
                let perm3_inv = <$name>::from_images(&[4, 6, 0, 5, 2, 1, 3]);
                assert_ne!(perm3, perm3_inv);
                assert_eq!(perm3_inv, perm3.inv());
                assert_eq!(perm3, perm3.inv().inv());
                assert_eq!(perm3, perm3_inv.inv());
                assert_eq!(perm3.multiply(&perm3_inv), id);
                assert_eq!(perm3_inv.multiply(&perm3), id);
            }

            #[test]
            fn trailing_end_edge() {
                let a = <$name>::from_images(&[1, 3, 2, 0]);
                let b = <$name>::from_images(&[3, 2, 0, 1]);
                a.multiply(&b).inv();
            }

            #[test]
            fn div_perm() {
                let id = <$name>::id();
                let cycle = <$name>::from_images(&[1, 2, 0]);
                let cycle2 = <$name>::from_images(&[2, 0, 1]);

                let id = &id;
                let cycle = &cycle;
                let cycle2 = &cycle2;

                assert_eq!(*id, id.divide(id));
                assert_eq!(*cycle, cycle.divide(id));
                assert_eq!(*cycle2, id.divide(cycle));
                assert_eq!(*cycle, id.divide(cycle2));
                assert_eq!(*id, cycle.divide(cycle));
                assert_eq!(*cycle, id.divide(cycle2));
                assert_eq!(*cycle2, id.divide(cycle));
            }

            #[test]
            fn test_shift_identity() {
                let p = <$name>::id();
                assert!(p.shift(3).is_id())
            }

            #[test]
            fn test_shift() {
                let perm = <$name>::from_images(&[1, 2, 0]);
                let shifted = <$name>::from_images(&[0, 1, 2, 4, 5, 3]);
                assert_eq!(perm.shift(3), shifted)
            }
        }
    };
}

#[cfg(test)]
mod tests {
    permutation_tests!(crate::perm::impls::based::BasedPermutation, based);
    permutation_tests!(crate::perm::impls::standard::StandardPermutation, standard);
    permutation_tests!(crate::perm::impls::map::MapPermutation, map);
    permutation_tests!(crate::perm::impls::sync::SyncPermutation, sync);
}
