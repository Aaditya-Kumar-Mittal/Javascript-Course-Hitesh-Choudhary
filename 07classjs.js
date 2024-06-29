//never put spaces in file names make it a habit

// make separate class for the classes

class User {

    constructor(name, email) {
        this.name = name;  //valid in JS
        this.email = email;
    }

    courseList = [];

    //this is not a function, this is a method because it is inside the class
    getInfo() {
        return { name: this.name, email: this.email };
    }

    enrollCourse(course){
        this.courseList.push(course);
    }

    getCourseList(){
        return this.courseList; 
    }
}


module.exports= User;