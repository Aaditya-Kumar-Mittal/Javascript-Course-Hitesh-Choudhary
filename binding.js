const hitesh = {
    firstName: "Hitesh",
    lastName: "Mittal",
    role: "Admin",
    courseCount: 3,

    getInfo: function () {
        console.log(
            `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nRole: ${this.role}\nCourse Count: ${this.courseCount}\n`
        );
    }
}

const dj={
    firstName:"Rock",
    lastName:"DJ",
    role:"Sub-Admin",
    courseCount: 4,
}

hitesh.getInfo();

//Borrowing of method using bind

// Object.reference of the PaymentMethodChangeEvent.bind(other object)()

//Bind always gives you a reference back and you have to run that reference

hitesh.getInfo.bind(dj)();
var djInfo= hitesh.getInfo.bind(dj);
djInfo()

//Call actually directly calls it
hitesh.getInfo.call(dj);