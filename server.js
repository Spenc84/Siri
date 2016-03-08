var express = require('express');
var app = express();

var messages = ["Oh, it's you again...", "I'm sorry, your request has no value", "The magic 8-ball says... No.", "Don't you have anything better to do?!", "The answer is... '42'"];

var randomizer = function(){
  var num = Math.floor(Math.random() * 5);
  return messages[num];
};

// GET POST PUT
app.get('/response', function( req, res ){
  res.send(JSON.stringify({ message: randomizer() }));
});

app.listen(8887, function(){
  console.log('Listening on port 8887');
});
