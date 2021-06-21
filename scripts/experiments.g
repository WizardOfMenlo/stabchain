LoadPackage("graphbacktrack");
LoadPackage("json");
Read("semidirect.g");
Read("basics.g");

BTKit_NodeLimit := 2000000;

initRandomSeed := function(seed)
    Init(GlobalRandomSource, seed);
    Init(GlobalMersenneTwister, seed);
end;

ingroup := [BTKit_Con.InGroup, GB_Con.InGroup, GB_Con.InGroup,GB_Con.InGroup];
incoset := [BTKit_Con.InCoset, GB_Con.InCoset, GB_Con.InCoset, GB_Con.InCoset];
consols := [GB_MakeEquitableNone, GB_MakeEquitableWeak, GB_MakeEquitableStrong, GB_MakeEquitableFull];

exps := rec();

exps.CosetDPIntersection := function(grps, grpsize, seed)
    local g1,g2,p1,p2, ret, n, i,t1, t2,ans;
    initRandomSeed(seed);
            Print("!!","\n");
    g1 := makeSemidirect(grps, grpsize); # List([1..grps], x -> randomTG(grpsize)));
    g2 := makeSemidirect(grps, grpsize); # List([1..grps], x -> randomTG(grpsize)));
    p1 := DPperms(grpsize, grps);
    p2 := DPperms(grpsize, grps);
    ret := [];
    n := grps * grpsize;
            Print("!!!\n");
    for i in [1..4] do
            Print("BB",i,"\n");
        t1 := Runtime();
        ans := GB_SimpleSinglePermSearch(PartitionStack(n), [incoset[i](n, g1,p1),incoset[i](n,g2,p2)],
            rec(consolidator := consols[i]));
        t2 := Runtime();
                Print("AA",i,"\n");
        Add(ret, [_BTKit.Stats.nodes, t2 - t1, ans <> fail]);
    od;

    Add(ret, GB_CheckInitialCoset(PartitionStack(n), [incoset[4](n, g1,p1),incoset[4](n,g2,p2)]).equal);
    return ret;
end;

exps.primIntersect := function(n, x, grpsplit, seed)
	local group1, group2, ret, i, grp, t1, t2;

    initRandomSeed(seed);

	group1 := PrimitiveGroup(n, x);
	group2 := innerProdGroups(SymmetricGroup(grpsplit),SymmetricGroup(n/grpsplit));
	group2 := group2^Random(SymmetricGroup(LargestMovedPoint(group2)));

    ret := [];

    for i in [1..4] do
        t1 := Runtime();
        grp := GB_SimpleSearch(PartitionStack(n), [ingroup[i](n, group1),ingroup[i](n,group2)],
            rec(consolidator := consols[i]));
        t2 := Runtime();
        Add(ret, [_BTKit.Stats.nodes, t2 - t1, Size(grp)]);
    od;

    grp := GB_CheckInitialGroup(PartitionStack(n), [ingroup[i](n, group1),ingroup[i](n,group2)]);
    Add(ret, [Size(Group(grp.gens)), grp.answer]);
	
	return ret;
end;


exps.allPrimIntersect := function(n, oneTrans, seed)
    local grps, mods, results, g, m;
    
    initRandomSeed(seed);

    mods := Filtered([2..(n-1)], x -> (n mod x = 0 and n <> x));
    if mods = [] then return []; fi;
    grps := findInterestingPrimGroups(n);
    if oneTrans then
        grps := Filtered(grps, x -> Transitivity(PG(x)) = 1);
    else
        grps := Filtered(grps, x -> Transitivity(PG(x)) > 1);
    fi;
    results := [];
    for g in grps do
        for m in mods do
            Add(results, rec(g := g, m := m, ret := exps.primIntersect(g[1], g[2], m, seed)));
        od;
    od;
    return results;
end;


exps.grid := function(n, settype, seed)
	local grid, setA, ret, runExp, i, results,t1,t2, grp;
	
    initRandomSeed(seed);

    grid := outerProdGroups(SymmetricGroup(n), SymmetricGroup(n));

	if settype = 1 then
	  setA := randomSelection([1..n*n],  Int(n*n/2));
	elif settype = 2 then
	  setA := randomGridSelection(n, n,  Int(n/2));
	fi;

    results := [];
    for i in [1..4] do
         t1 := Runtime();
         grp := GB_SimpleSearch(PartitionStack(n*n), [ingroup[i](n*n, grid), BTKit_Con.SetStab(n*n,setA)],
            rec(consolidator := consols[i]));
         t2 := Runtime();
        Add(results, [_BTKit.Stats.nodes, t2-t1, Size(grp)]);
    od;

    grp := GB_CheckInitialGroup(PartitionStack(n*n), [ingroup[4](n*n, grid), BTKit_Con.SetStab(n*n,setA)]);
    Add(results, [Size(Group(grp.gens)), grp.answer]);

    return results;

end;

exps.gridSetSet := function(n, settype, seed)
	local grid, group2, setA, ret, runExp, i, results, grp, t1, t2;
    initRandomSeed(seed);
    
    grid := outerProdGroups(SymmetricGroup(n), SymmetricGroup(n));

	group2 := innerProdGroups(SymmetricGroup(2),SymmetricGroup(n*n/2));
	group2 := group2^Random(SymmetricGroup(n*n));
#	if settype = 1 then
#	  setA := randomSelection([1..n*n],  Int(n*n/2));
#	elif settype = 2 then
#	  setA := randomGridSelection(n, n,  Int(n/2));
#	fi;

    results := [];
    for i in [1..4] do
        t1 := Runtime();
        grp := GB_SimpleSearch(PartitionStack(n*n), [ingroup[i](n*n, grid), ingroup[i](n*n,group2)],
            rec(consolidator := consols[i]));

        t2 := Runtime();
        Add(results, [_BTKit.Stats.nodes, t2-t1, Size(grp)]);
    od;

    grp := GB_CheckInitialGroup(PartitionStack(n*n), [ingroup[4](n*n, grid), ingroup[4](n*n,group2)]);
    Add(results, [Size(Group(grp.gens)), grp.answer]);

    return results;

end;



outputResults := function(outname, type, args, output)
	local results, outstream;

	 outstream := OutputTextFile( outname, false );
    SetPrintFormattingStatus(outstream, false);

    AppendTo(outstream, GapToJsonString(rec(type := type, args := args, output := output)));
    AppendTo(outstream, "\n");
	CloseStream(outstream);
end;

runExp := function(type, args)
    local ret, name;
    ret := CallFuncList(exps.(type), args);

    name := Concatenation(type, Concatenation(List(args, x -> StringFormatted(".{}", x))), ".json");
    outputResults(name, type, args, ret);
end;
