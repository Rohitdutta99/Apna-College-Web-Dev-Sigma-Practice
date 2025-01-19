// function getNum(){
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo(){ // await can only be used in async functions
//     await getNum();
//     await getNum();
//     await getNum();
// }

// demo();


let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 10) + 1;
        if (num > 5) {
            reject("weak connection.");
        }
        else {
            setTimeout(() => {
                h1.style.color = color;
                console.log("color changed to: " + color);
                resolve();
            }, delay);
        }
    });
}

async function tweekColor() {
    try {
        await changeColor("red", 1000);
        await changeColor("blue", 1000);
        await changeColor("orange", 1000);
    }
    catch (err) {
        console.log("error caught.");
        console.log(err);
    }

    let a = 5;
    console.log("sum (45+5): ", 45 + a);
}

tweekColor();