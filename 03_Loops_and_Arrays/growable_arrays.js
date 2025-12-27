var sportT = ["Cricket", "Football", "Hockey"];
sportT.push("Tennis");
sportT.push("Badminton");
for (var i = 0; i < sportT.length; i++) {
    console.log("Sport ".concat(i, " ---> ").concat(sportT[i]));
}
for (var _i = 0, sportT_1 = sportT; _i < sportT_1.length; _i++) {
    var sport = sportT_1[_i];
    console.log("Sport : ".concat(sport));
}
