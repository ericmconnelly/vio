import React from 'react';
import { Navigation } from 'react-router';
import util from './../../util/util.js';
import PhotoViewItem from './photoViewItem.jsx';
import AlbumId from './AlbumId.jsx'
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';

//Render each photo component from the selected album
//Author: Eric Le

var AlbumDetailView = React.createClass({

  mixins: [ Navigation ],

  navToPhotoAlbum: function(){
      this.transitionTo(`/`);
  },

  render: function() {
    var photoItems = [];
    var theAlbum;
    var targetAlbumID = this.props.params.albumID;
    var albums = this.props.user.info.albums;
    albums.forEach(function(album){
      if(album.albumID === targetAlbumID){
        theAlbum = album;
      }
    });

    if(theAlbum){
      theAlbum.pictures.forEach(function(photo){
        photoItems.push(
            <PhotoViewItem photo={photo} key={photo.id} />
        );
      });
    }

    return (

      <div className="container">
      <Button onClick={this.navToPhotoAlbum.bind(this)}> Go back to view my album </Button>
        <div className="row">
          <AlbumId albumId = {this.props.params.albumID}/>
          {photoItems}
        </div>
      </div>
    );
  }
});

var mapStateToProps = function(state) {
  return {
    user: state.user
  }
};
export default connect(mapStateToProps)(AlbumDetailView);
