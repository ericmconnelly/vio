import React from 'react';
import { Button} from 'react-bootstrap';

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
