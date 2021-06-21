LoadPackage("json");

dir := DirectoryContents(".");;

safeAverage := function(l)
    if l = [] then return -1; else return Average(l); fi;
end;

safeMedian := function(l)
    if l = [] then return -1; else return Median(l); fi;
end;

safeNinety := function(l)
    if l = [] then return -1; else return SortedList(l)[Int(Length(l)*0.9)]; fi;
end;

safeZeroes := function(l)
    if l = [] then return 0; else return Int(Length(Filtered(l, x -> x = 0))/Length(l)*100); fi;
end;

readJSON := function(x)
    local str;
    str := StringFile(x);
    return JsonStringToGap(str);
end;


gatherDPExps := function(nameprefix)
    local primfiles, primjson, max1, max2, primresult,x,exp,av,median,zerocount,sum,av2,median2,zerocount2,sum2,pshort,out1,out2;
    primfiles := Filtered(dir, n -> StartsWith(n, nameprefix) and EndsWith(n, ".json"));;


    primjson := List(primfiles, readJSON);;


    max1 := Maximum(List(primjson, x -> x.args[1]));
    max2 := Maximum(List(primjson, x -> x.args[2]));
    primresult := List([1..max1], x -> List([1..max2], y -> []));
    pshort := List([1..max2], y -> []);

    for x in primjson do
        Add(primresult[x.args[1]][x.args[2]], x.output);
        Add(pshort[x.args[2]], x.output);
    od;

    #Print(primresult);

    #primresult := primresult{[1..maxpos]};
    #Print(List(primresult, Length));

    av := List(primresult, x -> List(x,p -> List([1..4], i -> Int(safeAverage(List(p, y -> y[i][1]))))));
    median := List(primresult, x -> List(x,p -> List([1..4], i -> Int(safeMedian(List(p, y -> y[i][1]))))));
    zerocount := List(primresult, x -> List(x,p -> List([1..4], i -> safeZeroes(List(p, y -> y[i][1])))));
    sum := List(primresult, x -> List(x,p -> List([1..4], i -> Int(Sum(List(p, y -> y[i][1]))))));

    av2 := List(pshort, p -> List([1..4], i -> Int(safeAverage(List(p, y -> y[i][1])))));
    median2 := List(pshort, p -> List([1..4], i -> Int(safeMedian(List(p, y -> y[i][1])))));
    zerocount2 := List(pshort, p -> List([1..4], i -> safeZeroes(List(p, y -> y[i][1]))));
    sum2 := List(pshort, p -> List([1..4], i -> Sum(List(p, y -> y[i][1]))));


    out1 := List([1..Length(av)], x -> List([1..Length(av[x])], y -> [av[x][y],median[x][y],zerocount[x][y],sum[x][y]]));

    out2 := List([1..Length(av2)], x -> [av2[x],median2[x],zerocount2[x],sum2[x]]);

    return rec(long := out1, short := out2);

end;

specialDP := function(arg1, arg2)
    local primfiles, primjson, gather, i;
    primfiles := Filtered(dir, n -> StartsWith(n, "CosetDP") and EndsWith(n, ".json"));;
    primjson := List(primfiles, readJSON);;

    primjson := Filtered(primjson, x -> x.args[1] = arg1 and x.args[2] = arg2);
    gather := List([1..4], x -> List(primjson, p -> p.output[x][1]));
    for i in [1..4] do
        Sort(gather[i]);
    od;
    return gather;
end;

gatherSetExps := function(nameprefix, filt,maxpos, gather)
    local primfiles, primjson, maxprim, primresult,x,exp,av,median,zerocount,sum;
    primfiles := Filtered(dir, n -> StartsWith(n, nameprefix) and EndsWith(n, ".json"));;


    primjson := List(primfiles, readJSON);;
    primjson := Filtered(primjson, filt);

    maxprim := Maximum(List(primjson, x -> x.args[gather]));
    primresult := List([1..maxprim], x -> []);

    for x in primjson do
            Add(primresult[x.args[gather]], x.output);
    od;

    #Print(primresult);

    primresult := primresult{[1..maxpos]};

        Print(List([1..Length(primresult)], x -> [x, Length(primresult[x])]),"\n");

    #Print(List(primresult, Length));

    av := List(primresult, p -> List([1..4], i -> Int(safeAverage(List(p, y -> y[i][1])))));
    median := List(primresult, p -> List([1..4], i -> Int(safeMedian(List(p, y -> y[i][1])))));
    zerocount := List(primresult, p -> List([1..4], i -> safeZeroes(List(p, y -> y[i][1]))));
    sum := List(primresult, p -> List([1..4], i -> Sum(List(p, y -> y[i][1]))));

    return List([1..Length(av)], x -> [av[x],median[x],zerocount[x],sum[x]]);
end;

gatherPrimExps := function(nameprefix, contains,maxpos)
    local primfiles, primjson, maxprim, primresult,x,exp,av,zerocount,median,sum;
    primfiles := Filtered(dir, n -> StartsWith(n, nameprefix) and (PositionSublist(n, contains) <> fail ) and EndsWith(n, ".json"));;


    primjson := List(primfiles, readJSON);;

    maxprim := Maximum(List(primjson, x -> x.args[1]));
    primresult := List([1..maxprim], x -> []);

    for x in primjson do
        for exp in x.output do
            Add(primresult[x.args[1]], exp.ret);
        od;
    od;

    primresult := primresult{[1..maxpos]};
    Print(List([1..Length(primresult)], x -> [x, Length(primresult[x])]),"\n");

    av := List(primresult, p -> List([1..4], i -> Int(safeAverage(List(p, y -> y[i][1])))));
    median := List(primresult, p -> List([1..4], i -> Int(safeMedian(List(p, y -> y[i][1])))));
    zerocount := List(primresult, p -> List([1..4], i -> safeZeroes(List(p, y -> y[i][1]))));
    sum := List(primresult, p -> List([1..4], i -> Sum(List(p, y -> y[i][1]))));
    return List([1..Length(av)], x -> [av[x],median[x],zerocount[x],sum[x]]);
end;

cleanResults := function(l);
    l := List([1..Length(l)], x -> [x,l[x]]);
    l := Filtered(l, x -> x[2][1][1] <> -1);
    return l;
end;


cleanResults2 := function(l)
    local out,i,j;
    out := [];
    for i in [1..Length(l)] do
        for j in [1..Length(l[i])] do
            Add(out, [[i,j],l[i][j]]);
        od;
    od;
    out := Filtered(out, x -> x[2][1][1] <> -1);
    return out;
end;

printTable := function(l, filename)
    local file, parts, line;
    file := OutputTextFile(Concatenation("experiments/",filename), false);
        SetPrintFormattingStatus(file, false);
    PrintToFormatted(file, "%{}\n", filename);
    PrintTo(file, "\\begin{tabular}{|c|c|c|c|c|c|c|c|c|}\n");
    PrintTo(file, "Size&\\multicolumn{2}{|c|}{Leon}&\\multicolumn{2}{|c|}{Weak}&\\multicolumn{2}{|c|}{Strong}&\\multicolumn{2}{|c|}{Full}\\\\\n");
    PrintTo(file, "&Median&Zero\\%&Median&Zero\\%&Median&Zero\\%&Median&Zero\\%\\\\\n");
    PrintTo(file, "\\hline\n");
    for line in l do
        PrintToFormatted(file, "{} ", line[1]);
        for parts in [1..4] do
            PrintToFormatted(file, " &{}&{}&{}", line[2][1][parts],line[2][2][parts],line[2][3][parts]);
        od;
        PrintTo(file, "\\\\\n");
        od;
    PrintTo(file, "\\hline\n");
    PrintTo(file, "\\end{tabular}\n");
    PrintTo(file, "% total nodes ", List([1..4], i -> Sum(l, line -> line[2][4][i])),"\n"); 
    CloseStream(file);
end;

printTable2 := function(l, filename)
    local file, parts, line;
    file := OutputTextFile(Concatenation("experiments/",filename), false);
    SetPrintFormattingStatus(file, false);
    PrintToFormatted(file, "%{}\n", filename);
    PrintTo(file, "\\begin{tabular}{|c|c|c|c|c|c|c|c|c|c|}\n");
    PrintTo(file, "Size1&Size2&&\\multicolumn{2}{|c|}{Leon}&\\multicolumn{2}{|c|}{Weak}&\\multicolumn{2}{|c|}{Strong}&\\multicolumn{2}{|c|}{Full}\\\\\n");
    PrintTo(file, "&&Median&Zero\\%&Median&Zero\\%&Median&Zero\\%&Median&Zero\\%\\\\\n");

    PrintTo(file, "\\begin{tabular}{|c|c|c|c|c|c|c|c|c|c|c|c|c|c|}\n");
    PrintTo(file, "Size1&Size2&&\\multicolumn{3}{|c|}{Leon}&\\multicolumn{3}{|c|}{Weak}&\\multicolumn{3}{|c|}{Strong}&\\multicolumn{3}{|c|}{Full}\\\\\n");
    PrintTo(file, "&&Mean&Median&Zero\\%&Mean&Median&Zero\\%&Mean&Median&Zero\\%&Mean&Median&Zero\\%\\\\\n");

    PrintTo(file, "\hline\n");
    for line in l do
        PrintToFormatted(file, "{} {}", line[1][1], line[1][2]);
        for parts in [1..4] do
            PrintToFormatted(file, " &{}&{}", line[2][2][parts],line[2][3][parts]);
            #PrintToFormatted(file, " &{}&{}&{}", line[2][1][parts],line[2][2][parts],line[2][3][parts]);
        od;
        PrintTo(file, "\\\\\n");
    od;
    PrintTo(file, "\\hline\n");
    PrintTo(file, "\\end{tabular}\n");
    CloseStream(file);
end;

allPrimTrue := gatherPrimExps("allPrimIntersect.","true",80);
allPrimFalse := gatherPrimExps("allPrimIntersect.","false",80);

gridSetSet := gatherSetExps("gridSetSet",x->true,18, 1);
gridSetA := gatherSetExps("grid.",x->x.args[2] = 1,15, 1);
gridSetB := gatherSetExps("grid.",x->x.args[2] = 2,15, 1);


cosetrec := gatherDPExps("CosetDP");
cosetDPIntersection := cosetrec.long;
cosetshort := cosetrec.short;

gatherSums := function(l)
    l := List(l, x -> x[2][4]);
    l := List([1..Length(l)], x -> List([1..4], y -> Sum(l{[1..x]}, z -> z[y])));
    return l;
end;



allPrimTrue := cleanResults(allPrimTrue);
allPrimFalse := cleanResults(allPrimFalse);
gridSetSet := cleanResults(gridSetSet);
gridSetA := cleanResults(gridSetA);
gridSetB := cleanResults(gridSetB);

cosetDPIntersection := cleanResults2(cosetDPIntersection);


printTable(allPrimTrue, "allPrimOneTrans.tex");
printTable(allPrimFalse, "allPrimTwoOrMoreTrans.tex");
printTable(gridSetSet, "gridSetSet.tex");
printTable(gridSetA, "gridSetA.tex");
printTable(gridSetB, "gridSetB.tex");

cosetshort := cleanResults(cosetshort);
printTable(cosetshort, "shortcoset.tex");

printTable2(cosetDPIntersection, "cosetDP.tex");



primJsonOut := function(data, max, filename)
    local file, out, row, i, outcum;
    file := OutputTextFile(Concatenation("experiments/",filename), false);
    out := List([1..4], x -> List([1..max], x -> 0));
    for row in data do
        for i in [1..4] do
            out[i][row[1]] := row[2][4][i];
        od;
    od;
    
    outcum := List([1..4], i -> List([1..Length(out[i])], y -> Sum(out[i]{[1..y]})));

    GapToJsonStream(file, outcum);
    CloseStream(file);
end;

primJsonOut(allPrimTrue, 80, "allPrimOneTrans.json");
primJsonOut(allPrimFalse, 80, "allPrimTwoOrMoreTrans.json");

file := OutputTextFile("experiments/dp33.json", false);
GapToJsonStream(file,specialDP(3,3));
CloseStream(file);

file := OutputTextFile("experiments/dp55.json", false);
GapToJsonStream(file,specialDP(5,5));
CloseStream(file);

file := OutputTextFile("experiments/dp77.json", false);
GapToJsonStream(file,specialDP(7,7));
CloseStream(file);

file := OutputTextFile("experiments/dp99.json", false);
GapToJsonStream(file,specialDP(9,9));
CloseStream(file);


