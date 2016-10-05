var express = require('express');
var app = express();

process.title = process.argv[2];

var port = normalizePort(process.env.PORT || '3000');

app.get('/', function (req, res) {
		  res.send('Hello world!');
});

app.listen(port, function () {
		  console.log('Example app listening on port ' + port);
});
