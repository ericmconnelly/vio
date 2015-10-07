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
import {Button} from 'react-bootstrap';

//Render the Create an Album Page when the user choose they want to explore new photos and create their albums
//Have 6 component:
  //A Button that redirect the user to the Main Page
  //A header that inform user they are in create album page
  //An input field that allow user to search for photos using tags
  //An input field that allow user to search for photos using locations
  //An input field that allow user to search for photos using a person name
  //The list of photo that will be render as the result of user's query
//Author: Eric Le

var CreateAlbum = React.createClass({
  mixins: [ Navigation ],

  navToPhotoAlbum: function(){
      this.transitionTo(`/`);
  },


  //Input: A name (ie. Ben Biran)
  //Output: List of recent photo of that user
  //A function that takes in a username and perform an API query search
  //on Instagram, retrieve their instagramID and use that ID to search for
  //their most recent photos
  //Author: Eric Le

  searchUser: function(value){
    util.searchUser(value, function(data){
      util.searchMediaByUserId(data.id, function(data){
        this.props.dispatch(savePhoto(data));
      }.bind(this));
    }.bind(this));
  },

  //Input: A tag (without #, ie. icecream)
  //Output: List of recent photo from that tag
  //A function that takes in a tag and perform an API query search
  //on Instagram, retrieve the most recent photos of that tag
  //Author: Eric Le

  searchTag: function(value){
    util.searchPicByTag(value, function(data){
      this.props.dispatch(savePhoto(data));
    }.bind(this));
  },

  //Input: A location name (ie. San Francisco)
  //Output: List of recent photo of that user
  //A function that takes in a username and perform an API query search
  //on Instagram, retrieve their instagramID and use that ID to search for
  //their most recent photos

  //Author: Eric Le
  searchLocation: function(location){
    util.searchPicByLocation(location, function(data){
      this.props.dispatch(savePhoto(data));
    }.bind(this));
  },

  //Input: A render method that render the components mentioned above
  //Author: Eric Le

  render: function() {
    return (
      <div id = 'createalbum'>
        <Button onClick={this.navToPhotoAlbum.bind(this)}> Go back to view my album </Button>
        <Header />
        <TagSearch searchTag={this.searchTag} />
        <LocationSearch searchLocation={this.searchLocation}  />
        <UserSearch searchUser={this.searchUser} />
        <PhotoList photo = {this.props.photo}/>
      </div>
    );
  }
});

  //Connect the component state to the app state
  //allow the component to have access to photo and user information

  //Author: Eric Le

var mapStateToProps = function(state) {
  return {
    photo : state.photo,
    user: state.user
  }
};
export default connect(mapStateToProps)(CreateAlbum);

