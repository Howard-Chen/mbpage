var path = require('path');
var express = require("express");
var app = express();


app.set("view engine","ejs");

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.get("/",function(req,res){
    res.render("index.ejs",{fade:false});
});

app.get("/about",function(req,res){
    res.render("about.ejs",{fade:false});
});

app.get("/contact",function(req,res){
    res.render("contact.ejs",{fade:false});
});

app.get("/reel",function(req,res){
    res.render("reel.ejs",{fade:false});
});

app.get("/works",function(req,res){
    res.render("works.ejs",{fade:false});
});




const PORT = process.env.PORT || 3000;


 app.listen(PORT,function(){
     console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
 });
