'use strict';
import {createAction, handleActions} from 'redux-actions';
import {} from 'redux';
import {Action} from 'flux-standard-action';
/* tslint:disable */
const assign = require('object-assign');
/* tslint:enable */

// ducks type definitions

const NULL = 'greeting/null';
const MORNING = 'greeting/morning';
const AFTERNOON = 'greeting/afternoon';
const EVENING = 'greeting/evening';

export interface GreetingAction {
  name: string;
}

export interface Greeting {
  name: string;
  message: string;
}


// initial state

export const initialState: Greeting = {
  name: 'guest',
  message: 'hi',
};


// reducer

export const reducers = handleActions<GreetingAction>(
  {
    [NULL]: (state, action) => assign({}, state, { message: undefined }),
    [MORNING]: (state, action) => assign({}, state, { message: `Good morning, ${action.payload.name}` }),
    [AFTERNOON]: (state, action) => assign({}, state, { message: `Good morning, ${action.payload.name}` }),
    [EVENING]: (state, action) => assign({}, state, { message: `Good morning, ${action.payload.name}` }),
  },
  initialState
);

// action creators

export interface GreetingActionCreator {
  greetInTheMorningAsync?: (name: string) => (dispatch: Redux.Dispatch) => any;
  notGreet?: () => Action<GreetingAction>;
  greetInTheMorning?: (name: string) => Action<GreetingAction>;
  greetInTheAfternoon?: (name: string) => Action<GreetingAction>;
  greetInTheEvening?: (name: string) => Action<GreetingAction>;
}

export const greetingActionCreator: GreetingActionCreator = {
  greetInTheMorningAsync(name: string): (dispatch: Redux.Dispatch) => any {
    return (dispatch: Redux.Dispatch) => {
      dispatch(greetingActionCreator.notGreet());
      setTimeout(dispatch.bind(undefined, greetingActionCreator.greetInTheMorning(name)), 500);
    };
  },

  notGreet: createAction(NULL),
  greetInTheMorning: createAction(MORNING, name => ({name})),
  greetInTheAfternoon: createAction(AFTERNOON, name => ({name})),
  greetInTheEvening: createAction(EVENING, name => ({name})),
};


