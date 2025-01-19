let btn = document.querySelector("#search");
let ul = document.querySelector("ul");
let url = "http://universities.hipolabs.com/search?name=";
let body = document.querySelector("body");

btn.addEventListener(("click"), async (e) => {
    ul.innerHTML = ""
    let existingP = document.querySelector("body p"); // finding if there is any existing p or not
    if(existingP){
        existingP.remove();
    }
    let country = document.querySelector("input").value;
    let colleges = await getColleges(country);
    show(colleges);


});

function show(colleges) {
    if (colleges[0].country != "India") {
        let p = document.createElement("p");
        p.innerText = "Please enter a state within India."
        body.append(p);
    }
    else {
        for (element of colleges) {
            // console.log(element.name);
            // p.innerText = element.name;
            let li = document.createElement("li");
            li.innerText = element.name;
            ul.append(li);
            console.log(element);
        };
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("error: ", e);
    }
}