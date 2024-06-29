fetch('https://api.chucknorris.io/jokes/random')
    .then(response => { return response.json(); })
    .then((data) => {
        console.log("Data is: ", data); 
        console.log();
        return data;
    })
    .then((dataVal) => { console.log("JOKE :", dataVal.value); })
    .catch();