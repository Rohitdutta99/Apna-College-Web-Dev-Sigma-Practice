const express = require("express");
const app = express();

const port = 4000;

app.get("/register", (req, res)=> {
    let {name, pass} = req.query;
    res.send(`standard GET response, Welcome ${name}, your password set to: ${pass}`);
});

app.post("/register", (req, res)=> {
    res.send("standard POST response");
})

app.listen(port, ()=> {
    console.log("listening to port:",port);
})