var circleElement = document.querySelector(".circle");
var warningElement = document.querySelector(".warning")


// element.addEventListener(event, function). When the event takes place, fire the function
circleElement.addEventListener("mouseenter",()=>{
    warningElement.innerHTML = "No. Go out "
});
circleElement.addEventListener("mouseleave",()=>{
    warningElement.innerHTML = "Good, Now don't be stupid again"
});