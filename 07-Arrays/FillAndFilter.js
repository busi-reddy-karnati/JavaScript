var arr = [1,2,3,4,5,6]

//Fill the array starting from index 1 and ending at index 2-1 with 3
arr.fill(3,1,2)
console.log(arr);

//Let us say I want only even numbers
var evenNumbers = arr.filter((num)=>num%2==0)
console.log(evenNumbers);