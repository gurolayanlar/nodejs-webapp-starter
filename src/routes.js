'use strict';

const path = require('path');

const routes = (app) => {
    app.get('/', function(req, res) {
        res.render('pages/home', {
            title: 'NodeJS Web Application Starter',
            page: 'home',
            description: 'Web Application Starter Kit using NodeJS, ExpressJS and Handlebars'
        });
    });

    app.get('/about', function(req, res) {
        res.render('pages/about', {
            title: 'NodeJS Web Application Starter',
            page: 'about',
            description: 'Web Application Starter Kit using NodeJS, ExpressJS and Handlebars'
        });
    });

    app.get('/contact', function(req, res) {
        res.render('pages/contact', {
            title: 'NodeJS Web Application Starter',
            page: 'contact',
            description: 'Web Application Starter Kit using NodeJS, ExpressJS and Handlebars'
        });
    });
};

module.exports = routes;