LoadPackage("json");

grpToJson := {g} -> rec(size := Size(g), generators := List(GeneratorsOfGroup(g), ListPerm));

PG := x -> PrimitiveGroup(x[1], x[2]);

findInterestingPrimGroups := function(n)
    local primgroups;

    primgroups := List([1..NrPrimitiveGroups(n)], x -> [n,x]);

    primgroups := Filtered(primgroups, 
                           x -> 
                                not(IsNaturalSymmetricGroup(PG(x)) or
                                    IsNaturalAlternatingGroup(PG(x))
#                                   IsCyclic(PG(x))
#                                   IsDihedralGroup(PG(x))
                                    )
                                    );
    return primgroups;
end;

groups_of_degree := function (n, oneTrans)
    local i, grps, res, g;

    if not PrimitiveGroupsAvailable(n) then
        return [];
    fi;

    grps := findInterestingPrimGroups(n);
    if oneTrans then
        grps := Filtered(grps, x -> Transitivity(PG(x)) = 1);
    else
        grps := Filtered(grps, x -> Transitivity(PG(x)) > 1);
    fi;
    res := [];
    for g in grps do
        Add(res, grpToJson(PG(g)));
    od;

    return res;
end;

export_groups_of_degree := function(n, oneTrans,  dir)
    local groups, name, out;
    groups := groups_of_degree(n, oneTrans);
    if oneTrans then
        name := Concatenation(String(n), "_deg_prim_oneTrans.json");
    else
        name := Concatenation(String(n), "_deg_prim.json");
    fi;
    out := OutputTextFile(Filename(dir, name), false);
    GapToJsonStream(out, groups);
end;

export_all_in_range := function(range, oneTrans, dir)
    local i;
    for i in range do
        export_groups_of_degree(i, oneTrans, dir);
    od;
end;

export_all_until_n := function(n, oneTrans, dir)
    export_all_in_range([1..n], oneTrans, dir);
end;