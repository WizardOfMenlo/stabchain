LoadPackage("ferret");;
LoadPackage("images");;
LoadPackage("json");;
LoadPackage("graphbacktrack");;

PG := x -> PrimitiveGroup(x[1], x[2]);

optArg := function(Val, default)
	if Length(Val) = 0 then
		return default;
	fi;
	if Length(Val) = 1 then
		return Val[1];
	fi;
	ErrorNoReturn("Only one optional argument!");
end;

Foldl := function(func, start, list)
	local l, val;
	val := start;
	for l in list do
		val := func(val, l);
	od;
	return val;
end;

Foldr := function(func, start, list)
	local l, val;
	val := start;
	for l in list do
		val := func(l, val);
	od;
	return val;
end;

timeFunction := function(args...)
	local time, ret;
	time := Runtime();
	ret := CallFuncListWrap(args[1], args{[2..Length(args)]});
	if ret[1] = false then
		Print("Timeout\n");
	fi;
	time := Runtime() - time;
	return [time, ret[1]];
end;

randomSelection := function(list, num)
	local sublist, size;
	size := Size(list);
	sublist := [];
	while Size(sublist) < num do
		while Size(sublist) < num do
			Add(sublist, Random([1..size]));
		od;
		# only do this every so often, as it is expensive
		sublist := Set(sublist);
	od;
	return List(sublist, x -> list[x]);
end;

randomGridSelection := function(x1, x2, numperrow)
	return Set(Concatenation(
				List([0..x1-1], y -> randomSelection([1..x2], numperrow) + y*x2)
		   ));
end;

shiftPerm := function(P, x)
	local newPerm, i;
	newPerm := [1..LargestMovedPoint(P) + x];
	for i in [1..LargestMovedPoint(P)] do
		newPerm[i+x] := i^P + x;
	od;
	return PermList(newPerm);
end;


dupPermDown := function(P, maxPnt, copies)
	local newPerm, i, j;
	newPerm := [1..maxPnt * copies];
	for i in [1..maxPnt] do
		for j in [0..copies-1] do
			newPerm[i + j * maxPnt] := i^P + j * maxPnt;
		od;
	od;
	return PermList(newPerm);
end;

dupPermAcross := function(P, maxPnt, copies)
	local newPerm, i, j;
	newPerm := [1..maxPnt * copies];
	for i in [1..maxPnt] do
		for j in [1..copies] do
			newPerm[i * copies - copies + j] := (i^P) * copies - copies + j;
		od;
	od;
	return PermList(newPerm);
end;

directProduct := function(list)
	local gens, totalmax, grp;
	gens := [];
	totalmax := 0;
	for grp in list do
		Append(gens, List(GeneratorsOfGroup(grp), x -> shiftPerm(x, totalmax)));
		totalmax := totalmax + LargestMovedPoint(grp);
	od;
	return Group(Flat(gens));
end;

innerProdGroups := function(G,H)
	local gensG, gensH, maxG, maxH, Hdups, Gdups, ret;
	
	gensG := GeneratorsOfGroup(G);
	gensH := GeneratorsOfGroup(H);
	
	maxG := LargestMovedPoint(G);
	maxH := LargestMovedPoint(H);
	
	Hdups := List([0..maxG-1], x -> List(gensH, y -> shiftPerm(y, x * maxH)));
	Gdups := List(gensG, x -> dupPermAcross(x, maxG, maxH));
	
	ret := Group(Flat([Hdups, Gdups]));
	SetSize(ret, Size(G) * Size(H)^maxG);
	return ret;
end;

outerProdGroups := function(G,H)
	local gensG, gensH, maxG, maxH, Hdups, Gdups, ret;
	
	gensG := GeneratorsOfGroup(G);
	gensH := GeneratorsOfGroup(H);
	
	maxG := LargestMovedPoint(G);
	maxH := LargestMovedPoint(H);
	
	Hdups := List(gensH, y -> dupPermDown(y, maxH, maxG));
	Gdups := List(gensG, x -> dupPermAcross(x, maxG, maxH));
	
	ret := Group(Flat([Hdups, Gdups]));
	SetSize(ret, Size(G) * Size(H));
	return ret;
end;

crossGroup := function(G)
	local crossperm,i,j, maxG;

	crossperm := [];
	maxG := LargestMovedPoint(G);
	for i in [1..maxG] do
		for j in [1..maxG] do
			crossperm[i + (j-1)*maxG] := j + (i-1)*maxG;
		od;
	od;
	return Group(Flat([GeneratorsOfGroup(outerProdGroups(G,G)), PermList(crossperm)]));
end;

	
randomConj := function(G, seed...)
	seed := optArg(seed, 1);
	return G^Random(SymmetricGroup(LargestMovedPoint(G)));
end;


orbGraphListTime := 0;
orbGraphStabTime := 0;
orbGraphCount := 0;

_YAPB_fillRepElements := function(G, orb)
  local val, g, reps, buildorb, gens;
  reps := [];
  reps[orb[1]] := ();
  buildorb := [orb[1]];
  gens := GeneratorsOfGroup(G);
  for val in buildorb do
  	for g in gens do
	  if not IsBound(reps[val^g]) then
	  	reps[val^g] := reps[val] * g;
		Add(buildorb, val^g);
	  fi;
	od;
  od;
  return reps;
end;

Zip := function(lists...)
	local maxlen;
	maxlen := Maximum(List(lists, Length));
	return List([1..maxlen], x -> List(lists, y -> y[x]));
end;

buildGridExperiment := function(size, seed, settype, transport, type)
	local grid, setA, setB, ret, runExp;
	grid := outerProdGroups(SymmetricGroup(size), SymmetricGroup(size));

	if settype = 1 then
	  setA := randomSelection([1..size*size],  Int(size*size/2));
	elif settype = 2 then
	  setA := randomGridSelection(size, size,  Int(size/2));
	fi;

	setB := OnSets(setA, Random(grid));

	Size(grid);
	StabChainMutable(grid);

	

	ret := timeFunction(runExp);
	
	return ret;
end;

buildPrimExperiment := function(n1, x1, n2, x2, seed, type)
	local group1, group2, cons, ret, runExp;

	group1 := PrimitiveGroup(n1,x1);
	group2 := PrimitiveGroup(n2,x2);
	StabChainMutable(group1);
	StabChainMutable(group2);
	Solve([ConInGroup(group1)]);
	Solve([ConInGroup(group2)]);

	ret := timeFunction(runExp);
	
	return ret;
end;


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


outname := fail;

outputResults := function(args, ret)
	local i, results, outstream;

	 outstream := OutputTextFile( outname, true );
    SetPrintFormattingStatus(outstream, false);

	AppendTo(outstream, "#Options ");
	for i in args do
		AppendTo(outstream, " ");
	od;
	AppendTo(outstream, "\n");
	AppendTo(outstream, "#Time ", ret[1], "\n");
	AppendTo(outstream, "#Nodes ", ret[2].stats.nodes, "\n");
	results := rec(args := args, time := ret[1], stats := ret[2].stats, timing := ret[2].timing,
					orbGraphListTime := orbGraphListTime, orbGraphStabTime := orbGraphStabTime,
					orbGraphCount := orbGraphCount);
	AppendTo(outstream, GapToJsonString(results));
	CloseStream(outstream);
end;

outputGridExperiment := function(a,b,c,d)
	local ret;
	ret := buildGridExperiment(a,b,c,d);
	outputResults([a,b,c,d], ret);
end;

outputPrimExperiment := function(a,b,c,d,e,f)
	local ret;
	ret := buildPrimExperiment(a,b,c,d,e,f);
	outputResults([a,b,c,d,e,f], ret);
end;

#outputPrimIntersectExperiment := function(a,b,c,d,e)
#	local ret;
#	ret := buildPrimIntersectExperiment(a,b,c,d,e);
#	outputResults([a,b,c,d,e], ret);
#end;


findInterestingPairs := function(n)
    local primgroups, combs;
    primgroups := List([1..NrPrimitiveGroups(n)], x -> [n,x]);

    primgroups := Filtered(primgroups, x -> not(IsNaturalSymmetricGroup(PG(x)) or IsNaturalAlternatingGroup(PG(x))));
    
    combs := Combinations(primgroups, 2);

    combs := Filtered(combs, x -> not(IsSubgroup(PG(x[1]), PG(x[2])) or IsSubgroup(PG(x[2]), PG(x[1]))));

    return combs;
end;

runPairExperiments := function(list)
	local i;
	for i in list do
		Print("#! ", i, "\n");
		outputPrimExperiment(i[1][1], i[1][2], i[2][1], i[2][2], 1, 1);
		outputPrimExperiment(i[1][1], i[1][2], i[2][1], i[2][2], 1, 2);
	od;
end;