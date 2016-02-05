'use strict';
import * as Redux from 'redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import greeting from './redux/modules/greeting';
import * as greetingActions from './redux/modules/greeting';
import {App} from './containers/App';

let reducers: Redux.Reducer = Redux.combineReducers({greeting});
let store = Redux.createStore(reducers, { greeting: greetingActions.initialState });

ReactDOM.render(
  <Provider store={store}>
    <App name="React" />
  </Provider>,
  document.getElementById('content')
);

