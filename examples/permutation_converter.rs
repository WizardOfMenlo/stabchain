use {
    stabchain::perm::{
        DefaultPermutation,
        Permutation,
    },
    std::{
        io,
        io::prelude::*,
    },
};

fn main() {
    for line in io::stdin().lock().lines() {
        let arg = line.expect("Invalid line read");
        let images: Vec<_> = arg.trim().split(' ').map(|s| s.parse::<usize>().unwrap()).collect();

        let perm = DefaultPermutation::from_images(&images[..]);
        println!("{}", perm);
    }
}
