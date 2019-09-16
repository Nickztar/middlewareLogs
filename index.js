const express = require("express");
const log = require("./log");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(log);
app.get('/home', (req, res)=>{
    res.send("ganggang");
});

app.listen(5200, ()=>console.log("Running on port 5200"));