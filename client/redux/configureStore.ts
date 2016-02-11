'use strict';
import * as Redux from 'redux';
import * as ReactRouterRedux from 'react-router-redux';
/* tslint:disable */
//noinspection ES6UnusedImports
import * as history from 'history';
import thunk = require('redux-thunk');
/* tslint:enable */
declare var __DEVELOPMENT__: boolean;

import reducer, {initialState} from './modules/index';
import {DevTools} from '../containers/index';

export function configureStore(browserHistory: HistoryModule.History): Redux.Store {
  'use strict';
  let appliedMiddleware = Redux.applyMiddleware(
    ReactRouterRedux.syncHistory(browserHistory),
    thunk
  );
  let enhancer = __DEVELOPMENT__ ? Redux.compose(appliedMiddleware, DevTools.instrument()) : appliedMiddleware;
  let createStore: any = Redux.createStore;
  return createStore(reducer, initialState, enhancer);
};

export default configureStore;
