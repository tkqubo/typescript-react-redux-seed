'use strict';
import * as Redux from 'redux';
/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as history from 'history';
import {Router, Route, IndexRoute} from 'react-router';
import * as ReactRouterRedux from 'react-router-redux';
/* tslint:disable */
import thunk = require('redux-thunk');
/* tslint:enable */

import reducer, {initialState} from './redux/modules/index';
import {App} from './containers/App';
import {Details} from './components/Details';
import {Index} from './components/Index';

let browserHistory = history.createHashHistory();
let createStoreWithMiddleware = Redux.applyMiddleware(ReactRouterRedux.syncHistory(browserHistory), thunk)(Redux.createStore);
let store: Redux.Store = createStoreWithMiddleware(reducer, initialState);
let router = (
  <Router history = {browserHistory} >
    <Route path='/' component={App}>
      <IndexRoute component={Index} />
      <Route path='/details' component={Details} />
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('content')
);
