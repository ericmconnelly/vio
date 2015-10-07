import React from 'react';
import { Navigation } from 'react-router';
import util from './../../util/util.js';
import PhotoViewItem from './photoViewItem.jsx'


//Render the list of photos from the component's state
//These photos come from any of the queries that user use(tag, location, name)
//Author: Eric Le

var PhotoList = React.createClass({
  mixins: [ Navigation ],

  render: function() {
    var photoItems = [];
    if(this.props && this.props.photo && this.props.photo.photo){
      this.props.photo.photo.forEach(function(photo){
        photoItems.push(
            <PhotoViewItem photo={photo} key={photo.id} />
        );
      })
    }
    return (
      <div class="container">
        <div class="row">
          {photoItems}
        </div>
      </div>
    );
  }
});

export default PhotoList;
