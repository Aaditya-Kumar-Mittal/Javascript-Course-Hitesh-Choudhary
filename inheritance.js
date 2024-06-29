//never put spaces in file names make it a habit

// make separate class for the classes

class User {

    constructor(name, email) {
        this.name = name;  //valid in JS
        this.email = email;
    }

    #courseList = []; //hash makes the courseList as private

    //this is not a function, this is a method because it is inside the class
    getInfo() {
        return { name: this.name, email: this.email };
    }

    enrollCourse(course) { //a setter method
        this.#courseList.push(course);
    }

    getCourseList() { //getter
        return this.#courseList;
    }

    /*
    //static keyword will prevent the children from inheriting the property
    static login() {
        return 'You are logged in!';
    }
        */
    static login() {
        return 'You are logged in!';
    }
}

class SubAdmin extends User {

    constructor(name, email) {
        super(name, email);
    }

    getAdminInfo() {
        return "I am sub admin here!";
    }

    //allows overriding of the methods
    login() {
        return "Log in Method for sub-admin";
    }
}

const tom = new SubAdmin('Tom', 'tom@jerry.com');

console.log(tom.getAdminInfo());
console.log(tom.login()); //gives error when static is placed before login
console.log(tom.getInfo());


