var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "Quatro");

console.log(myMap);

//map is not regular object


//for-of loop will always give you the key first 
for (let [key, value] of myMap) {
    console.log(`Key of map is ${key} and the value is ${value}`);
}

console.log();

//for-each will always give you the value first 
myMap.forEach(value => console.log(`Value is ${value}`)); //always gives the value only and not the key 

console.log();

myMap.forEach((value, key) => console.log(`Value is ${value} and key is ${key}`)); //always gives the value only and not the key 

myMap.delete(2);

console.log();

console.log(myMap);