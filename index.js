const express = require("express");
const log = require("./log");

//Initialization
const app = express();

//Universal Middleware
app.use(express.urlencoded({extended: false}));
app.use(log);

//Routes
app.get('/home', (req, res)=>{
    res.send("ganggang");
});

//Porting
app.listen(5200, ()=>console.log("Running on port 5200"));