var App = React.createClass({
  getInitialState: function() {
    return {
      photos: [],
      photoId: null
    };
  },

  render: function() {
    var photos = this.state.photos
    return (
      <div>
        <Header />
        <div id="container">
          <SortButtons />
        </div>
      </div>
    );
  }

});

React.render(<App />, document.getElementById('app'));
