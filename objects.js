var user = {
    firstName: "FirstName",
    lastName: "LastName",
    role: "Admin",
    loginCount: 32,
    faceBookSignIn: true
}

console.log(user.firstName);
console.log(user.lastName);
console.log(user.faceBookSignIn);
console.log(user["loginCount"]);

console.log(user);

console.table(user);