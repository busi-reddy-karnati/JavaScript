/*
    var was not designed to be used at Backend(very strict backend)
    If we use var everywhere, it works fine, but that isn't safe coding
    var is lenient and takes undefined for erroneous coding/ logic/ definitions

    In JS, a function is considered scope and there is global context

    Use let when data is sensitive/ in the Backend mostly
*/

console.log(name);//This is undefined since every var takes undefined in global execution context
var name = "reddy";

if(true){
    var lastName = "karnati";
}

console.log(lastName);//lastName is present because it is var and that goes to global context, so use let so that once scope goes out, it doesn't appear afterwards
