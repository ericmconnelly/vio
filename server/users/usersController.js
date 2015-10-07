var mongoose = require('mongoose');
var User = require('./usersModel.js');
var AlbumsSchema = require('../albums/albumsSchema');
var Album = mongoose.model('Picture', AlbumsSchema);

module.exports = {

  //A function that save a user information to database
  //when they successfully log in
  //Author: Eric Le
  saveUser: function(req, res) {
    var userInstagramId = req.body.user.user.id;
    var userName = req.body.user.user.full_name;
    var pictureURL = req.body.user.user.profile_picture;

    User.findOne({instagramId: req.body.user.user.id})
      .exec(function(err, found) {
        if (found) {
          res.status(200).send(found);
        } else {
          var newUser = new User({
            instagramId: userInstagramId,
            name: userName,
            profilePicture : pictureURL,
            albums : []
          });

          newUser.save(function(err, user) {
            if (err) {
              res.status(500).send('Error saving user to Vio DB\n\n' + err);
            } else {
              res.status(200).send(user);
            }
          });
      }
    });
  },

  //A function that initialize an empty album within a user schema
  //Author: Eric Le
  createNewAlbum: function(req, res) {
    var userID = req.body.userID;

    User.findOne({instagramId: userID})
      .exec(function(err, user) {
        if (!user) {
          res.status(500).send('User Not Found!');
        } else {
          var albumID = user.albums.length;

          var newAlbum = new Album({
            albumID: albumID,
            pictures: []
          });

          user.albums.push(newAlbum);

          user.markModified('albums');

          user.save(function(err, user) {
            if (err) {
              res.status(500).send('Error saving user to Vio DB\n\n' + err);
            } else {
              res.status(200).send(user);
            }
          });
      }
    });
  },

  //A function that save a user information to database
  //when they successfully log in
  //Author: Eric Le
  savePhotoToAlbum: function(req, res){
    var albumID = req.body.albumID;
    var photo = req.body.photo;
    var userID = req.body.userID;
    User.findOne({instagramId: userID})
    .exec(function(err, user) {
      if (!user) {
        res.status(500).send('User Not Found!');
      } else {
        user.albums.forEach(function(album){
          if(album.albumID === albumID){
            album.pictures.push(photo);
            user.markModified('albums');
            user.save();
            res.send(photo);
          }
        });
      }

    });
  }
};

