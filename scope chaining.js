var name = "Aaditya"

console.log(`Line number 3 ${name}`);

function sayName() { // An execution context loaded onto the global context
    var name = "Mr. Aaditya"
    console.log(`Line number 6 ${name}`);

    sayNameTwo();

    function sayNameTwo(params) {
        console.log(`Line number 12 ${name}`);
    }
}



sayName()