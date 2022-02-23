var express = require('express');
var path = require('path');
var app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

var absPath = path.join(__dirname, 'public');

console.log('Absolute Path: ', absPath);

var publicDir = express.static('public');

app.use(publicDir);
