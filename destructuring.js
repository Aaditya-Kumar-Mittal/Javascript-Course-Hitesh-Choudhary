//Whatever data type is on the left hand side, the simlar data type should be on the right hand side, porbably then you can do the destructuring

const user = ["hitesh", 3, "admin"];

// var role = user[2]
// var name = user[0]

// console.log(name);
// console.log(user);
// console.log(role);


var [name, courseCount, role] = user;

console.log(user);
console.log(name);
console.log(role);