var express = require('express');
var dotenv = require('dotenv');

dotenv.load();
var app = express();

// configure the server with all the middleware and the routing
require('./config/middleware')(app, express);

var isProduction = process.env.NODE_ENV === 'production';
//define the port number to work both locally and in production
var port = isProduction ? process.env.PORT : 4000;

app.listen(port);

console.log('Server now listening on port ' + port);
module.exports = app;
