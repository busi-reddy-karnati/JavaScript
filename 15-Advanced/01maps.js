/*
Maps aren't objects, they are data structures only
*/
var myMap = new Map();
myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");
console.log(myMap.get(1));
for (let key of myMap.keys()) {
  console.log(myMap.get(key));
}
for (let [key, value] of myMap) {
  console.log(`key is ${key} and value is ${value}`);
}

//This gives values not keys
myMap.forEach((key) => console.log(key));
myMap.forEach((value, key) => console.log(key, value)); //Gives value,key pair
myMap.forEach((value) => console.log(value)); //actual correct one
