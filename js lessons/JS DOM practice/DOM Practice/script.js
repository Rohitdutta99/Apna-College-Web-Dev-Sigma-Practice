let body = document.querySelector('body');
let para1 = document.createElement('p');
let h3 = document.createElement('h3');
let div = document.createElement('div');
let h1  = document.createElement('h1');
let para2 = document.createElement('p');


para1.innerText = "Hey I'm red!";
para1.classList.add("red");
body.append(para1);


h3.innerText = "I'm a blue h3!";
h3.classList.add("blue");
body.append(h3);

h1.innerText = "I'm a div";
para2.innerText = "ME TOO!";
div.append(h1, para2);
div.classList.add("box");
body.append(div);

let hr = document.createElement('hr');
body.append(hr);
// PART-2
let inp = document.createElement('input');
inp.placeholder = "username";
body.append(inp);

let butt = document.createElement('button');
butt.innerText = "Click Me";
body.append(butt);
butt.setAttribute("id", "btn");

let btn = document.querySelector("#btn")
btn.classList.add("but");

let h1New = document.createElement('h1');
h1New.innerText = "DOM Practice";
h1New.classList.add("h1Style");
body.append(h1New);

let newP = document.createElement('p');
newP.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(newP);


btn.onclick = () =>{
    alert("button clicked!");
}

btn.onmouseenter = () =>{
    btn.classList.add("butHover");
}

btn.onmouseleave = () => {
    btn.classList.remove("butHover");
}



