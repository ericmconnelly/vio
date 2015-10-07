import React from 'react';
import { Navigation } from 'react-router';
import CreateAlbumButton from './createAlbumButton.jsx';
import Header from './header.jsx';
import AlbumList from './albumList.jsx';
import util from './../../util/util.js';
import { connect } from 'react-redux';

//Render the Main Photo Album Page when the user successfully sign in
//Have 2 component: Create An Album Button and the list of album that user has created
//The list of album will not be rendered if the user does not have any album saved in DB
//Author: Eric Le

var PhotoAlbum = React.createClass({
  mixins: [ Navigation ],

  //redirect user to create an album page
  navToCreateAlbum: function() {
    this.transitionTo(`/createalbum`);
  },

  getInitialState: function() {
    return {
      photos: [],
      photoId: null,
      access_token: null
    };
  },

  componentWillMount: function() {
  },

  render: function() {
    var photos = this.state.photos
    return (
      <div>
        <Header user={this.props.user.info.name}/>
        <div id="container">
          <CreateAlbumButton navToCreateAlbum = {this.navToCreateAlbum} />
          <AlbumList albums = {this.props.user.info.albums}/>
        </div>
      </div>
    );
  }
});

//connect the component state to the app state, giving it access to
//user and photo information
//Author: Eric Le

var mapStateToProps = function(state) {
  return {
    photo : state.photo,
    user: state.user
  }
};
export default connect(mapStateToProps)(PhotoAlbum);
