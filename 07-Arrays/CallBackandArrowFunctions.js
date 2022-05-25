function isEven(element){
    return element%2===0;
}

var isEven2 = function(element){
    return element%2===0;
}
var isEven3 = (element)=>{return element%2===0;}

arr = [2,4,6,7]

//All of these are equivalent to each other
console.log(arr.every(isEven));
console.log(arr.every(isEven2));
console.log(arr.every(isEven3));
console.log(arr.every((element)=>{return element%2==0}));
console.log(arr.every((element)=>element%2==0));
