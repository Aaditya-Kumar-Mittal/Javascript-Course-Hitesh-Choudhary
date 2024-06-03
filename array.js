function isEven(element) {

    if (
        element % 2 == 0
    ) {
        return true;
    }
    return false;
}

console.log(isEven(2));
console.log(isEven(3));

var isEven2 = (element) => {

    return element % 2 == 0
}

console.log(isEven2(2));
console.log(isEven2(3));

var evenArr = [2, 4, 6, 8, 10];


var result = evenArr.every(isEven2);
console.log(result);

var evenArr1 = [2, 4, 3, 8, 10];

var resultOdd = evenArr1.every(isEven2);
console.log(resultOdd);

var result = [2, 3, 4, 5, 6].every((e) => (e % 2 === 0));
console.log(result);
var result = [2, 8, 4, 6, 10].every((e) => (e % 2 === 0));
console.log(result);