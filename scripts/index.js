'use strict';

const argvParser = require('minimist');
const fs = require('fs');

const args = argvParser(process.argv.slice(2));
if (!args.f)
    return Promise.reject(new Error('Please provide a valid node file name'));
if (!args.d)
    return Promise.reject(new Error('Please provide a valid event json file'));


const event = JSON.parse(fs.readFileSync(args.d, 'utf8'));
const context = {};

const callback = function (error, data) {
    if (error)
        console.error(error);
    else
        console.log(data);
}

const baseDir = process.cwd();
const lambda = require(baseDir + '/' + args.f);
if (!args.h)
    args.h = getHandlerName(lambda);

if (!args.h) {
    return Promise.reject(new Error("Couln't found valid handler function."));
}

if (lambda.hasOwnProperty(args.h)) {
    var response;
    if ((lambda[args.h]).constructor.name == 'AsyncFunction') {
        (async function () {
            const response = await lambda[args.h](event, context);
            if (response)
                console.log(response);
        })();

    } else if (typeof lambda[args.h] === 'function') {
        const response = lambda[args.h](event, context, callback);
        if (response)
            console.log(response);
    } else {
        return Promise.reject(new Error(`${args.h} i not a valid function. expected function`));
    }
} else {
    return Promise.reject(new Error(`${args.h} i not a valid function. expected function`));
}

function getHandlerName(lambda) {
    for (var m in lambda) {
        if (typeof lambda[m] == "function" && lambda.hasOwnProperty(m) && lambda[m].length >= 2) {
            return m;
        }
    }
}