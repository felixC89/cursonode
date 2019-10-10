var express = require("express");
var app = express();

app.set("view engine","jade");

var morgan = require("morgan");

app.get('/',(req,res)=>{
    //res.send("hello world 1.0");
    res.render("index");
})

app.listen(8080);