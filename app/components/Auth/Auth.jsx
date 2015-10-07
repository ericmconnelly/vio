import { Navigation } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';
import util from './../../util/util.js';
import { saveUser } from '../../actions/user';


//Handle Authentication Popup when the user go to the root address
//will cache the user data to local storage to prevent future popup
//Author: Eric Le

var Auth = React.createClass({

  mixins: [ Navigation ],

  getInitialState: function() {
    return {};
  },

  componentWillMount: function() {
    util.authenticate(function(user){
      if(user && user.access_token){
        util.saveUser(user, function(data){
          localStorage.setItem('access_token', JSON.stringify({'access_token' : user.access_token}));
          this.props.dispatch(saveUser(data));
          this.transitionTo(`/photoalbum`);
        }.bind(this));
      }else{
        alert('Unsuccessfully Authenticate. Please try again');
        this.goBack();
      }
    }.bind(this));
  },

  render: function() {
    var photos = this.state.photos
    return (
      <div>Authenticating...</div>
    );
  }
});


//connect the component state to the app state, giving it access to
//user information
//Author: Eric Le
var mapStateToProps = function(state) {
  return {
    user : state.user
  }
};
export default connect(mapStateToProps)(Auth);
