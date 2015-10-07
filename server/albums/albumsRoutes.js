//handle all the API route for that is photo-related
//such as get the list of photo by tag, location, user name or user id
//Author: Eric Le

var albumsController = require('./albumsController.js');

module.exports = function(app) {
  // app is the userrouter injected from middleware file
  //Author: Eric Le
  app.post('/searchpicbytag', albumsController.searchPicByTag);
  app.post('/searchpicbylocation', albumsController.searchPicByLocation);
  app.post('/searchuser', albumsController.searchUser);
  app.post('/searchmediabyuserid', albumsController.searchMediaByUserID);
};
