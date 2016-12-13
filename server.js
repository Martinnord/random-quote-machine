var express = require('express');
var app = express();
var port = 3030;

var router = require('./app/routes');
app.use('/', router);

app.use(express.static(__dirname + './public/'));

app.listen(3030, function(){
  console.log("Server is on");
});
