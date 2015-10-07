import React from 'react';
import { Button, Alert, DropdownButton, MenuItem } from 'react-bootstrap';

//Render each photo component from the photoList component
//Along with the dropdown selection include Create new album or save to exisiting album
//Author: Eric Le

var PhotoViewItem = React.createClass({

  render: function(){

    return (
     <div className="col-lg-3 col-md-4 col-xs-5 thumb">
          <a className="thumbnail" href={this.props.photo.link}>
            <img className="img-responsive" src={this.props.photo.images} />
          </a>
    </div>
    );
  },

});

export default PhotoViewItem

