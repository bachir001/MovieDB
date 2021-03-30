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
 




app.get('/hello/:id', function (req, res) {
  res.send({status:200, message:"Hello , "+req.params.id});
});
 

app.get('/search',function(req,res){

  if(req.query.s){
  res.send({status:200, message:"data : "+req.query.s});

  
  }else{

    res.send( {status:500, error:true, message:"you have to provide a search"});
  }

});


// // Without middleware
// app.get('/', function(req, res){
  
//   // Equivalent to res.status(200).send('OK')
//   res.sendStatus(200); 
// });

// app.listen(PORT, function(err){
//   if (err) console.log(err);
//   console.log("Server listening on PORT", PORT);
// });




app.listen(PORT);

