import React from 'react';
import { Button, Alert, DropdownButton, MenuItem } from 'react-bootstrap';

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
            <DropdownButton title="ADD TO MY ALBUM" id="bg-nested-dropdown" className="button add-to-album-button">
              <MenuItem eventKey="1">Create New Album</MenuItem>
              <MenuItem eventKey="1">Album 1</MenuItem>
              <MenuItem eventKey="2">Album 2</MenuItem>
            </DropdownButton>
          </div>
    </div>
    );
  },

});

export default PhotoViewItem;
