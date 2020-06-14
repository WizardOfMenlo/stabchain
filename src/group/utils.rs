use super::Group;

/// Creates a group genereated from n copies of the cyclic group
pub fn copies_of_cyclic(specification: &[usize]) -> Group {
    use crate::perm::utils::order_n_permutation;

    assert!(specification.iter().all(|&n| n > 0));

    let mut gens = Vec::new();
    let mut count = 1;
    for n in specification {
        gens.push(order_n_permutation(count, *n));
        count += n;
    }

    Group::new(&gens[..])
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_generator_len() {
        let g = copies_of_cyclic(&[3, 4, 5]);
        assert_eq!(g.generators().len(), 3)
    }

    #[test]
    fn test_generator_orbit() {
        let g = copies_of_cyclic(&[3, 4, 5]);
        assert_eq!(g.orbit(0).len(), 3);
        assert_eq!(g.orbit(4).len(), 4);
        assert_eq!(g.orbit(9).len(), 5);
    }
}
