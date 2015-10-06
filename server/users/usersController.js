var mongoose = require('mongoose');
var User = require('./usersModel.js');
var AlbumsSchema = require('../albums/albumsSchema');
var Album = mongoose.model('Picture', AlbumsSchema);

module.exports = {
  saveUser: function(req, res) {
    var userInstagramId = req.body.user.user.id;
    var userName = req.body.user.user.full_name;
    var pictureURL = req.body.user.user.profile_picture;

    User.findOne({instagramId: req.body.user.user.id})
      .exec(function(err, found) {
        if (found) {
          res.status(200).send('User already existed!');
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
  }
};

