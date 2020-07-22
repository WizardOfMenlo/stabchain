LoadPackage("json");

grpToJson := {g} -> rec(size := Size(g), generators := List(GeneratorsOfGroup(g), ListPerm));

groups_of_degree := function (n)
    local num_groups, res;

    if not TransitiveGroupsAvailable(n) then
        return [];
    fi;

    num_groups := NrTransitiveGroups(n);
    res := [];
    for i in [1..num_groups] do
        Add(res, grpToJson(TransitiveGroup(n, i)));
    od;

    return res;
end;

export_groups_of_degree := function(n, dir)
    local groups, name, out;
    groups := groups_of_degree(n);
    name := Concatenation(String(n), "_deg_trans.json");
    out := OutputTextFile(Filename(dir, name), false);
    GapToJsonStream(out, groups);
end;

export_all_until_n := function(n, dir)
    for i in [1..n] do
        export_groups_of_degree(i, dir)
    od;
end;