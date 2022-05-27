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

  //What if I don't want to give this to anyone: use static
  static login() {
    /*login isn't available for  */
    return "You are logged in";
  }
}

//WE can import from parents. Everything from User can be used by SubAdmin
class SubAdmin extends User {
  /*
    If you overwrite a method, the one in child is the one that we use, if we define
    */
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am SubAdmin";
  }
}

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
// console.log(tom.#courseList);//Cannot be used since private
