import React from 'react';
import { Button} from 'react-bootstrap';

//Redirect the user to create album page
//Author: Eric Le

var CreateAlbumButton = React.createClass({
  render: function() {
    return (
      <div>
        <Button onClick={this.props.navToCreateAlbum}>
          Create an Album
        </Button>
      </div>
    );
  }
});

export default CreateAlbumButton;
