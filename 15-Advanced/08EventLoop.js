/*
If we have many components, how would you want to load the comps?
We want others to load while large image is being loaded

https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

EventLoop is a loop that waits for an event
//Non blocking io. Which doesn't wait for anything on the CPU. 

//But I can't let something execute until dependencies are met(Block the IO)
*/

const funcOne = () => {
  console.log("I am One");
};
const funcTwo = () => {
  setTimeout(() => {
    console.log("This is executed after waiting 3000ms");
  }, 3000); //This is sent into message queue to come after 3000ms but the rest can go and execute.
  console.log("I am Two");
};
const funcThree = () => {
  console.log("I am Three");
};

funcOne();
funcTwo(); //Since this has a timeout function, the next line gets executed instead of waiting. This is called NON IO blocking. But let's say the waiting should be done
//The way we do that is await
funcThree();
