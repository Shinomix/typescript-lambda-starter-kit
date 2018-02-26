declare const process: any;
declare const require: any;
declare var global: any;

process.env.NODE_ENV = 'test';

import * as mocha from 'mocha';
import * as assert from 'assert';
import * as sinon from 'sinon';

const lambda = require('../app/index');

describe('function handler(event, context, callback?): void', () => {
  it('should be defined', () => {
    assert.ok(lambda.handler);
  });
});
