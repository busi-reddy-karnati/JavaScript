console.log(this);//empty object

var user = {
    firstName:"Busi",
    lastName:"Reddy",
    rollNumber:4580,
    getRollNumber: function(){
        console.log(this);
        return this.rollNumber;
    }
}
user.getRollNumber()