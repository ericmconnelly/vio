/** @jsx React.DOM */


var React = require('react');
var SortButton = require('./components/sortButton.jsx');
var Header = require('./components/header.jsx');
var util = require('./util/util.js')

var App = React.createClass({
  getInitialState: function() {
    return {
      photos: [],
      photoId: null
    };
  },

  componentWillMount: function() {
    util.getPhotos(function(data){
      console.log('>>>', data)
    });
  },
  addPhoto: function(photo) {
    this.setState({
      photos: this.state.photos.concat([photo]),
      photoId: this.state.photos.length + 1
    });
  },

  render: function() {
    var photos = this.state.photos
    return (
      <div>
        <Header />
        <div id="container">
          <SortButton />
        </div>
      </div>
    );
  }
});

module.exports = App;
