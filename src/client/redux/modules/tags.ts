'use strict';
import {Action} from 'flux-standard-action';
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

export function reducers(state: Tag[] = [], action: Action<Tag[]>): Tag[] {
  'use strict';
  switch (action.type) {
    case REQUEST:
      return [];
    case SUCCESS:
      return action.payload;
    case FAILURE:
      return [];
    default:
      return state;
  }
};


// action creators

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

export function request(): Action<Tag[]> {
  'use strict';
  return { type: REQUEST };
}

export function success(tags: Tag[]): Action<Tag[]> {
  'use strict';
  return { type: SUCCESS, payload: tags };
}

export function failure(): Action<Tag[]> {
  'use strict';
  return { type: FAILURE };
}
