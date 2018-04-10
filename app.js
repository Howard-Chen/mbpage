var path = require('path');
var express = require("express");
var app = express();
var fs = require('fs');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


if(!fs.existsSync('./smtpConfig.js')) {
    const configGenerate = require('./smtpConfigGenerator');
    configGenerate();
    console.log("please setup the config file(smtpConfig.js) before running the server");
    return;
}
else {

}

app.set("view engine","ejs");

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.post('/contact', function (req, res) {
    const smtpConfig = require('./smtpConfig');
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: smtpConfig.user,
      pass: smtpConfig.pass
    }
  });
  
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: "howard@mountain.black,lance@mountain.black,tim@mountain.black",
    subject: `${req.body.topic}`,
    text:"來自"+  `${req.body.name} (${req.body.email})` +" : \n\n"+  ` ${req.body.message} `+"\n\n\n由黑山官網發出的訊息"
  };
  
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.send('傳送失敗');
    }
    else {
      res.render('contact-success');
    }
  });
});



app.get("/",function(req,res){
    res.render("index.ejs",{fade:true,ind:0});
});

app.get("/about",function(req,res){
    res.render("about.ejs",{fade:false,ind:1});
});

app.get("/contact",function(req,res){
    res.render("contact.ejs",{fade:false,ind:2});
});

app.get("/reel",function(req,res){
    res.render("reel.ejs",{fade:false,ind:3});
});

app.get("/works",function(req,res){
    res.render("works.ejs",{fade:false,ind:4});
});





const PORT = process.env.PORT || 3000;


 app.listen(PORT,function(){
     console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
 });
