/*
If we are requesting data, we shouldn't be treating that as a local variable as it takes some time
We can have a promise which says I promise I will get back to you either i resolve or reject the promise
*/

const funcOne = () => {
  return "I am One";
};
const funcTwo = () => {
  //   setTimeout(() => {
  //     return "I am Two";
  //   }, 3000);

  return new Promise((resolve, reject) => {
    //This is resolved
    setInterval(() => resolve("I am Two"), 3000);
  });
};
const funcThree = () => {
  return "I am Three";
};

const callMe = async () => {
  const valOne = funcOne();
  console.log(valOne);

  //Await says that don't go out if I am executing and wait until I am done
  const valTwo = await funcTwo();
  console.log(valTwo);

  const valThree = funcThree();
  console.log(valThree);
};

callMe(); //Without async, this doesn't know the value of valTwo as it needs to wait for 3000ms
