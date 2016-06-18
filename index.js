// Example express application adding the parse-dashboard module to expose Parse Dashboard compatible API routes.

var express = require('express');
var ParseDashboard = require('parse-dashboard');
var path = require('path');

var dashboard = new ParseDashboard({
  apps: [
    {
      appId: process.env.APP_ID || 'q5EPleN4LS06RxrRzPFMrLxnaPC3WUklJH1iX4FJ',
      masterKey: process.env.MASTER_KEY || 'wzA0wTLzjpdr3IgDRR3P0Nbok8gyzwG2RspZSJmr',
      serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
      appName: process.env.APP_NAME || 'http://attiserver002.herokuapp.com/1',
    },
  ],
});

var app = express();
app.enable('trust proxy');

// make the Parse Dashboard available at /
app.use('/', dashboard);

var port = process.env.PORT || 4040;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-dashboard-example running on port ' + port + '.');
});
