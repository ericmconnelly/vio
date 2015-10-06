var albumsController = require('./albumsController.js');

module.exports = function(app) {
  // app is the userrouter injected from middleware file
  app.post('/getrecentpicbytag', albumsController.getMostRecentPicByTag);
  app.post('/searchpicbytag', albumsController.searchPicByTag);
  app.post('/searchpicbylocation', albumsController.searchPicByLocation);
  app.post('/searchuser', albumsController.searchUser);
  app.post('/searchmediabyuserid', albumsController.searchMediaByUserID);
};
