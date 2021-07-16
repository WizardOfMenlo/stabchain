use crate::perm::{Action, Permutation};
use crate::{DetHashMap, DetHashSet};

/// Struct to represent the cube like structure from the remark after Lemma 4.4.1 from Seress
pub(super) struct Cube<P, A>
where
    P: Permutation,
    A: Action<P>,
{
    pub(super) cube: DetHashSet<A::OrbitT>,
    pub(super) orbit: DetHashMap<A::OrbitT, P>,
    pub(super) depth: DetHashMap<A::OrbitT, usize>,
}

impl<'a, P, A> Cube<P, A>
where
    P: Permutation + 'a,
    A: Action<P>,
{
    pub(super) fn new(base: A::OrbitT, seq: &[P], strat: &A, orbit_size: Option<usize>) -> Self {
        let mut orbit = DetHashMap::default();
        orbit.insert(base.clone(), P::id());
        let mut depth = DetHashMap::default();
        depth.insert(base.clone(), 0);
        let mut cubes = vec![DetHashSet::default()];
        cubes[0].insert(base);
        for i in 1..=2 * seq.len() {
            let mut temp = DetHashSet::default();
            if i > seq.len() {
                for j in cubes[i - 1].iter() {
                    let p = seq[i - seq.len() - 1].clone();
                    let val = strat.apply(&p, j.clone());
                    orbit.entry(val.clone()).or_insert_with(|| {
                        depth.insert(val.clone(), depth.get(j).unwrap() + 1);
                        p.inv()
                    });
                    temp.insert(val);
                }
            } else {
                for j in cubes[i - 1].iter() {
                    let p = seq[seq.len() - i].inv();
                    let val = strat.apply(&p, j.clone());
                    orbit.entry(val.clone()).or_insert_with(|| {
                        depth.insert(val.clone(), depth.get(j).unwrap() + 1);
                        p.inv()
                    });
                    temp.insert(val);
                }
            }
            //Take the union of cube[i] and temp.
            temp.extend(cubes[i - 1].iter().cloned());
            cubes.push(temp);
            // Early exit if we've got the right orbit size
            if Some(orbit.len()) == orbit_size {
                break;
            }
        }
        Cube {
            orbit,
            cube: cubes.pop().unwrap(),
            depth,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::group::orbit::transversal::factored_transversal::representative_raw;
    use crate::group::Group;
    use crate::perm::actions::SimpleApplication;
    use crate::perm::export::CyclePermutation;
    use crate::perm::{DefaultPermutation, Permutation};
    #[test]
    fn test_single_generator() {
        let gens: Vec<DefaultPermutation> =
            vec![CyclePermutation::single_cycle(&[1_usize, 2, 3]).into()];
        let g = Group::from_list(gens);
        let strat = SimpleApplication::default();
        let cube = Cube::new(1, g.generators(), &strat, None);
        //Check the orbit is correct. All points should be in the orbit.
        assert!(cube.orbit.contains_key(&0));
        assert!(cube.orbit.contains_key(&1));
        assert!(cube.orbit.contains_key(&2));
        for &i in cube.orbit.keys() {
            assert_eq!(
                i,
                representative_raw(&cube.orbit, 1, i, &strat)
                    .unwrap()
                    .apply(1)
            );
        }
    }
}
