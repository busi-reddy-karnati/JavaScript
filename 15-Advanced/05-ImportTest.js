//import User doesn't work
const User = require("./04ClassesAndObjects.js"); //Now you have the reference
const busi = new User("busi", "busi@nyu.edu");
console.log(busi);

busi.enrollCourse("React");
console.log(busi);
