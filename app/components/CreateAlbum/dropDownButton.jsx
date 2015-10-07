import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import CreateNewAlbumButton from './createNewAlbumButton.jsx';
import AlbumSelectionButton from './albumSelectionButton.jsx';
import { connect } from 'react-redux';


//Render drop down menu that show option to create a new album
//or save the photo to already existing album
//Author: Eric Le

var DropDownButton = React.createClass({


  render: function() {
    var selectionButton = [];

    return (
      <DropdownButton title="ADD TO MY ALBUM" id="bg-nested-dropdown" className="button add-to-album-button">
          <CreateNewAlbumButton/>
          <AlbumSelectionButton photo = {this.props.photo}/>
      </DropdownButton>
    );
  }
});

var mapStateToProps = function(state) {
  return {
    user: state.user
  }
};
export default connect(mapStateToProps)(DropDownButton);
