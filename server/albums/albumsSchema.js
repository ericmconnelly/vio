var mongoose = require('mongoose');

var AlbumsSchema = new mongoose.Schema({
  albumId: {
    type: String,
    required: true
  },
  pictures: [],
});

module.exports = AlbumsSchema;
