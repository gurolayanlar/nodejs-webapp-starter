'use strict';

const moment = require('moment');

module.exports.upper = function (msg) {
    return msg.toUpperCase();
};

module.exports.formatDate = function(datetime, format) {
    return moment(datetime).format(format);
}

module.exports.equal = function(a, b) {
    return a===b;
}