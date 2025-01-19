let ul = document.querySelector("ul");
let form  = document.querySelector("form");
let inp = document.querySelector("input");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let item = document.createElement("li");
    item.innerText = inp.value;

    let btnNew = document.createElement("button");
    btnNew.innerText = "Delete";
    btnNew.classList.add = "delete";

    item.appendChild(btnNew);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", (e)=>{
    e.preventDefault();
    if (e.target.nodeName == "BUTTON"){
        // let listItem = e.target.parentElement;
        // listItem.remove();
        e.target.parentElement.remove();
    }
})