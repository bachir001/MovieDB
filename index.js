var express = require('express');
var app = express();
var PORT = 3000;
 
const date = new Date();




app.get('/', function (req, res) {
  res.send('ok');
});
 

app.get('/test', function (req, res) {
  res.send({status:200, message:"ok"});
});
 


app.get('/time', function (req, res) {


   
  res.send({status:200,message: date.getHours()+":"+date.getSeconds() });

});
 

app.listen(PORT);

