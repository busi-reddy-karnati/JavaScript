/*
[]: array, {}:object
For objects, names of the variables also should match
*/
var print = (print_var) => {
  console.log(print_var);
};
var user = ["busi", 1, "busi@busi.com"];
var [name, courseCount, email] = user;
print(name);

var newUser = {
  fullname: "BusiReddy",
  mycourseCount: 2,
  myemail: "busi@busi.com",
};

//Remember that the variables also should match the names in object initialization
const { fullname, myCourseCount, myemail } = newUser;

print(fullname);
