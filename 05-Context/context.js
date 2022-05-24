/*
Function declarations are scanned and made available
Variable declarations are scanned and made undefined

If a function is redefining another variable, the value forgets what it is it doesn't show up in the global context
*/

sayName("Name");


//Once this is declared, this is pooled or thrown into a global context, so you can call from anywhere in the file
function sayName(name){
    console.log(name);
}

// But if you declare the function as 
var sayName1 = function(name){
    console.log(name);
}
//You cannot use it before, since variables are initialized to Undefined



function tipper(bill){
    console.log(bill+5)
}

// If we say
tipper(5)
//IT gives 10

// But if we say
tipper("5")
//It gives 55m which is unexpected


//So let us change that 
function tipper2(bill){
    bill = parseInt(bill);
    console.log(bill+5);
}
