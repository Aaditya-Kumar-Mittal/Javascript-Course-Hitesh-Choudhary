// ...args //spread operator

var maxVal = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(maxVal);

myObj = {}

Object.assign(myObj, { a: 1, b: 2, c: 3 }, { x: 24, y: 25, z: 26 }) //combines both the objects

console.log(myObj);

function sumOne(a, b) {
    console.log(a + b);
}

sumOne(5, 4);

myArr = [5, 4];

console.log();

sumOne(myArr) // 5,4undefined

console.log();

sumOne(5, 4, 1);

sumOne(...myArr) //spread operator takes a group and assigns to function definition

console.log();


function sumTwo(...args) { //add as many arguements //if have no idea about the number of arguements to work on /res operator will spread out individual values
    console.log(args);
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }

    return sum;
}

console.log(sumTwo(1, 2, 4, 5, 6));
console.log(sumTwo(1, 2));
console.log(sumTwo(56, 565, 56565, 56565, 5656));


function spreadRest(a, b, ...args) {
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (let index = 0; index < args.length; index++) {
        sum += args[index];
    }

    return [sum, multi];
}

console.log(spreadRest(2, 3, 1, 1, 1, 1));
/*
Output for the spreadRest function
[ 1, 1, 1, 1 ] //prints only the args
[ 4, 6 ] //prints sum of args and then product of a and b
 */
