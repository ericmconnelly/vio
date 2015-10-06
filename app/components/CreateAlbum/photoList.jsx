import React from 'react';
import { Navigation } from 'react-router';
import util from './../../util/util.js';
import PhotoViewItem from './photoViewItem.jsx'

var PhotoList = React.createClass({
  mixins: [ Navigation ],


  componentWillMount: function() {
  },

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
