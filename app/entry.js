const angular = require('angular');
require(__dirname + '/../css/style.css');
const twitterApp = angular.module('twitterApp', []);
require('./controllers')(twitterApp);
