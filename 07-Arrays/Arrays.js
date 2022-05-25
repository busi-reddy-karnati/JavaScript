/*
Arrays, Objects and Loops are the most important stuff in any programming language
*/
var countries = ["India", "US", "China"]

var states = new Array("Telangana", "Assam", "Maharashtra")

console.log(states[0]);
console.log(countries[0]);
console.log(states.length);

states[0] = "AP"
console.log(states);

states.pop()//Removes the last element in the last
// states.pop(0) doesn't exist in JS. We should use "shift" instead
//unshift abviously adds an element in the start

console.log(states.indexOf("AP"));
//If there is no element we are searching for, it returns -1

console.log(Array.from("Reddy"))//This converts a String into an array