// let h1 = document.querySelector("h1");


// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         let num = Math.floor(Math.random() * 10) + 1;
//         if (num > 5) {
//             setTimeout(() => {
//                 h1.style.color = color;
//                 resolve("color changed!");
//             }, delay);
//         }
//         else {
//             reject("err: color not changed.");
//         }
//     });
// }


// changeColor("red", 1000).then((result) => {
//     console.log("color changed to red!");
//     console.log("result 1: " + result);
//     return changeColor("blue", 1000);
// }).then((result) => {
//     console.log("color changed to blue!");
//     console.log("result 2: " + result);
//     return changeColor("orange", 1000);
// }).then((result) => {
//     console.log("color changed to orange!");
//     console.log("result 3: " + result);
//     return changeColor("aqua", 1000);
// }).then((result) => {
//     console.log("color changed to aqua!");
//     console.log("result 4: " + result);
// }).catch((result) => {
//     console.log("color cannot be changed.");
//     console.log(result);
// });

async function greet() {
    // throw "some random error";
    return "hello"; // returns a promise
}

// can be done same on arrow functions

greet().then((result)=> {
    console.log("promise successful!");
    console.log("result was: "+result);
}).catch((err)=> {
    console.log("promise rejected due to: "+err);
})

// let hello = async ()=> {}; //returns a promise
let demo = async ()=> {
    return 5;
}