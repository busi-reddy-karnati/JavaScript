/*
When we want to add a method to an object, we don't need to manually go to the definitions and add,
we can mention in prototype iteself
*/

var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        return this.courseCount;
    }
}

User.prototype.getFirstName = function(){
    console.log(this.firstName)
}

//It is the duty(not exactly) of new keyword to look for all the prototype definitions across the board
busi = new User("busi",1);

//We can check if the property exists
if(busi.hasOwnProperty("firstName")){
    busi.getFirstName();
}
