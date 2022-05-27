function adder(x){
    //The function returns another function
    return function(y){
        return x+y;
    }
}

var add5 = adder(5);
console.log(add5(5));//should be 10

var add4 = adder(4)
console.log(add4(5));//should be 9
