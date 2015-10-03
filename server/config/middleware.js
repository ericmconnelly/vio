var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function(app, express) {
  // define routers
  var picturesRouter = express.Router();

  app.use(bodyParser.urlencoded({ extended: true, limit:'50mb' }));
  app.use(morgan('dev'));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(cors());

  // We point to our static assets
  app.use(express.static(__dirname));

  // define API paths
  app.use('/api/pictures', picturesRouter);
  // auth middleware will be here if we allow users to login w/o facebook

  // require route files
  require('../pictures/picturesRoutes.js')(picturesRouter);

};
