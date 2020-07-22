LoadPackage("json");


group_to_gens := function (G) 
    if IsPermGroup(G) then
        return List(GeneratorsOfGroup(G), ListPerm);
    fi;

    return List(Image(IsomorphismPermGroup(G), GeneratorsOfGroup(G)), ListPerm);
end;

grpToJson := {g} -> rec(size := Size(g), generators := group_to_gens(g));

groups_of_order := function (n)
    local i, num_groups, res;

    if not SmallGroupsAvailable(n) then
        return [];
    fi;

    num_groups := NumberSmallGroups(n);
    res := [];
    for i in [1..num_groups] do
        Add(res, grpToJson(SmallGroup(n, i)));
    od;

    return res;
end;

export_groups_of_order := function(n, dir)
    local groups, name, out;
    groups := groups_of_order(n);
    name := Concatenation(String(n), "_order_small.json");
    out := OutputTextFile(Filename(dir, name), false);
    GapToJsonStream(out, groups);
end;

export_all_until_n := function(n, dir)
    local i;
    for i in [1..n] do
        export_groups_of_order(i, dir);
    od;
end;