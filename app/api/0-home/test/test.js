'use strict';

const request = require('request');
const expect = require('chai').expect;

describe('Server response', () => {
  it('should return 200', done => {
    request.get('http://localhost:4000/', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});