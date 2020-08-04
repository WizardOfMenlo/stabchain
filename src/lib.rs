pub mod group;
pub mod perm;

use std::collections::hash_map::{DefaultHasher, HashMap};
use std::hash::BuildHasherDefault;

pub type DetHashMap<K, V> = HashMap<K, V, BuildHasherDefault<DefaultHasher>>;
