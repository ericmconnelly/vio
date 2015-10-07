import React from 'react';
import { MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import util from './../../util/util.js';
import {saveUser} from '../../actions/user';

//Create A New Album by making a call to API in backend
//and add an empty album to the user of the app
//Author: Eric Le

var CreateNewAlbumButton = React.createClass({


  //Input: none
  //Output: the new user data after saving the album to the database
  //A function that take in a user instagram ID, lookup in the database
  //find that user and add an empty album to the database schema
  //After successfully saved, return that new data
  //Author: Eric Le

  createNewAlbum: function(){
    util.createNewAlbum(this.props.user.info.instagramId, function(data){
      this.props.dispatch(saveUser(data))
    }.bind(this));
  },


  render: function() {
    return (
      <MenuItem onSelect={this.createNewAlbum}>Create New Album</MenuItem>
    );
  }
});

var mapStateToProps = function(state) {
  return {
    user: state.user
  }
};
export default connect(mapStateToProps)(CreateNewAlbumButton);
