//npm
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//init express
var app = express ();
var PORT = process.env.PORT || 8800;

//bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));
app.use(express.static(_dirname + '/route'));

//routes

//listening
app.listen(PORT, function(){
  console.log("Listening On Port: " + PORT);
});
