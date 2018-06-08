'use strict';

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const compression = require('compression');
const helmet = require('helmet');
const helpers = require('./views/helpers');
const config = require('./config/environment');

const app = express();

const hbs = exphbs.create({
    layoutsDir: path.join(config.root, 'src/views/layouts'),
    defaultLayout: 'main',
    helpers: helpers,
    partialsDir: path.join(config.root, 'src/views/partials')
});

if(config.env==='production') {
    app.set('trust proxy', 'loopback');
}
app.use(compression());
app.use(helmet())
app.use(express.static(path.join(config.root, 'src/assets'), { maxAge: '7 days' }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(config.root, 'src/views'));

module.exports = app;