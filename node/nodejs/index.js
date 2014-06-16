var express = require('express');

var PORT = 3000;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello Node.js\n');
});

app.listen(PORT);
console.log('Express server listening on port ' + PORT);

