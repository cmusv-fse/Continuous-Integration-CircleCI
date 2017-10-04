var express = require('express');
var app = express();

process.title = process.argv[2];

var port = normalizePort(process.env.PORT || '3000');

app.get('/', function (req, res) {
		  res.send('Hi. How are you today! Thanks Komala!');
});

app.listen(port, function () {
		  console.log('Example app listening on port ' + port);
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

