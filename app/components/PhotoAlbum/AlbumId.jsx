import React from 'react';

//Render the album id of the chosen album
//Author: Eric Le
var AlbumId = React.createClass({
  render: function() {

    return (
      <div className="albumId">
        Album {this.props.albumId}
      </div>
    );
  }
});

export default AlbumId;
