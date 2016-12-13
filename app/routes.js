// Require express
var path    = require('path');
var express = require('express');

// Create our router object
var router = express.Router();


// Route to Homepage
router.get('/', function(req, res){
  res.sendFile('../public/index.html');
});

// Export router
module.exports = router;
