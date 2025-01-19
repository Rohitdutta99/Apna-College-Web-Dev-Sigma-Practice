let body = document.querySelector('body');
// let p = document.querySelector('p');
// window.addEventListener("load", (e)=> {
//     alert("Page loaded!");
    
// })

let btn = document.createElement("button");
btn.innerText = "Click Here";
body.append(btn);

let bool = false;

btn.addEventListener("click", (e)=> {
    if (bool == false)
    {
        btn.style.backgroundColor = "green";
        bool = true;
    }
    else{
        btn.style.backgroundColor = "white";
        bool = false;
    }

});

let inp = document.createElement("input");
inp.placeholder = "enter your name";
body.append(inp);

let h2 = document.querySelector("h2");

inp.addEventListener("input", (e)=> {
    if (inp.value)
    h2.innerText = inp.value;    
});

