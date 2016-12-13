var express = require('express');
var path = require('path');
var app = express();
var port = 3030;

var router = require('./app/routes');

const basedir = __dirname + '/public/';

app.use(express.static(basedir));

app.get('/', function(req, res) {
  res.sendFile(basedir + 'index.html');
});

app.listen(3030, function(){
  console.log("Server is on");
});
