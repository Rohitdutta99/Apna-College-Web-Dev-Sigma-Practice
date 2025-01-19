let p = document.querySelector("p");
let btn = document.querySelector("#btn");

let url = "https://catfact.ninja/fact";

async function newFact() {
    try {
        let res = await fetch(url);
        let data = await res.json();

        p.innerHTML = data.fact;
        
        // fetch(url)
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data)=> {
        //         p.innerText = data.fact;
        //     })
        //     .catch((error) => {
        //         console.log("error: ", error);
        //     })
    }catch(err){
        console.log("error: ", err);
    }
}

btn.addEventListener(("click"), newFact);