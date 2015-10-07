var config = require('../config/config.js');
var PORT = config.PORT;
var URL = config.URL;
var rootAddress = URL + PORT + "/";
var access_token = JSON.parse(localStorage.getItem("access_token")).access_token;

module.exports = {
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
  createNewAlbum: function(userID, callback){
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

  authenticate: function(callback){
    OAuth.initialize('dUvu2ZW0v0xShE24daxUbB8L3TA');
    OAuth.popup('instagram', function(error, success){
      if(success){
        callback(success);
      }else if(error){
        callback(error);
      }
    });
  },

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
