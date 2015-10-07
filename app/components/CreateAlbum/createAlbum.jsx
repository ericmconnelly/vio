import React from 'react';
import { Navigation } from 'react-router';
import util from './../../util/util.js';
import TagSearch from './tagSearch.jsx';
import LocationSearch from './locationSearch.jsx';
import UserSearch from './userSearch.jsx';
import Header from './Header.jsx';
import PhotoList from './photoList.jsx';
import { savePhoto, initPhoto } from '../../actions/photo';
import { connect } from 'react-redux';

var CreateAlbum = React.createClass({
  mixins: [ Navigation ],

  getInitialState: function() {
    return {
      photos: [],
      photoId: null,
      access_token: null
    };
  },

  componentWillMount: function() {

  },
  addPhoto: function(photo) {
    this.setState({
      photos: this.state.photos.concat([photo]),
      photoId: this.state.photos.length + 1
    });
  },

  searchUser: function(value){
    util.searchUser(value, function(data){
      util.searchMediaByUserId(data.id, function(data){
        this.props.dispatch(savePhoto(data));
      }.bind(this));
    }.bind(this));
  },

  searchTag: function(value){
    util.searchPicByTag(value, function(data){
      this.props.dispatch(savePhoto(data));
    }.bind(this));
  },

  searchLocation: function(location){
    util.searchPicByLocation(location, function(data){
      this.props.dispatch(savePhoto(data));
    }.bind(this));
  },

  render: function() {
    var photos = this.state.photos
    return (
      <div id = 'createalbum'>
        <Header />
        <TagSearch searchTag={this.searchTag} />
        <LocationSearch searchLocation={this.searchLocation}  />
        <UserSearch searchUser={this.searchUser} />
        <PhotoList photo = {this.props.photo}/>
      </div>
    );
  }
});

var mapStateToProps = function(state) {
  return {
    photo : state.photo,
    user: state.user
  }
};
export default connect(mapStateToProps)(CreateAlbum);

