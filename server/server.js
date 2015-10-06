var express = require('express');
var db = require('./config/dbConfig');
var dotenv = require('dotenv');
var mongoose = require('mongoose');

dotenv.load();
var app = express();

// configure the server with all the middleware and the routing
require('./config/middleware')(app, express);

mongoose.connect(db.url);
mongoose.connection.once('connected', function() {
  console.log('Vio database is connected!');
});

var isProduction = process.env.NODE_ENV === 'production';
//define the port number to work both locally and in production
var port = isProduction ? process.env.PORT : 4000;

app.listen(port);

console.log('Server now listening on port ' + port);
module.exports = app;
