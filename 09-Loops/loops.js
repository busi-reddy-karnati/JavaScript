for(let i=0;i<10;i++){
    console.log(i);
}

const myStates = ["TG", "AP", "Assam", "Tamil Nadu",1947]

for(let i=0;i<myStates.length;i++){
    console.log(myStates[i]);
}

for(let i=0;i<myStates.length;i++){
    if(typeof myStates[i] != "string")
        continue;

    console.log(myStates[i])
}
myStates.forEach(element => {
    console.log(element);
});