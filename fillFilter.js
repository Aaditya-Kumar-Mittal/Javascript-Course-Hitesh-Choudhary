var testArray = [1, 2, 3, 4, 5, 6]

// console.log(testArray.fill(0));
// console.log(testArray.fill("h"));
// console.log(testArray.fill("h", 2));
console.log(testArray.fill("h", 2, 4));
//start is inclusive and end is exclusive

const myNumber = [23, 24, 25, 55, 66, 77, 88, 98, 87];

var result = myNumber.filter((num) => { return num != 55 });
console.log(result);
var result = myNumber.filter((num) => { return num < 55 });
console.log(result);
var result = myNumber.filter((num) => { return num >= 55 });
console.log(result);