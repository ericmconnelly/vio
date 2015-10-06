import React from 'react';
import { Navigation } from 'react-router';
import SortButton from './sortButton.jsx';
import CreateAlbumButton from './createAlbumButton.jsx';
import Header from './header.jsx';
import util from './../../util/util.js';

var PhotoAlbum = React.createClass({
  mixins: [ Navigation ],

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
        <Header />
        <div id="container">
          <CreateAlbumButton navToCreateAlbum = {this.navToCreateAlbum} />
        </div>
      </div>
    );
  }
});

export default PhotoAlbum;
