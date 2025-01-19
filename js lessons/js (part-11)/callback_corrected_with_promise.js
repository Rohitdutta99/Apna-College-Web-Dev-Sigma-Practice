// callback nesting or callback hell
let h1 = document.querySelector("h1");


function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 10) + 1;
        if (num > 5) {
            setTimeout(() => {
                h1.style.color = color;
                resolve("color changed!");
            }, delay);
        }
        else {
            reject("err: color not changed.");
        }
    });
}


changeColor("red", 1000).then((result) => {
    console.log("color changed to red!");
    console.log("result 1: " + result);
    return changeColor("blue", 1000);
}).then((result) => {
    console.log("color changed to blue!");
    console.log("result 2: " + result);
    return changeColor("orange", 1000);
}).then((result) => {
    console.log("color changed to orange!");
    console.log("result 3: " + result);
    return changeColor("aqua", 1000);
}).then((result) => {
    console.log("color changed to aqua!");
    console.log("result 4: " + result);
}).catch((result) => {
    console.log("color cannot be changed.");
    console.log(result);
});