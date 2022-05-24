// Function definition 1
function functionName1(var1, var2){
    return var1 + var2;
}

var functionName2 = function(var1, var2){
    return var1 + var2;
}

var functionName3 = (var1, var2) => {
    return var1 + var2;
}

//Gives the same results as if they are same
console.log(functionName1(1,2))
console.log(functionName2(1,2))
console.log(functionName3(1,2))