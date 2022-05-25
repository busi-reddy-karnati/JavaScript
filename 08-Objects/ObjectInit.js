var user = {
    firstName:"Busi",
    lastName:"Reddy",
    rollNo:26,
    isLoggedin:true,
    courseList: [],
    addcourse: function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount:function () {
        return `${this.firstName} has taken ${this.courseList.length} courses`
    }
}
// console.log(user.isLoggedin);
// console.log(user["firstName"]);
// user.rollNo = 30
// console.log(user);

user.addcourse("React")
console.log(user.getCourseCount());
user.addcourse("Angular")
console.log(user.getCourseCount());

// //Converts to a table instead of just printing
// console.table(user)