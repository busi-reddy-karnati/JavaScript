arr = [1,2,3,4,5,6,7,8]

//Starting from 0, ending with 1(2-1) give that out
console.log(arr.slice(0,2));

//Starting with index 3, remove 2 elements and replace that with 1(can also be 1,2,3)
arr.splice(3,2,1)
console.log(arr);