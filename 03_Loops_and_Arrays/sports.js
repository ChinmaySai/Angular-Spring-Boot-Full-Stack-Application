var sports = ["Cricket", "Football", "Hockey", "Tennis"];
for (var i = 0; i < sports.length; i++) {
    console.log("sports ".concat(i, "   ---> ").concat(sports[i]));
}
//Simplied for loop
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "Cricket") {
        console.log("Cricket is my favourite sport");
    }
    else {
        console.log("Sport : ".concat(sport));
    }
}
console.log();
