'use strict';
import * as Redux from 'redux';
import {default as greeting, initialGreeting } from './greeting';

export default Redux.combineReducers({ greeting });

export const initialState: any = {
  greeting: initialGreeting
};


