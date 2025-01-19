let p = document.querySelector('p');
let inp = document.querySelector('input');
inp.addEventListener("input", (e)=> {
    e.preventDefault();
    p.innerText = inp.value;
});