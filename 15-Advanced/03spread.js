/*
...var is spread or rest based on scenarios


*/

function sumOne(a, b) {
  return a + b;
}
console.log(sumOne(1, 2)); //Goes well
console.log(sumOne(1, 2, 3)); //Ignores 3 as it doesn't understand it
ar = [1, 2];
console.log(sumOne(ar)); //Doesn't understand this. We need to convert the array to individual values
console.log(sumOne(...ar)); //... here is a spread operator, this converts array to individual elements

//doesn't know how many arguments to expect after a,b(the first two are normal)
function sumTwo(a, b, ...args) {
  console.log(a * b);
  var sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  console.log(sum);
}
sumTwo(1, 2);
sumTwo(1, 2, 3, 4, 5);
sumTwo(...[1, 2, 3, 4, 5]);
