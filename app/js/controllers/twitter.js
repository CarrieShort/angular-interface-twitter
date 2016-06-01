module.exports = function(app) {
  app.controller('TwitterController', ['$http', function($http) {
    this.tweets = [];
    this.getAll = function() {
      $http.get('/api/recent_tweets')
      .then((res) => {
        this.tweets = res.data.tweets;
      });
    }.bind(this);
    this.deleteTweet = function(tweet) {
      $http.delete('/api/remove_tweet/' + tweet.id_str)
      .then((res) => {
        console.log(res.data);
        this.tweets.splice(this.tweets.indexOf(tweet), 1);
      });
    };
  }]);
};
