import React from 'react';
import { MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import util from './../../util/util.js';

var AlbumSelectionButton = React.createClass({

  savePhotoToAlbum: function(albumID, photo, userID){
    util.savePhotoToAlbum(albumID, photo, userID, function(data){
      console.log(data);
    })
  },

  render: function() {
    var menuItems = [];
    var albums = this.props.user.info.albums.forEach(function(album){
      menuItems.push(<MenuItem onSelect={this.savePhotoToAlbum.bind(this,album.albumID, this.props.photo, this.props.user.info.instagramId )} >Album {album.albumID}</MenuItem>)
    }.bind(this));
    return (
      <div>{menuItems}</div>
    );
  }
});

var mapStateToProps = function(state) {
  return {
    user: state.user
  }
};
export default connect(mapStateToProps)(AlbumSelectionButton);

