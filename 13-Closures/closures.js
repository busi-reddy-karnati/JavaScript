function userName(){
    var firstname = "Busi";
    var getFirstName = function(){
        console.log(firstname);
    }
    return getFirstName;
}

//Now we have reference to getFirstName from above. That cannot be freed from memory as it gave away reference(Not exactly but for understanding)
var username = userName();

username()
