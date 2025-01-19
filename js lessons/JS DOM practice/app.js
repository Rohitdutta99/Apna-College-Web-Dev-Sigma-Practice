let arr = document.getElementsByClassName("oldImg");
// console.log(...arr);
for(let i=0; i<arr.length; i++){
    if (i==2){
        arr[2].src = "assets/creation_1.png";
    }
}

let links = document.querySelectorAll('.box a');
// for(let  i=0; i<links.length; i++){
//     links[i].style.color = "red";
// }

for(link of links){
    link.style.color = "yellow";
}

let heading = document.querySelector("h1");
let changer = document.querySelector("#color-picker");
let count = 0;
changer.addEventListener("click", ()=> {
    // heading.classList.toggle("abc"); // only turns on and off "abc" class
    count++;
    if (count%2!=0){
        heading.innerText = `Spider Man ${count}`;
        heading.classList.remove("xyz");
        heading.classList.add("abc");

        

    }
    else{
        heading.innerText = `Spider Man ${count}`;
        heading.classList.remove("abc");
        heading.classList.add("xyz");
    }
});

let butt = document.querySelector('#color-picker');
butt.previousElementSibling.style.color = "green";


let newp = document.createElement("p");
newp.innerText = "Hi! I am new para! Nice to meet you.";

let box = document.querySelector(".box ul li");
box.appendChild(newp);

// let img = document.querySelector('img');
// alert(img.classList);