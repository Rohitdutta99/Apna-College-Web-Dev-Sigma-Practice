let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let img = document.querySelector("img");

btn.addEventListener(("click"), async (e)=> {
    let link = await getImage();
    img.setAttribute("src", link);
});

async function getImage() {
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch(err){
        console.log("error: ", err);
        return "/";
    }
    
}
