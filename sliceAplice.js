var user = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"]

console.log(user.slice(1, 3));
console.log(user.slice(1, 4));
console.log(user.slice(1));

var user = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"]

user.splice(1, 2, "Hi");

console.log(user);

user.fill("a");
console.log(user);
user.splice(1,3,"e","f");
console.log(user);