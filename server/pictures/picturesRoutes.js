var picturesController = require('./picturesController.js');

module.exports = function(app) {
  // app is the userrouter injected from middleware file
  app.post('/', picturesController.getPicture);
};
