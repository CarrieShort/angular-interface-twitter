const express = require('express');
const app = express();
const twitterRouter = require(__dirname + '/routes/twitter_router');

app.use('/api', twitterRouter);
app.use(express.static(__dirname + '/build')).listen(5000, () => {
  console.log('server up on port 5000');
});
