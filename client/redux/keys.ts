'use strict';
import deepKeyMirror from 'deep-key-mirror';
import {RequestActionKeys} from './requestable';

/**
 * Application specific keys
 */
const keys = deepKeyMirror({
  greetings: ['null', 'morning', 'afternoon', 'evening'],
  tags: ['request', 'success', 'failure'],
});

export default keys;
export const tagKeys: RequestActionKeys = keys.tags;
export const greetingKeys = keys.greetings;

