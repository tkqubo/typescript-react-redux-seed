'use strict';
import * as Redux from 'redux';
import * as greeting from './greeting';
import * as tags from './tags';

export default Redux.combineReducers({
  greeting: greeting.reducers,
  tags: tags.reducers,
});

export interface RootState {
  greeting: greeting.Greeting;
  tags: tags.Tag[];
}

export const initialState: RootState = {
  greeting: greeting.initialState,
  tags: tags.initialState,
};


