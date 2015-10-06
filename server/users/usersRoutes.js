var usersController = require('./usersController.js');

module.exports = function(app) {
  // app is the userrouter injected from middleware file
  app.post('/saveuser', usersController.saveUser);
};
