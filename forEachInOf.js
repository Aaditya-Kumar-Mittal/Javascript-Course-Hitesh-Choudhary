const myStates = [
    "Rajasthan",
    "Haryana",
    "Gujarat",
    "Punjab",
    "Uttarakhand",
    "Himachal Pradesh",
    1947
]

myStates.forEach((e) => { console.log(e) })

for (const iterator of myStates) {
    console.log(iterator);
}

const symbols = {
    yt: "YouTube",
    fb: "Facebook",
    ig: "Instagram",
    tg: "Telegram",
    nf: "NetFlix",
    az: "Amazon",
    gg: "Google",
    mt: "Meta",
    oc: "Oracle"
}

for (const key in symbols) {
    console.log(`${key} : ${symbols[key]}` );
}