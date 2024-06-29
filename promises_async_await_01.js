const one = () => {
    return 'I am One!';
}
const two = () => {
    setTimeout(() => {
        return 'I am Two! in a setTimeOut callback function after 3 seconds';
    }, 3000);

}
const twoAsyncOnly = async () => {
    setTimeout(() => {
        return 'I am Two! in a setTimeOut callback function after 3 seconds';
    }, 3000);

}
const three = () => {
    return 'I am Three!';
}


const callMeOne = () => {
    var oneFunc = one();
    console.log(oneFunc);
    var twoFunc = two();
    console.log(twoFunc); //undefined
    var threeFunc = three();
    console.log(threeFunc);
}


callMeOne();


const callMeTwo = () => {
    var oneFunc = one();
    console.log(oneFunc);
    var twoFunc = twoAsyncOnly();
    console.log(twoFunc); //Promise { undefined }
    var threeFunc = three();
    console.log(threeFunc);
}

callMeTwo();

const twoPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am two with await and promise. Resolved the task successfully!");
        }, 3000);

    });
}


const callMeThree= async()=>{
    var oneFunc = one();
    console.log(oneFunc);
    var twoFunc = await twoPromise(); // await means until you finish doing the twoPromise call don't jump to the next line
    console.log(twoFunc); //Promise { undefined }
    var threeFunc = three();
    console.log(threeFunc);
}

callMeThree();

/*
Whenver you are going to make an API request or a database request, that request may not be fulfilled in an instant. Even when the databases are on the same network of AWS or Hostinger, they take some time to fetch and return the results. It is beneficial to write the variables in asynchronous manner.

A Promise has two states - either fullfilled or not fulfilled

*/