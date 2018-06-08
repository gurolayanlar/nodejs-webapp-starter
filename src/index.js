'use strict';

const http = require('http');
const app = require('./app');
const config = require('./config/environment');

const server = http.createServer(app);

require('./routes')(app);

server.listen(config.port, config.host, () => {
    console.log('Application started on %d', config.port);
});