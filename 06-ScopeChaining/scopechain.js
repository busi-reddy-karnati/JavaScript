/*
Remember story: You can ask for something from a bigger person but not from a smaller person
Functions are small guys, and the global scope or file is the bigger guy
There can be functions within functions 
*/

var my_name = "Name1"
function funcOne(){
    console.log("Name1 in func1", my_name);//Since this doesn't have any name, it asks from the bigger guy which is the global context
    my_name = "Name2";
    console.log("Name2 in func1", my_name);//Now that this has a name, it doesn't ask from global context
    funcTwo()
    function funcTwo(){
        console.log("Name2 in func2", my_name);
        my_name = "Name3";
        console.log("Name2 in func2", my_name);
    }
}
funcOne()
console.log("Name in Global Context ", my_name);
//You cannot call this
//funcTwo()