const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const https = require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

app.post("/", function(req,res){
   var firstname = req.body.fname;
   var lastname = req.body.lname;
   var email = req.body.email;
   var data = {
   members: [
    {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: firstname,
            LNAME: lastname
        }
    }
   ]
}
const url = "https://us10.api.mailchimp.com/3.0/list/de6ba63c4c";

const options = {
    method: "POST",
    auth: "222e2eafbf36d0baf90c3fcbaf9629d2-us10"
}
 https.get(url,function(naman){
    if (naman.statusCode==401){
        res.sendFile(__dirname + "/success.html")
    }
    else{
        res.sendFile(__dirname + "/failure.html")
    }
 })
 app.post("/failure", function(req,res){
    res.redirect("/")
 })
 var firstname = req.body.fname;
 var llastname = req.body.lname
 console.log(firstname,lastname);
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running");
})
//list id 
// de6ba63c4c
//api key
// 222e2eafbf36d0baf90c3fcbaf9629d2-us10