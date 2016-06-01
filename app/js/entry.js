const angular = require('angular');
const twitterApp = angular.module('twitterApp', []);
require('./controllers')(twitterApp);
