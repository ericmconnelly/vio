var React = require('react');

//Render the header of the create photo album page
//Author: Eric Le
var Header = React.createClass({

  render: function() {
    return (
      <header>
        <h1 id = 'createAlbumHeader'>Customize your photo album:</h1>
      </header>
    );
  }
});

export default Header;
