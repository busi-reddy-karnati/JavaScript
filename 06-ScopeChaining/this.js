/*
this is a variable holding the scopr

*/
console.log(this);//This will print the context, In browser, this prints the windows, here it prints a global context

function funcOne(){
    //This isn't an empty scope
    console.log(this);
}

funcOne()
