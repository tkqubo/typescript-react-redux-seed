'use strict';
import * as Redux from 'redux';
/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* tslint:disable */
import thunk = require('redux-thunk');
/* tslint:enable */

import reducer from './redux/modules/index';
import { initialState } from './redux/modules/index';
import {App} from './containers/App';

const createStoreWithMiddleware: typeof Redux.createStore = Redux.applyMiddleware(thunk)(Redux.createStore);
let store: Redux.Store = createStoreWithMiddleware(reducer, initialState);

let appProp: {title: string} = {title: 'Hello React'};

ReactDOM.render(
  <Provider store={store}>
    <App {...appProp} />
  </Provider>,
  document.getElementById('content')
);

