/*
Let us handle APIs here
*/
//fetch also has a Promise .then is used to handle success. 2nd .then takes the output from 1st .then
//We can have try catch blocks here

// fetch("https://api.chucknorris.io/jokes/random")
fetch("https://api.chucknorris.io/jokes/random", {
  method: "GET",
  headers: {
    "Content-Type": "text/plain",
  },
})
  .then((response) => {
    // console.log(response.json); this is for one .then
    return response.json();
  }) //This is success so we have output and we can execute. This is execution after success
  .then((data) => {
    console.log(data);
  })
  .catch(); //This is after the promise is rejected or not fulfilled
