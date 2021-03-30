var express = require('express');
var app = express();
var PORT = 3000;
const date = new Date(); 

const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]


// let Data = JSON.stringify(movies,null,2)



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






app.get('/movies/create', function (req, res) {
  res.send({status:200, message:"movies create "});
});


app.get('/movies/read', function (req, res) {
  let data=movies;
  res.send({status:200, message: data });

});


app.get('/movies/update', function (req, res) {
  res.send({status:200, message:"movies update  "});
});

app.get('/movies/delete', function (req, res) {
  res.send({status:200, message:"movies delete "});
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

