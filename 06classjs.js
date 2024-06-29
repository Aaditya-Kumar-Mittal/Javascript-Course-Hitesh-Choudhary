//import User from "./07classjs";

const User = require('./07classjs.js');

const hitesh = new User('Hitesh', 'hitesh123@gmail.com');

console.log(hitesh.getInfo());


hitesh.enrollCourse('React Bootcamp');
hitesh.enrollCourse('Angular Bootcamp');

console.log(hitesh.getCourseList());

let courses = hitesh.getCourseList();

courses.forEach(course => console.log(course));