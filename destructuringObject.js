const myUser = {
    name: "Hitesh",
    role: "Admin",
    courseCount: 3,
}

console.log(myUser.courseCount);

//undefined outputs because the varaible names are different (key value pair not matching)
const { name1, courseCount1, role1 } = myUser

console.log(name1);
console.log(courseCount1);
console.log(role1);


//Gives the desired outputs
const { name, courseCount, role } = myUser

console.log(name);
console.log(courseCount);
console.log(role);