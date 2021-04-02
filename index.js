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




app.get('/', function (req, res) {
  res.send('ok');
});
 

app.get('/test', function (req, res) {
  res.send({status:200, message:"ok"});
});
 

// get time

app.get('/time', function (req, res) {

  res.send({status:200,message: date.getHours()+":"+date.getSeconds() });

});
 



// get id

app.get('/hello/:id', function (req, res) {
  res.send({status:200, message:"Hello , "+req.params.id});
});
 

// provide a search  

app.get('/search',function(req,res){

  if(req.query.s){
  res.send({status:200, message:"data : "+req.query.s});

  
  }else{

    res.send( {status:500, error:true, message:"you have to provide a search"});
  }

});




//create 

app.get('/movies/create', function (req, res) {
  res.send({status:200, message:"movies create "});
});


//standard read => return movies arrays

app.get('/movies/read', function (req, res) {
  // let data=movies;
  res.send({status:200, message: movies });

});


// organise movies base on array

app.get('/movies/read/by-date',  (req, res)=> {


  function custom_sort(a, b) {
    return new Date(a.year).getTime() - new Date(b.year).getTime();
  }

  
  var data0=[];
 for(let i=0;i<movies.length;i++){ data0.push(movies[i]);};

 data0.sort(custom_sort);
  res.send( {status:200,data:data0})



});



//second method
// app.get('/movies/read/by-date', function (req, res) {
  
// var data=[];
// for(let i=0;i<movies.length;i++){
//     data.push(movies[i]);
//   };

//   var temp;  

// for(var j=0;j<data.length;j++){
// let j_=j+1;
//   if(data[j_]){

//   if(data[j].year>data[j_].year){
//    temp=data[j+1];
//    data[j+1]=data[j];
//    data[j]=temp;
  
//   }
// }
// }


//organise movies base on rating

app.get('/movies/read/by-rating', function (req, res) {

  var data1=[];
  for(let i=0;i<movies.length;i++){ data1.push(movies[i]); };

  var temp;  

for(var j=0;j<data1.length;j++){  
  let j_=j+1;  
  if(data1[j_]){
  if(data1[j].rating<data1[j_].rating){
   temp=data1[j+1];
   data1[j+1]=data[j];
   data1[j]=temp;
  
  }
 }
   }
res.send({status:200, message: data });
});


// organise movies base on title

app.get('/movies/read/by-title',  (req, res)=> {
  
  var data2=[];
 for(let i=0;i<movies.length;i++){ data2.push(movies[i]);};

  data2.sort(function(a,b){return a.title.toLowerCase().localeCompare(b.title.toLowerCase())})
  res.send( {status:200,data:data2});

});


// organise movies base on id

app.get('/movies/read/id/:id',  (req, res)=> {
  
  var byID=[...movies];

if (req.params.id>0&req.params.id<=byID.length) {res.status(200).send( byID[req.params.id-1])}
// else if(req.params.id<=0){
//   res.send( {status:200 ,message:"the id is not not exist"})
// 
else
{
   res.sendStatus(404);
   res.send( {status:404,error:true,message:`the movie ${req.params.id} does not exist`}) 
}

});



app.get('/movies/update', function (req, res) {





  res.send({status:200, message:"movies update  "});
});

app.get('/movies/delete/:id', function (req, res) {
 
 
  // var byID=[...movies];

if (req.params.id>0&req.params.id<=movies.length) 
{

  movies.splice(req.params.id-1,1);
    
  res.status(200).send(movies);

} 
else
{
  res.send({status:404, error:true, message:'the movie '+req.params.id+' does not exist'});
}
 
  // res.send({status:200, message:"movies delete "});
});


app.get('/movies/add',function(req,res){

  if(req.query.title && req.query.year && isNaN(req.query.year)===false && req.query.year.length===4 && req.query.rating){
     

      let title=req.query.title;
      let year=req.query.year;
      let rating=req.query.rating;
      let newmovie={title:title,year:year,rating:rating};  

      movies.push(newmovie);

    
    res.send({status:200, message: movies});

  
  }else if(req.query.title&&req.query.year&&isNaN (req.query.year)==false && req.query.year.length===4){

    let rating=4;
    let title=req.query.title;
    let year=req.query.year;
    let newmovie={title:title,year:year,rating:rating};
    movies.push(newmovie);
    res.send({status:200, message: movies});


  }else{
    res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'});
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

