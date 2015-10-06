var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var path = require('path');

module.exports = function(app, express) {
  // define routers
  var albumsRouter = express.Router();
  var usersRouter = express.Router();

  app.use(bodyParser.urlencoded({ extended: true, limit:'50mb' }));
  app.use(morgan('dev'));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(cors());
  app.use(cookieParser());
  app.use(cookieSession({secret: process.env.SESSION_SECRET}));


  // We point to our static assets
  app.use(express.static(path.resolve(__dirname, '..', '..', 'build')));

  // define API paths
  app.use('/api/albums', albumsRouter);
  app.use('/api/users', usersRouter);
  // auth middleware will be here if we allow users to login w/o facebook

  // require route files
  require('../albums/albumsRoutes.js')(albumsRouter);
  require('../users/usersRoutes.js')(usersRouter);

};
