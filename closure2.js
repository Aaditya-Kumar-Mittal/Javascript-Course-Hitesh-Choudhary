function doAddition(x) {
    return function (y) {
        return x + y;
    }
}

// It will give you reference of the function and the  add the things

var add5 = doAddition(4); //Add5 holds a reference

console.log(add5(5));

console.log(doAddition(6)(8)); //This is also called curring

