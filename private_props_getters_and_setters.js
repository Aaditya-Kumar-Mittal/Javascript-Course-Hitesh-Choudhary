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

    enrollCourse(course) {
        this.#courseList.push(course);
    }

    getCourseList() { //getter
        return this.#courseList;
    }
}

const rock = new User('Rock', 'rock@rock.com');
console.log(rock.getInfo());

rock.enrollCourse('React Bootcamp');

console.log(rock.getCourseList());
console.log(rock.courseList); //prevents direct access


//getter is a method which helps you to grab some of the information from the class, so that not everybody can acess your variables

//setters need a parameter