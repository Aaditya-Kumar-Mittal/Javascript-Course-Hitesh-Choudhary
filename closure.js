function init() {

    console.log("I am init");

    var firstName = "hitesh"


    function sayFirstName() {

        console.log(firstName);

    }

     return sayFirstName; //We have a reference but not executing it directly;
}
//init - shortuct for initialization

//Regular function call
init();

// console.log(firstName); //gives error

//Holidng the function in variable

var nnn = init();

//Here since sayFirstName mounts on it but sicne it is reference it does not go away, so init cannot go away, similar to pointers since memory cannot be freed.

// the reference of init is not deleted, so we are able to access firstName
nnn()
