//handle all the API route for that is user-related
//such as saving the user to database, create a new album for a user
//or save a photo to already existing album
//Author: Eric Le

var usersController = require('./usersController.js');

module.exports = function(app) {
  // app is the userrouter injected from middleware file
  app.post('/saveuser', usersController.saveUser);
  app.post('/createnewalbum', usersController.createNewAlbum);
  app.post('/savephototoalbum', usersController.savePhotoToAlbum);
};
