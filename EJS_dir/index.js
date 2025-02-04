const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=> {
    res.render("home.ejs");
});
// app.get("/", (req, res)=> {
//     res.render("home"); // also can be done like this
// });


// passing value to ejs from js
app.get("/rolldice", (req, res)=> {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceVal : num});
    // res.render("rolldice.ejs", {num});
});

// instagram activity
app.get("/:ig/:username", (req, res)=> {
    // const followers = ["adam", "bob", "steve", "shraddha", "aman"];
    // let {username} = req.params;
    // res.render("instagram.ejs", {username, followers});
    let {username} = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    if(data){
        // if data exists
        res.render("instagram.ejs", {data});
    }
    else{
        // if data doesn't exist
        res.render("error.ejs");
    }
});


app.listen(port, ()=> {
    console.log(`listening to port: ${port}`);
});