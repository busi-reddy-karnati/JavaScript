var counter = document.querySelector(".counter");
// console.log(counter.innerHTML); gives 100

var title = document.querySelector("#title")
console.log(title);

//set interval(function, time) for every time milliseconds, execute the function
setInterval(()=>{
    //Count till it reached a 1000
    if(counter.innerHTML <1000){
        counter.innerHTML = parseInt(counter.innerHTML)+1;
    }
},1)

// setTimeOut(function, time) after time milliseconds, execute function
setTimeout(()=>{
    title.innerHTML = "Counter Done"
}, 7000)
