pub mod group;
pub mod perm;

use std::{
    collections::{
        hash_map::{
            DefaultHasher,
            HashMap,
        },
        HashSet,
    },
    hash::BuildHasherDefault,
};

/// A type of HashMap that uses a determined seed
pub type DetHashMap<K, V> = HashMap<K, V, BuildHasherDefault<DefaultHasher>>;

/// A type of DetHashSet that uses a determined seed
pub type DetHashSet<K> = HashSet<K, BuildHasherDefault<DefaultHasher>>;
