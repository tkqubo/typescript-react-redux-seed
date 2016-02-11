'use strict';
import * as Redux from 'redux';
/* tslint:disable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
/* tslint:enable */
let history = hashHistory;

import {configureStore} from './redux/index';
import {App, DevTools} from './containers/index';
import {Index, AsyncExample, HttpRequestExample} from './components/index';

let store: Redux.Store = configureStore(history);
let router = (
  <Router history = {history} >
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
