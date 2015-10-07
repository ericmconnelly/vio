import React from 'react';
import { Navigation } from 'react-router';
import { connect } from 'react-redux';
import { savePhoto, initPhoto } from '../../actions/photo';
import util from './../../util/util.js';
import { Button} from 'react-bootstrap';

//Render input form to allow searching for recent photo with a tag
//Author: Eric Le

var TagSearch = React.createClass({
  getInitialState: function() {
    return {value: 'Please enter tag'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {
    var value = this.state.value;
    return (
      <div id = 'tagsearch'>
        <div className= 'search'>Search tag</div>
        <input className='inputform' type="text"  placeholder={value} onChange={this.handleChange} />
        <Button onClick={this.props.searchTag.bind(this, value)}>
          Search
        </Button>
      </div>
    )
  }
});
var mapStateToProps = function(state) {
  return {
    photo : state.photo,
    user: state.user
  }
};
export default connect(mapStateToProps)(TagSearch);
