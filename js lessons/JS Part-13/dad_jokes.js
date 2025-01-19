let url = "https://icanhazdadjoke.com/";
let btn = document.querySelector("#btn");
let p = document.querySelector("p");

btn.addEventListener(("click"), async (e)=> {
    let joke = await getJoke();
    p.innerText = joke.data.joke;
});

async function getJoke() {
    try{
        const config = { headers: {Accept: "application/json"}};
        let data = await axios.get(url, config);
        // console.log(data.data.joke);
        return data;
    }catch(err){
        console.log("error: ", err);
    }
}