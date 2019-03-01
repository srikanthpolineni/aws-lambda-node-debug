'use strict';

const rewire = require('rewire');
const app = rewire('../../lambdas/hello-world-async.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests index', function () {

    it('verifies successful response', async () => {

        var callback = function (error, data) {}
        const result = await app.handler(event, context, callback)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');
    });
});