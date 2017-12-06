var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var twitchData = require('./twitchData.js');
var request = require('request');

var PORT = process.env.PORT || 3000;

var app = express();
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/', function (req, res) {
  res.status(200);
  res.send();
  
});

app.get('/streamerList', (req, res) => {

  var options = {
    url: 'https://api.twitch.tv/helix/streams?first=15',
    headers: {'Client-ID': '7fat6yyl6puo9pjt6eypzfciu04pyj'}
  };
  //request to twitch
  request(options, function (err, response, body) {
    console.log('got names!', JSON.parse(body))
    res.status(200);
    res.send(JSON.parse(body));
  });
});

app.listen(PORT, function() {
  console.log('listening on port ', PORT);
});

