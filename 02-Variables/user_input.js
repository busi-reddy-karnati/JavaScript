/*
Assuming we are taking input from a website
*/
//Since this will not change over time
const uid = "uid123";

var name = "Busi Reddy Karnati";

var email = "busireddy@nyu.edu";

var password = "123456";

var confirm_password = "123456";

var course_count = 0;

var is_logged_in_from_google = false;

//Different ways of doing a console.log
console.log("UID: "+uid);
console.log("Name: ",name);
console.log(email);

//These are backticks. This is called interpolation
//This is more readable
console.log(`
Unique ID: ${uid}
User: ${name}
Email : ${email}
`)