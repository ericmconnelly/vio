var mongoose = require('mongoose');
var albumsSchema = require('./../albums/albumsSchema')

// represents all users of the app
var UserSchema = new mongoose.Schema({
  // user profile photo from instagram
  instagramId: {
    type: String
  },
  name: {
    type: String
  },
  profilePicture: {
    type: String
  },
  albums: [albumsSchema]
});

module.exports = mongoose.model('User', UserSchema);
