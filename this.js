console.log(this);

//this keyword gives access to the global context 
//global context differs in the situation
// In node gives empty scope and in broser, gives access to the Window Object

var name = "Aaditya"

console.log(this);

var game = "basketball"

function sayName() {
    var name = "Aaditya"
    console.log(this);
}

sayName()

//For all regular function calls, this points to window object (global object)

console.log(this);

var user = {
    firstName: "FirstName",
    lastName: "LastName",
    role: "Admin",
    loginCount: 32,
    faceBookSignIn: true,
    courseList: [],

    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },

    getCourseCount: function () {
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    },

    issLoggedIn: function () { return this.faceBookSignIn }

    , displayObject: function () {
        console.log(this)
        function regularFunctionCall() {
            console.log(`Line 43 ${this}`);
        }

        //This is regular function call
        regularFunctionCall();
    }
}


//This is not a regular function call
user.displayObject();