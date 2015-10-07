import React from 'react';
import DropDownButton from './dropDownButton.jsx';
import { Button, Alert, DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';


var PhotoViewItem = React.createClass({

  // enables the fading alert upon pinning item to wishlist
  getInitialState: function() {
    return {
      alertVisible: false
    };
  },

  handleAlertShow: function() {
    this.setState({alertVisible: true});
  },

  handleAlertDismiss: function() {
    this.setState({alertVisible: false});
  },

  render: function(){

    let tags = this.props.photo.tags;
    let myTags = [];
    let element;
    if(tags){
      tags.forEach(function(tag){
        var newtag = '#' + tag + ' ';
        myTags.push(newtag);
      });
    }else{
      myTags = 'Not specified'
    }

    let username = this.props.photo.user.full_name || 'Not specified';
    let user_in_photo = this.props.photo.user_in_photo || 'Not specified';
    let location = 'Not specified';
    if(this.props.photo.location){
      location = this.props.photo.location.name || ''
    }

    if (this.state.alertVisible) {
      console.log()
      element =

      <Alert className="saved opacity" closeLabel="" onDismiss={this.handleAlertDismiss} dismissAfter={1000}>
        <div> Photo added to album! </div>
      </Alert>
    }

    return (
     <div className="col-lg-3 col-md-4 col-xs-5 thumb">
          {element}
          <a className="thumbnail" href={this.props.photo.link}>
            <img className="img-responsive" src={this.props.photo.images} />
          </a>
          <div>
            <DropDownButton handleAlertShow={this.handleAlertShow} album={this.props.album} photo={this.props.photo}/>
          </div>
    </div>
    );
  },

});

var mapStateToProps = function(state) {
  return {
    user: state.user
  }
};
export default connect(mapStateToProps)(PhotoViewItem);
