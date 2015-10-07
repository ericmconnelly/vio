import React from 'react';
import util from './../../util/util.js';
import AlbumPreviewItem from './albumPreviewItem.jsx';

//Render the list of albumns that are previously created by the user
//Each albumn will show the thumbnail of the first photo in that albumn
//Author: Eric Le

var AlbumList = React.createClass({
  render: function() {
    var albumItems = [];
    if(this.props && this.props.albums){
      this.props.albums.forEach(function(album){
        albumItems.push(
            <AlbumPreviewItem photo={album.pictures[0]} key={album.albumID} albumID={album.albumID} />
        );
      })
    }
    return (
      <div class="container">
        <div class="row">
          {albumItems}
        </div>
      </div>
    );
  }
});

export default AlbumList;
