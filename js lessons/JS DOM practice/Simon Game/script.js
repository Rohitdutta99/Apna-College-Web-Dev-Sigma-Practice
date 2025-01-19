var gameSeq = [];
var userSeq = [];
var level = 0;
var gameStatus = false;
var highScore = 0;

let body = document.querySelector("body");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let orange = document.querySelector(".orange");
let blue = document.querySelector(".blue");

let colors = ["red", "green", "orange", "blue"];


let h3 = document.querySelector("h3");

document.addEventListener("keypress", (e)=> {
    if(gameStatus == false){
        gameStatus = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randombtnName = colors[Math.floor(Math.random() * 4)];
    let btnToBlink = document.querySelector(`.${randombtnName}`);
    setTimeout(function() {
        gameFlash(btnToBlink);
    },1000);
    gameSeq.push(randombtnName);
    // alert(gameSeq);
}

function gameFlash(btn){
    btn.classList.add("blink");
    setTimeout(function() {
        btn.classList.remove("blink");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userblink");
    setTimeout(function() {
        btn.classList.remove("userblink");
    }, 250);
}

// part-2
function checkAns(index){
    // let index = level-1;

    if (userSeq[index] === gameSeq[index]){
        if(userSeq.length === gameSeq.length){
            levelUp();
        }
    }
    else{
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "white";
        }, 500);
        if (level > highScore){
            highScore = level;
        }
        h3.innerText = `High Score: ${highScore}\nGame Over, Your Score was ${level} \nPress any key to start.`;
        reset();
    }
}

function btnPressed(){
    if (gameStatus == true){
        let btn = this;
        userFlash(btn);

        userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
    }
}

let allBtns = document.querySelectorAll(".box");
for (btn of allBtns){
    btn.addEventListener("click", btnPressed);
}


function reset(){
    gameStatus = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}