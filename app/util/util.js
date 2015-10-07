var config = require('../config/config.js');
var PORT = config.PORT;
var URL = config.URL;
var rootAddress = URL + PORT + "/";
var access_token = JSON.parse(localStorage.getItem("access_token")).access_token;

module.exports = {

  //Input: an albumID, a photo object, a userId and a callback
  //Output: New user object with photo being added to a correct album
  savePhotoToAlbum: function(albumID, photo, userID, callback){
    $.ajax({
        type: "POST",
        data : {albumID: albumID,
                photo: photo,
                userID: userID},
        url: rootAddress + "api/users/savephototoalbum",
        success: function(data){
          callback(data);
        },
        error: function(){
          console.log("ajax error");
        }
    });
  },

  //Input: an userId and a callback
  //Output: New user object with new album being created inside a user object
  createNewAlbum: function(userID, callback){
    console.log('USERID', userID)
    $.ajax({
        type: "POST",
        data : {userID: userID},
        url: rootAddress + "api/users/createnewalbum",
        success: function(data){
          callback(data);
        },
        error: function(){
          console.log("ajax error");
        }
    });
  },

  //Input: a tag
  //Output: an object containing the most recent photos being attached to that tag from Instagram API
  searchPicByTag: function(userTag, callback){
    $.ajax({
        type: "POST",
        data : {token: access_token,
                tag : userTag},
        url: rootAddress + "api/albums/searchpicbytag",
        success: function(data){
          callback(data);
        },
        error: function(){
          console.log("ajax error");
        }
    });
  },

  //Input: a location
  //Output: an object containing the most recent photos at that location from Instagram API
  searchPicByLocation: function(userLocation, callback){
    $.ajax({
        type: "POST",
        data : {token: access_token,
                location : userLocation},
        url: rootAddress + "api/albums/searchpicbylocation",
        success: function(data){
          callback(data);
        },
        error: function(){
          console.log("ajax error");
        }
    });
  },

  //Input: a name of a user
  //Output: an object containing the most recent photos of that user from Instagram API
  searchUser: function(username, callback){
    var access_token = JSON.parse(localStorage.getItem("access_token")).access_token;
    $.ajax({
        type: "POST",
        data : {token: access_token,
                name : username},
        url: rootAddress + "api/albums/searchuser",
        success: function(data){
          callback(data);
        },
        error: function(){
          console.log("ajax error");
        }
    });
  },

  //Input: an ID of an user
  //Output: a processed object from Instagram API that contain the photos from that user ID
  searchMediaByUserId: function(userID, callback){
    var access_token = JSON.parse(localStorage.getItem("access_token")).access_token;
    $.ajax({
        type: "POST",
        data : {token: access_token,
                userID : userID},
        url: rootAddress + "api/albums/searchmediabyuserid",
        success: function(data){
          callback(data);
        },
        error: function(){
          console.log("ajax error");
        }
    });
  },

  //Input: a callback
  //Output: either a success or failure from OAuth being invoked by the callback input
  authenticate: function(callback){
    OAuth.initialize(config.OAuthPublicKey);
    OAuth.popup('instagram', {cache: true}).done(function(success, error){
      callback(success)
    }).fail(function(error){
      callback(error)
    });
  },

  //Input: a user data
  //Output: the same data from  DB after saving the user
  saveUser: function(data, callback){
    $.ajax({
        type: "POST",
        data : {user: data},
        url: rootAddress + 'api/users/saveUser',
        success: function(data){
          callback(data);
        },
        error: function(){
          console.log("ajax error");
        }
    });
  }
}
