let url = "https://catfact.ninja/fact";
let btn = document.querySelector("#result");
let p = document.querySelector("p");

async function getFact() {
    try{
        let res = await axios.get(url)
        // console.log(res);
        return res.data.fact;
    }catch(err){
        console.log("error: ", err);
        return "No fact Found"
    }
}

btn.addEventListener(("click"), async (e)=>{
    let fact = await getFact();
    p.innerText = fact;
});
