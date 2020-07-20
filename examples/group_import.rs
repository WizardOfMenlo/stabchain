use std::fs::{metadata, File};
use std::io::{BufReader, BufWriter};
use std::iter::FromIterator;
use std::path::PathBuf;

use serde::Deserialize;
use structopt::StructOpt;
use walkdir::WalkDir;

use stabchain::group::Group;
use stabchain::perm::export::{ClassicalPermutation, ExportablePermutation};

#[derive(Deserialize)]
struct GAPGroup {
    generators: Vec<Vec<usize>>,
    #[serde(skip, rename = "size")]
    _size: usize,
}

impl GAPGroup {
    fn to_group(self) -> Group {
        Group::from_iter(
            self.generators
                .into_iter()
                .map(|images| ClassicalPermutation::from_slice(&images[..]).into()),
        )
    }
}

#[derive(StructOpt)]
struct Arguments {
    #[structopt(short, long, parse(from_os_str))]
    directory: PathBuf,

    #[structopt(short, long, parse(from_os_str))]
    output: PathBuf,
}

fn main() -> std::io::Result<()> {
    let args = Arguments::from_args();
    let dir_meta = metadata(&args.directory)?;

    if !dir_meta.is_dir() {
        panic!("Expected directory")
    }

    let mut groups = Vec::new();

    for entry in WalkDir::new(args.directory)
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.metadata().map(|meta| meta.is_file()).unwrap_or(false))
    {
        let file = entry.path();
        println!("{}", file.display());
        let file = BufReader::new(File::open(file)?);
        let contents: Vec<GAPGroup> = serde_json::from_reader(file)?;
        groups.extend(contents.into_iter().map(|g| g.to_group()));
    }

    let groups: Vec<_> = groups
        .into_iter()
        .map(|g| g.map(ExportablePermutation::from))
        .collect();

    let out = BufWriter::new(File::create(&args.output)?);
    serde_json::to_writer(out, &groups)?;

    Ok(())
}
