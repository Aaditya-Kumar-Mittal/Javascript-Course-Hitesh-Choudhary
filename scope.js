
console.log(name); //no error

var name = "hitesh"

console.log(name);

// console.log(name1); //error

let name1 = "hitesh"

console.log(name1);


console.log(lastName);


if (true) {

    //Most people consider this as scope

    var lastName = "Mittal"

    console.log(lastName);
}

console.log(lastName); //Works outsite the if block, so var has a global scope

function printLastName() {
    var lastName2 = "Mittal"

    console.log(lastName2);
}

// console.log(lastName2); //Here the var has contextual scope, as scope is really defined inside a function in JavaScript, so this line gives error

printLastName();

// In backend, try to use let instead of var because you want to get as many errors as possible to reslove the issues.