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
}

console.log(user.firstName);

console.table(user);

console.log(user);

console.log(user.getCourseCount());

user.buyCourse("HTML")
user.buyCourse("CSS")
user.buyCourse("JavaScript")

console.log(user);

console.log(user.getCourseCount());


console.log(user.issLoggedIn());