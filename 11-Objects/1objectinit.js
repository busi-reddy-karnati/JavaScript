//recommended to give first letter capital for object
var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        return this.courseCount;
    }
}

//Everytime a new user is being created. new mentions that this in user on top is not pointing to window, rather it is pointing to the object
var me_user = new User("reddy", 0);
console.log(me_user);