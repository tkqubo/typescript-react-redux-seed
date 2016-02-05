'use strict';
import {createAction, handleActions} from 'redux-actions';
import * as $ from 'jquery';
/* tslint:disable */
const assign = require('object-assign');
/* tslint:enable */

// ducks type definitions

const REQUEST = 'tags/list#request';
const SUCCESS = 'tags/list#success';
const FAILURE = 'tags/list#failure';

export interface Tag {
  name: string;
  description: string;
}

// initial state

export const initialState: Tag[] = [];

// reducer

export const reducers = handleActions<Tag[]>(
  {
    [REQUEST]: () => [],
    [SUCCESS]: (state, action) => action.payload,
    [FAILURE]: () => [],
  },
  []
);

// action creators

export const request = createAction(REQUEST);
export const success = createAction(SUCCESS);
export const failure = createAction(FAILURE);

export interface TagActionCreator {
  getTags?: () => (dispatch: Redux.Dispatch) => any;
}

export const tagActionCreator: TagActionCreator = {
  getTags() {
    return (dispatch: Redux.Dispatch) => {
      dispatch(request());
      $.get('http://petstore.swagger.io/v2/swagger.json')
        .then((json: any) => dispatch(success(json.tags)))
        .fail(() => dispatch(failure()))
      ;
    };
  },
};

