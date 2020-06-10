use super::Permutation;
use std::collections::HashSet;
use std::rc::Rc;

pub fn orbit_stabilizer(
    gen_set: Vec<&Permutation>,
    omega: usize,
) -> (HashSet<usize>, Vec<Rc<Permutation>>, Vec<Rc<Permutation>>) {
    // Hashset containing the orbit.
    let mut orbit_set = HashSet::new();
    orbit_set.insert(omega);
    // Orbit elements that have not been used yet.
    let mut to_traverse = vec![omega];
    let id = Permutation::id();
    let id_ref = Rc::new(id);
    // the traversal of the orbit.
    let mut traversal: Vec<Rc<Permutation>> = vec![id_ref.clone()];
    // The stablizer.
    let mut stablizer: Vec<Rc<Permutation>> = vec![id_ref.clone()];
    while !to_traverse.is_empty() {
        let delta = to_traverse.pop().unwrap();
        for i in 0..gen_set.len() {
            let gamma = gen_set[i].apply(delta);
            if orbit_set.contains(&gamma) {
                orbit_set.insert(gamma);
                to_traverse.push(gamma);
                let new_traversal_element = traversal[delta].multiply(gen_set[i]);
                traversal.push(Rc::new(new_traversal_element));
            } else {
                let new_stab_elem = traversal[delta]
                    .multiply(gen_set[i])
                    .multiply(&traversal[gamma].inv());
                stablizer.push(Rc::new(new_stab_elem));
            }
        }
    }
    (orbit_set, traversal, stablizer)
}
