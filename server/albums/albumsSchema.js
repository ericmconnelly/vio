var mongoose = require('mongoose');

var AlbumsSchema = new mongoose.Schema({
  albumID: {
    type: String,
    required: true
  },
  pictures: [],
});

module.exports = AlbumsSchema;
