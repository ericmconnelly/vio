var PORT = require('../config/config.js');

module.exports = {
  getPhotos: function(callback){
    $.ajax({
        type: "POST",
        data : {tag : 'music',
                location: 'San Francisco'},
        url: "http://localhost:" + PORT.PORT + "/api/pictures/getpicture",
        success: function(data){
          callback(data);
        },
        error: function(){
          console.log("ajax error");
        }
    });
  }
}
