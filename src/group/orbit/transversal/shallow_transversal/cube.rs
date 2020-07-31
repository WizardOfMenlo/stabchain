use crate::perm::{Action, Permutation};
use rand::Rng;
use std::collections::{HashMap, HashSet};

/// Struct to represent the cube like structure from remark 4.4.3 from Seress
struct Cube<P, A>
where
    P: Permutation,
    A: Action<P>,
{
    base: A::OrbitT,
    cube: HashSet<A::OrbitT>,
    orbit: HashMap<A::OrbitT, P>,
    depth: HashMap<A::OrbitT, usize>,
}

impl<'a, P, A> Cube<P, A>
where
    P: Permutation + 'a,
    A: Action<P>,
{
    pub(super) fn new(base: A::OrbitT, seq: &[P], strat: &A) -> Self {
        let mut orbit = HashMap::new();
        orbit.insert(base.clone(), P::id());
        let mut depth = HashMap::new();
        depth.insert(base.clone(), 0);
        let mut cube = vec![HashSet::new()];
        cube[0].insert(base.clone());
        for i in 0..2 * seq.len() {
            if i > seq.len() {
                let mut temp = HashSet::new();
                for j in cube[i].iter() {
                    let val = strat.apply(&seq[i - seq.len() - 1], j.clone());
                    orbit.entry(val.clone()).or_insert_with(|| {
                        depth.insert(val.clone(), depth.get(&j).unwrap() + 1);
                        seq[i - seq.len() - 1].inv()
                    });
                    temp.insert(val);
                }
                //Take the union of cube[i] and temp.
                temp.extend(cube[i].iter().cloned());
                cube.push(temp);
            } else {
                let mut temp = HashSet::new();
                for j in cube[i].iter() {
                    let p = seq[seq.len() - i].inv();
                    let val = strat.apply(&p, j.clone());
                    orbit.entry(val.clone()).or_insert_with(|| {
                        depth.insert(val.clone(), depth.get(&j).unwrap() + 1);
                        seq[i - seq.len() - 1].inv()
                    });
                    temp.insert(val);
                }
                //Take the union of cube[i] and temp.
                temp.extend(cube[i].iter().cloned());
                cube.push(temp);
            }
        }
        Cube {
            base,
            orbit,
            cube: cube.pop().unwrap(),
            depth,
        }
    }
}
