'use strict';
import * as Redux from 'redux';
import * as greeting from './greeting';
import * as tags from './tags';
import {tagKeys} from '../keys';
import {Requestable, createRequestableReducers} from '../requestable';

export default Redux.combineReducers({
  greeting: greeting.reducers,
  tags: createRequestableReducers(tagKeys),
});

export interface RootState {
  greeting: greeting.Greeting;
  tags: Requestable<tags.Tag[]>;
}

export const initialState: RootState = {
  greeting: greeting.initialState,
  tags: { state: undefined, payload: tags.initialState },
};

export { tags, greeting };
