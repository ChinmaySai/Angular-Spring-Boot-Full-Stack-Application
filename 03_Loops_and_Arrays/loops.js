var reviews = [5, 4, 5, 3, 4];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
    console.log("Review ".concat(i), reviews[i]);
}
var avg = total / reviews.length;
console.log("Average Review: ".concat(avg));
