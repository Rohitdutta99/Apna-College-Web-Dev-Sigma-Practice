let h3 = document.querySelector("h3");
let btn = document.querySelector("button");
let url = "https://catfact.ninja/fact";

function dataFetch(){
    fetch(url).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        // console.log(data.fact);
        h3.innerText = data.fact;
    }).catch((err) => {
        console.log("error: ", err);
    });
}
// window.addEventListener(("load"), dataFetch());
dataFetch();
btn.addEventListener(("click"), dataFetch);