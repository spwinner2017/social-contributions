const http = require('http');

const hostname = '127.0.0.1';
var express = require("express");
var bodyParser = require("body-parser");
var app = express(); 
var fs = require("fs");
var router=express.Router();
var payloadresponse=require('./model/payload-response')
// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    res.header('Content-Type', 'application/json');
    next();
});
//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

 
 app.get('/listUsers',function(req,res){
    console.log(__dirname);
    fs.readFile(__dirname+'/jsonfiles/'+'user.json','utf8',function(err,data){
    console.log(data);
    console.log('this is test data');
  // var x = {};
  // var key = 'Orientation Sensor';
  // x[key] = data;
     res.end(data);
})
}); 
app.get('/testuser',function(req,res){
 res.end('this is test user');
});




