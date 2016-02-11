'use strict';
/* tslint:disable */
declare const $: JQueryStatic;
const assign = require('object-assign');
/* tslint:enable */
import {createRequestableActions, RequestActions} from '../requestable';
import {tagKeys} from '../keys';

// entity type

export interface Tag {
  name: string;
  description: string;
}

// initial state

export const initialState: Tag[] = [];

// action creators

let actions: RequestActions<Tag[]> = createRequestableActions<Tag[]>(tagKeys);

export interface TagActionCreator {
  getTags?: () => (dispatch: Redux.Dispatch) => any;
}

export const tagActionCreator: TagActionCreator = {
  getTags() {
    return (dispatch: Redux.Dispatch) => {
      dispatch(actions.request());
      $.get('http://petstore.swagger.io/v2/swagger.json')
        .then((json: any) => dispatch(actions.success(json.tags)))
        .fail(() => dispatch(actions.failure()))
      ;
    };
  },
};

