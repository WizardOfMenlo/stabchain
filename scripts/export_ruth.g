groups := List(grps, {g} -> rec(size := g.order, generators := List(g.generators, ListPerm)));
out := OutputTextFile(Filename(DirectoryDesktop(), "all.json"), false);
GapToJsonStream(out, groups);