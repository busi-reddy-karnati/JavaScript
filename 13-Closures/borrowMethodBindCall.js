const busi = {
    firstName:"Busi",
    lastName:"Reddy",

    //every function in an object has a bunch of methods, some of them being call, bind etc
    getName:function(){
        console.log(this.firstName,this.lastName);
    }
}
const sathi = {
    firstName:"Satyanarayana",
    lastName:"Reddy",
}

busi.getName();//works
// sathi.getName();//shouldn't work as sathi doesn't have it


//Bind attaches busi's method to sathi and returns a reference
var sathiGetName = busi.getName.bind(sathi);
sathiGetName()

//Call the getName function with sathi as reference. SO every this used refers to sathi
busi.getName.call(sathi);