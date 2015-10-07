import React from 'react';
import { Button, Alert, DropdownButton, MenuItem } from 'react-bootstrap';
import { Navigation } from 'react-router';

//Render the thumbnail of the first photo inside each albumn.
//Author: Eric Le

var AlbumPreviewItem = React.createClass({

  mixins: [ Navigation ],

  navToAlbumDetailView: function(albumID){
    this.transitionTo(`/albums/${albumID}`);
  },

  render: function(){

    return (
     <div className="col-lg-3 col-md-4 col-xs-5 albumthumb">
          <a className="thumbnail" onClick={this.navToAlbumDetailView.bind(this, this.props.albumID)}>
            <img className="img-responsive" src={this.props.photo.images} />
          </a>
          <div className='albumID'> Album {this.props.albumID}</div>
    </div>
    );
  },

});

export default AlbumPreviewItem
