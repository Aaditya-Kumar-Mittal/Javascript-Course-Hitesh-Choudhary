const one = () => {
    console.log('I am One');
}
const two = () => {
    setTimeout(() => {
        console.log('Ran a callback funtion in two() after three seconds!');
    }, 3000);
    console.log('I am Two');
}
const three = () => {
    console.log('I am Three');
}

two();
three();
one();

//Above is the code for non-blocking io