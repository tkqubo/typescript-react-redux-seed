'use strict';
import {} from 'redux';
import {Action} from 'flux-standard-action';
const assign = require('object-assign');

// ducks type definitions

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

export const initialState: Greeting = {
  name: 'guest',
  message: 'hi'
};


// reducer

export default function reducers(state: Greeting = initialState, action: Action<GreetingAction>): Greeting {
  switch (action.type) {
    case MORNING:
      return assign({}, state, { message: `Good morning, ${action.payload.name}` });
    case AFTERNOON:
      return assign({}, state, { message: `Hello, ${action.payload.name}` });
    case EVENING:
      return assign({}, state, { message: `Good evening, ${action.payload.name}` });
    default:
      return state;
  }
};


// action creators

export function greetInTheMorning(name: string): Action<GreetingAction> {
  return {
    type: MORNING,
    payload: { name }
  }
}

export function greetInTheAfternoon(name: string): Action<GreetingAction> {
  return {
    type: AFTERNOON,
    payload: { name }
  }
}

export function greetInTheEvening(name: string): Action<GreetingAction> {
  return {
    type: EVENING,
    payload: { name }
  }
}
