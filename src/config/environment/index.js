'use strict';

const path = require('path');

// Set default application environment values
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;
process.env.IP = process.env.IP || '0.0.0.0';
process.env.SESSION_SECRET = process.env.SESSION_SECRET || 'nodejs-hbs-gurolayanlar-com-session-secret';
process.env.REDIS_PORT = process.env.REDIS_PORT || 6379;
process.env.GOOGLE_ID = process.env.GOOGLE_ID || '123456789';
process.env.GOOGLE_SECRET = process.env.GOOGLE_SECRET || 'qwerty';
process.env.FACEBOOK_ID = process.env.FACEBOOK_ID || '123456789';
process.env.FACEBOOK_SECRET = process.env.FACEBOOK_SECRET || 'qwerty';
process.env.TWITTER_KEY = process.env.TWITTER_KEY || '123456789';
process.env.TWITTER_SECRET = process.env.TWITTER_SECRET || 'qwerty';

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    ip: process.env.IP,
    secret: process.env.SESSION_SECRET,
    redisPort : process.env.REDIS_PORT,

    googleID: process.env.GOOGLE_ID,
    googleSecret: process.env.GOOGLE_SECRET,
    googleCallbackURL: '/login/google/return',

    facebookID: process.env.FACEBOOK_ID,
    facebookSecret: process.env.FACEBOOK_SECRET,
    facebookCallbackURL: '/login/facebook/return',

    twitterKey: process.env.TWITTER_KEY,
    twitterSecret: process.env.TWITTER_SECRET,
    twitterCallbackURL: '/login/twitter/return',

    root: path.normalize(`${__dirname}/../../..`)
};

// Export the config object
module.exports = Object.assign({}, config, require(`./${process.env.NODE_ENV}.js`) || {});