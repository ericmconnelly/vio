import React from 'react';
import { MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import util from './../../util/util.js';
import {saveUser} from '../../actions/user';


var CreateNewAlbumButton = React.createClass({

  createNewAlbum: function(){
    util.createNewAlbum(this.props.user.info.id, function(data){
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
