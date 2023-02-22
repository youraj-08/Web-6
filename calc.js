const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server Active")  // creating server.
});


// For Addition home page.

app.get("/",function(req,res){      
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req,res){

    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var re=num1+num2;

    res.send("The Output is " + re);
});


// For BMI Calc Page.

app.get("/bmiCalc",function(req,res){
    res.sendFile(__dirname +"/bmiCalc.html");
});

app.post("/bmiCalc", function(req,res){

    var w=Number(req.body.w);
    var h=Number(req.body.h);
    var r=w/(h*h);

    res.send("The Output is " + r);
});
