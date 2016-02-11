'use strict';
import {handleActions, createAction, Reducer} from 'redux-actions';
import {Action} from 'flux-standard-action';

/**
 * Action interface for each request types
 */
export interface RequestActions<T> {
  request(payload?: T): void;
  success(payload?: T): void;
  failure(payload?: T): void;
}

/**
 * Action types for request pattern
 */
export interface RequestActionKeys {
  request: string;
  success: string;
  failure: string;
}

/**
 * Model interface for remote resource, which can be fetched as request and result in success or failure state.
 */
export interface Requestable<T> {
  state: 'request'|'success'|'failure';
  payload?: T;
}

/**
 * Creates actions that implement <code>RequestActions</code> interface
 * @param keys
 * @returns {{request: (function(...[any]): Action), success: (function(...[any]): Action), failure: (function(...[any]): Action)}}
 */
export function createRequestableActions<T>(keys: RequestActionKeys): RequestActions<T> {
  'use strict';
  return {
    request: createAction(keys.request),
    success: createAction(keys.success),
    failure: createAction(keys.failure),
  };
}

/**
 * Creates reducers for request pattern
 * @param keys
 * @param initialPayload
 * @returns {Reducer<Requestable<{state: undefined, payload: any}>>}
 */
export function createRequestableReducers<T>(keys: RequestActionKeys, initialPayload: T = undefined): Reducer<Requestable<T>> {
  'use strict';
  return handleActions<Requestable<T>>(
    {
      [keys.request]: () => ({ state: 'request' }),
      [keys.success]: (state: Requestable<T>, action: Action<T>) => ({ state: 'success', payload: action.payload }),
      [keys.failure]: () => ({ state: 'failure' }),
    },
    { state: undefined, payload: initialPayload }
  );
}

