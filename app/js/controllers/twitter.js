module.exports = function(app) {
  app.controller('TwitterController', ['$http', function($http) {
    this.tweets = [];
    this.getAll = function() {
      $http.get('/api/recent_tweets')
      .then((res) => {
        this.tweets = res.data.tweets;
      });
    }.bind(this);
  }]);
};
