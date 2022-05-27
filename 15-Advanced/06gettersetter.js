class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = []; //We don't have let or const
  // # means private

  //This is how you define a function in JS
  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(courseName) {
    this.#courseList.push(courseName);
  }
  getCourseList() {
    return this.#courseList;
  }
}

const rock = new User("rock", "rock@dj.com");
console.log(rock.getCourseList());
// console.log(rock.#courseList); //This is a private variable so we cannot access it now
