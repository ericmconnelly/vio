
// var React = require('react'),
//     App = require('./App.js'),
//     Provider = require('react-redux').Provider,
//     RouterModule = require('./Router'),
//     Router =  RouterModule.Router,
//     Route = RouterModule.Route,
//     Auth = require('./components/Auth/Auth.jsx'),
//     PhotoAlbum = require('./components/PhotoAlbum/photoAlbum.jsx'),
//     BrowserHistory = require('react-router/lib/BrowserHistory').default,
//     Redirect = RouterModule.Redirect,
//     configStore = require('./store/configStore');

import React from 'react';
import App from './App.js';
import { Router, Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import Auth from './components/Auth/Auth.jsx';
import PhotoAlbum from './components/PhotoAlbum/photoAlbum.jsx';
import CreateAlbum from './components/CreateAlbum/createAlbum.jsx';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import configStore from './store/configStore';

const routes = (
    <Route path="/" component={App}>
        <Route name="auth" path="auth" component={Auth} />
        <Route name="photoalbum" path="photoalbum" component={PhotoAlbum} />
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



