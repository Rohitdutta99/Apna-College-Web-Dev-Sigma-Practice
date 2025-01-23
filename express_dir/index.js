const express = require("express");
const app = express();
// console.log(app); //prints the express object
const port = 3000;

app.listen(port, ()=> {
    console.log(`app listening to port: "${port}"`);
});

app.get("/", (req, res)=> {
    res.send("you entered the root route!")
})

// path-parameters
app.get("/:username/:id", (req, res)=> {
    let {username, id} = req.params;
    let htmlStr = `Welcome to the page of @${username}`
    res.send(htmlStr);
})

// query string
app.get("/search", (req, res)=> {
    let {q} = req.query;
    if(!q){
        res.send(`<h1>nothing searched</h1>`);
    }
    else
        res.send(`<h1>you searched for: ${q}</h1>`);
});

app.get("/apple", (req, res)=> {
    res.send("you entered the apple path!")
})

app.get("/orange", (req, res)=> {
    res.send("you entered the orange path!")
})

// standard response if path or route doesn't exist but user entered to search
app.get("*", (req, res)=> {
    res.send("this route doesn't exist.")
})

app.post("/new", (req, res)=> {
    res.send("this is a post request.")
})

// app.use((req, res) => {
//     // console.log(req); // prints the response object
//     console.log("request received!");
//     // res.send("Hello! nice to meet you </br> <h1>This is a Header</h1>");
//     res.send({
//         name: "rohit",
//         role: "developer"
//     });
// })