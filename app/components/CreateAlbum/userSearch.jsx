import React from 'react';
import { Navigation } from 'react-router';
import { connect } from 'react-redux';
import { savePhoto, initPhoto } from '../../actions/photo';
import util from './../../util/util.js';
import PhotoList from './photoList.jsx';
import { Button} from 'react-bootstrap';

var UserSearch = React.createClass({
  getInitialState: function() {
    return {value: 'Please enter a user name'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  componentDidMount: function() {
  },

  render: function() {
    var value = this.state.value;
    return (
      <div id = 'tagsearch'>
        <div>Search user</div>
        <input type="text"  placeholder={value} onChange={this.handleChange} />
        <Button onClick={this.props.searchUser.bind(this, value)}>
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
export default connect(mapStateToProps)(UserSearch);
