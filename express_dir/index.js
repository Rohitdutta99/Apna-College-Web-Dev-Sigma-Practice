const express = require("express");
const app = express();
// console.log(app); //prints the express object
const port = 3000;

app.listen(port, ()=> {
    console.log(`app listening to port: "${port}"`);
});

app.use((req, res) => {
    console.log("request received!");
})