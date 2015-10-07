var React = require('react');

//Render the header component of Photo Album View
//Author: Eric Le

var Header = React.createClass({

  render: function() {
    return (
      <header>
        <h1>Welcome to {this.props.user} Photo Album</h1>
      </header>
    );
  }
});

export default Header;
