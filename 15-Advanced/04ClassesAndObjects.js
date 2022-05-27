/*
Everything in JS is an Object
*/
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  courseList = [];

  //This is how you define a function in JS
  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(courseName) {
    this.courseList.push(courseName);
  }
  getCourseList() {
    return this.courseList;
  }
}

// let busi =new User("busi", "busi@nyu.edu"); //Cool. This is OK
// Let us export this to another file
module.exports = User;
