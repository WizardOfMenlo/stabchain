makeSemidirectWithBound := function(glist, minsize, maxsize)
    local newgen, newgrp, tries, i, grp, proj, allbase, orb;
    grp := DirectProduct(glist);
    if maxsize = 0 then maxsize := Size(grp); fi;
    newgen := [()];
    tries := 0;
    for tries in [1..100] do
        Add(newgen, Random(grp));
        newgrp := Group(newgen);
        if Size(newgrp) > minsize and Size(newgrp) < maxsize then
            allbase := true;
            for i in [1..Length(glist)] do
                orb := DirectProductInfo(grp).news[i];
                proj := Group(List(GeneratorsOfGroup(newgrp), p -> RestrictedPerm(p, orb)));
                if Size(proj) < Size(glist[i]) then
                    allbase := false;
                    break;
                fi;
            od;
            if allbase then
                return newgrp;
            fi;
        fi;
        if Size(newgrp) = maxsize then
            newgen := [];
        fi;
    od;
    return grp;
end;


randomTG := {x} -> TransitiveGroup(x,Random([1..NrTransitiveGroups(x)]))^Random(SymmetricGroup(x));

DPperms := function(permlen, copies)
    local l,p;
    l := Concatenation(List([1..copies], x -> ListPerm(Random(SymmetricGroup(permlen)),permlen)+(x-1)*permlen));
    return PermList(l);
end;


makeSemidirect := function(grps, grpsize)
    local grp, minsize, maxsize, glist, result;
    while true do
        glist := List([1..grps], x -> randomTG(grpsize));
        minsize := 1;
        grp := DirectProduct(glist);
        maxsize := Size(grp);
        result := makeSemidirectWithBound(glist, minsize, maxsize);
        if Size(result) < maxsize then
            return result;
        fi;
    od;
end;
