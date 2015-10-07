//The main.js file to serve as entry point of gulp
//Include all the routes configuration
//Gulp will start here and seek out all the sub-component to feed
//them into babelify and reactify

import React from 'react';
import App from './App.js';
import { Router, Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import Auth from './components/Auth/Auth.jsx';
import PhotoAlbum from './components/PhotoAlbum/photoAlbum.jsx';
import CreateAlbum from './components/CreateAlbum/createAlbum.jsx';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import configStore from './store/configStore';
import AlbumDetailView from './components/PhotoAlbum/albumDetailView.jsx';

const routes = (
    <Route path="/" component={App}>
        <Route name="auth" path="auth" component={Auth} />
        <Route name="photoalbum" path="photoalbum" component={PhotoAlbum} />
        <Route name="albumdetail" path="albums/:albumID" component={AlbumDetailView} />
        <Route name="createalbum" path="createalbum" component={CreateAlbum} />
    </Route>
);

const redirect = (
    <Redirect from="/" to="/auth"/>
)

const store = configStore();
const history = new BrowserHistory();

React.render(
  <Provider store={store}>
  {() =>
    <Router history={history}>
    {redirect}
    {routes}
    </Router>
  }
  </Provider>,
  document.getElementById('app')
);



