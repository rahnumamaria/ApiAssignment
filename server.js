var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('Hello world');
console.log('test RESTful API server started on: ' + port);