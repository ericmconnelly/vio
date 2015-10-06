// var User = require('./userModel.js');
var http = require('http');
var request = require('request');
var Instagram = require('instagram-node-lib');
var Promise = require('bluebird');
var lodash = require('lodash')

module.exports = {
  getMostRecentPicByTag: function(req, res, next){
    var tag = req.body.tag;
    var location = req.body.location;
    var access_token = req.body.token;
    console.log(tag, location, access_token)
    var url = 'https://api.instagram.com/v1/tags/'
            + tag
            +'/media/recent?access_token='
            + access_token;

    var result = [];
    request(url, function(error, response, body) {
        result = processJSONBody(body)
        console.log(result);
    });
  },

  searchPicByTag: function(req, res, next){
    var tag = req.body.tag,
        access_token = req.body.token;

      var url = 'https://api.instagram.com/v1/tags/'
              + tag
              +'/media/recent?&access_token='
              + access_token;

    var result = [];
    request(url, function(error, response, body) {
      result = processJSONBody(body);
      res.send(result)
    });
  },

  searchPicByLocation: function(req, res, next){
    var location = req.body.location,
        access_token = req.body.token,
        latitude,
        longitude,
        url;

    request('https://maps.googleapis.com/maps/api/geocode/json?address='
              + location +
              '&key='
              + process.env.GOOGLE_MAP_API_KEY
              +'&sensor=true', function(error, response, body){
                console.log(JSON.parse(body))
                  latitude = JSON.parse(body).results[0].geometry.location.lat;
                  longitude = JSON.parse(body).results[0].geometry.location.lng;
                  getInstagramLocationID(latitude, longitude, access_token, function(data){
                    res.send(data);
                  });
    });
  },

  searchUser: function(req, res, next){
    var access_token = req.body.token;
    var url = 'https://api.instagram.com/v1/users/search?q='
              + req.body.name
              + '&access_token='
              + access_token;
    request(url, function(error, response, body) {
        res.send(JSON.parse(body).data[0]);
    });
  },

  searchMediaByUserID: function(req, res, next){
    var access_token = req.body.token;
    var userID = req.body.userID;
    var url = 'https://api.instagram.com/v1/users/'
              + userID
              + '/media/recent/?access_token='
              + access_token;
    var result;
    request(url, function(error, response, body) {
      result = processJSONBody(body);
      res.send(result);
    });
  }
};

var getInstagramLocationID = function(latitude, longitude, access_token, callback){
   var url = 'https://api.instagram.com/v1/locations/search?lat='
        + latitude
        + '&lng='
        + longitude
        +'&access_token='
        + access_token;

    request(url, function(error, response, body){
      var locationArray = JSON.parse(body).data;
      var locationIDArray = [];
      locationArray.forEach(function(location){
        locationIDArray.push(location.id);
      })
      getInstagramPhotoWithLocationID(locationIDArray, access_token, function(data){
        callback(data);
      });

    });
};

var getInstagramPhotoWithLocationID = function(locationIDArray, access_token, callback){
    console.log(locationIDArray);
    var promises = [];

    var getPhotoASync = function(locationID) {
      return new Promise(function(resolve, reject) {
        var url = 'https://api.instagram.com/v1/locations/'
                  + locationID
                  + '/media/recent'
                  + '?access_token='
                  + access_token;
        request(url, function(error, response, body){
          if(error){
            return reject(error);
          }
          resolve(body);
        });

      })
    };

    locationIDArray.forEach(function(locationID){
      promises.push(getPhotoASync(locationID));
    });
    Promise.all(promises).then(function(data) {
      var result = [];
      data =
      data
            .map(function(item){
              var data = JSON.parse(item).data;
              if(data){
                return data;
              }
            })
            .filter(function(item){
              return item.length > 0;
            })

      var merged = [].concat.apply([], data);

      merged.forEach(function(photo){
        result.push({
          tags : photo.tags,
          location : photo.location,
          link: photo.link,
          images: photo.images.standard_resolution.url,
          users_in_photo: photo.users_in_photo,
          caption: photo.caption,
          user: photo.user
        })
      })

      callback(result);
    });
};

var processJSONBody = function(body){
  var data = JSON.parse(body).data;
  var result=[];
  console.log(data)
  data.forEach(function(photo){
    result.push({
      id: photo.id,
      tags : photo.tags,
      location : photo.location,
      link: photo.link,
      images: photo.images.standard_resolution.url,
      users_in_photo: photo.users_in_photo,
      caption: photo.caption,
      user: photo.user
    })
  });
  return result;
}


