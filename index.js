var express = require('express');
var app = express();
var PORT = 3000;
 
app.get('/', function (req, res) {
  res.send('ok');
});
 

app.listen(PORT);

