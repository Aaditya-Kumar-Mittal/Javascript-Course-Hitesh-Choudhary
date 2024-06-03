//Functional apporach of defining objects
var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;

    this.getCourseCount = function () {
        console.log(`${this.courseCount} is the course count`);
    }
}

//Adding some new properties, functions, getters setters
//This may couse some problems
User.prototype.getFirstName = function () {
    console.log(`Your first name is ${this.firstName}`);
}
// Injecting new properties from outside into the object

var Aaditya = new User("Aaditya", 3);

console.log(Aaditya);



if (Aaditya.hasOwnProperty("firstNamee")) {
    Aaditya.getFirstName();
}

if (Aaditya.hasOwnProperty("firstName")) {
    Aaditya.getFirstName();
}

Aaditya.getCourseCount();

var Samira = new User("Samira", 5);

console.log(Samira);

Samira.getFirstName();
Samira.getCourseCount();

// If new keyword was not used, it was regular function call and the output was undefined
//new keyword makes the instance of function of object every time it is called, and moves the scope form global to inside the function.