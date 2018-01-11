var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index");
});


//  app.listen(process.env.PORT,process.env.IP,function(){
//      console.log("Server has Started");
//  });


const PORT = process.env.PORT || 3000;


 app.listen(PORT,function(){
     console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
 });
