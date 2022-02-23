var express = require('express');
var path = require('path');
var app = express();

var absPath = path.join(__dirname, 'public');
console.log('Absolute Path: ', absPath);

var publicDir = express.static(absPath);
app.use(publicDir);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
