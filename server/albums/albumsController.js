var http = require('http');
var request = require('request');
var Promise = require('bluebird');
var lodash = require('lodash')

module.exports = {

  //A function that search for most recent photos
  //of a particular tag
  //Author: Eric Le
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

  //A function that search for most recent photos
  //of a particular location
  //Author: Eric Le
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
                  latitude = JSON.parse(body).results[0].geometry.location.lat;
                  longitude = JSON.parse(body).results[0].geometry.location.lng;
                  getInstagramLocationID(latitude, longitude, access_token, function(data){
                    res.send(data);
                  });
    });
  },

  //A function that search for an instagram user information
  //using their names
  //Author: Eric Le
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

  //A function that search for most recent photo of an instagram user using their ids
  //Author: Eric Le
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

//A function that take in a latitude, a longitude, and an access token
//and make a call to instagram API to get back the location ID array
//Author: Eric Le
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

//A function that take in a an array of location ID
//using Promise library to make a call to instagram API at once
//wait for it to finish and return an array of result
//Author: Eric Le
var getInstagramPhotoWithLocationID = function(locationIDArray, access_token, callback){
    var promises = [];

    //define the promise function
    //Author: Eric Le
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

    //loop through the location ID array and put the location
    //id one by one to the promises array
    //Author: Eric Le
    locationIDArray.forEach(function(locationID){
      promises.push(getPhotoASync(locationID));
    });

    //promisify to get all the result and perform some
    //data processing to filter out undesirable/empty data
    //Author: Eric Le
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

      //flattern out the array since it is array nested inside array
      //Author: Eric Le
      var merged = [].concat.apply([], data);

      merged.forEach(function(photo){
        result.push({
          tags : photo.id,
          link: photo.link,
          images: photo.images.standard_resolution.url
        })
      })

      callback(result);
    });
};

//A function that take in a body object
//filter for specific and necessary data
//and return an array of each object that represent the desired data
//Author: Eric Le
var processJSONBody = function(body){
  var data = JSON.parse(body).data;
  var result=[];
  data.forEach(function(photo){
    result.push({
      id: photo.id,
      link: photo.link,
      images: photo.images.standard_resolution.url,
    })
  });
  return result;
}


