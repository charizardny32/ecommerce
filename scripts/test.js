#!/usr/bin/env node
const request = require('supertest');

const URI = 'localhost:4000';

describe('GET on root', () => {
  it('responds with an HTML webpage', () => {
    request(URI)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end((err, res) => {
        if (err) throw err;
      });
  })
});