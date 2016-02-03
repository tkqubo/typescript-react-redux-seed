'use strict';
const assert = require('power-assert');
import {index} from '../src/index';

describe('index', () => {
  it('index()', () => {
    assert(index() == 'Hello world');
  });
});
