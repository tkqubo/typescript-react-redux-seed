'use strict';
import {} from 'redux';
import {Action} from 'flux-standard-action';
/* tslint:disable */
const assign = require('object-assign');
/* tslint:enable */


// ducks type definitions

const MORNING: string = 'greeting/morning';
const AFTERNOON: string = 'greeting/afternoon';
const EVENING: string = 'greeting/evening';

export interface GreetingAction {
  name: string;
}

export interface Greeting {
  name: string;
  message: string;
}


// initial value

export const initialGreeting: Greeting = {
  name: 'guest',
  message: 'hi',
};


// reducer

export default function reducers(state: Greeting = initialGreeting, action: Action<GreetingAction>): Greeting {
  'use strict';
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

export interface GreetingActionCreator {
  greetInTheMorningAsync?: (name: string) => (dispatch: Redux.Dispatch) => any;
  greetInTheMorning?: (name: string) => Action<GreetingAction>;
  greetInTheAfternoon?: (name: string) => Action<GreetingAction>;
  greetInTheEvening?: (name: string) => Action<GreetingAction>;
}

export const greetingActionCreator: GreetingActionCreator = {
  greetInTheMorningAsync(name: string): (dispatch: Redux.Dispatch) => any {
    return (dispatch: Redux.Dispatch) => {
      setTimeout(dispatch.bind(undefined, greetingActionCreator.greetInTheMorning(name)), 500);
    };
  },

  greetInTheMorning(name: string): Action<GreetingAction> {
    'use strict';
    return {
      type: MORNING,
      payload: { name },
    };
  },

  greetInTheAfternoon(name: string): Action<GreetingAction> {
    'use strict';
    return {
      type: AFTERNOON,
      payload: { name },
    };
  },

  greetInTheEvening(name: string): Action<GreetingAction> {
    'use strict';
    return {
      type: EVENING,
      payload: { name },
    };
  },
};


