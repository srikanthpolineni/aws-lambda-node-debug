'use strict';

const rewire = require('rewire');
const app = rewire('../../lambdas/hello-world.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests index', function () {

    it('verifies successful response', async () => {

        var callback = function (error, result) {
            expect(result).to.be.an('object');
            expect(result.statusCode).to.equal(200);
            expect(result.body).to.be.an('string');
        }
        app.handler(event, context, callback)
    });
});