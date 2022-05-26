//Lets say I want the background color of an element

element = document.querySelector(".green")

// console.log(element); this is the element


//Now this gets the styles that were computed for element in this window
console.log(window.getComputedStyle(element).backgroundColor);