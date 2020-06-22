use stabchain::perm::Permutation;
use std::io;
use std::io::prelude::*;

fn main() {
    for line in io::stdin().lock().lines() {
        let arg = line.expect("Invalid line read");
        let images: Vec<_> = arg
            .trim()
            .split(' ')
            .map(|s| s.parse::<usize>().unwrap())
            .collect();

        let perm = Permutation::from_vec(images);
        println!("{}", perm);
    }
}
