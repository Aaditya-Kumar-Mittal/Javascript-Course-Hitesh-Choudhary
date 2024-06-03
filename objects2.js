var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is ${this.name}`);
    },
}

var aaditya = Object.create(User);

console.log(aaditya); // This is undefined

console.log(aaditya.__proto__);

aaditya.name = "Aaditya";

aaditya.getUserName();

var sam = Object.create(User, {
    name: { value: "Sammy" },
    courseCount: { value: 3 },
});


console.log(sam);

console.log(sam.__proto__);

sam.getUserName()