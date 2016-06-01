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
      .then(() => {
        this.tweets.splice(this.tweets.indexOf(tweet), 1);
      });
    }.bind(this);
    this.addTweet = function() {
      $http.post('/api/new_tweet', this.newTweet)
      .then((res) => {
        this.tweets.unshift(res.data.tweet);
        this.newTweet = null;
      });
    }.bind(this);
  }]);
};
