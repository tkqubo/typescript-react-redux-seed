'use strict';
import * as Redux from 'redux';
/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as history from 'history';
import {Router, Route, IndexRoute} from 'react-router';

import configureStore from './redux/configureStore';
import {App, DevTools} from './containers/index';
import {Index, AsyncExample, HttpRequestExample} from './components/index';

let browserHistory = history.createHashHistory();
let store: Redux.Store = configureStore(browserHistory);
let router = (
  <Router history = {browserHistory} >
    <Route path='/' component={App}>
      <IndexRoute component={Index} />
      <Route path='/async-example' component={AsyncExample} />
      <Route path='/http-request-example' component={HttpRequestExample} />
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      {router}
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('content')
);
