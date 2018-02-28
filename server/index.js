let express = require('express');
let bodyParser = require('body-parser');
let db = require('../database-mongo');
let twitchData = require('./twitchData.js');
let request = require('request');
let PORT = process.env.PORT || 3000;

let app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())



app.get('/', function (req, res) {
  res.status(200);
  res.send();

});

app.get('/streamerList', (req, res) => {

  let options = {
    url: 'https://api.twitch.tv/helix/streams?first=30',
    headers: {'Client-ID': '7fat6yyl6puo9pjt6eypzfciu04pyj'}
  };
  //request to twitch
  request(options, function (err, response, body) {
    res.status(200);
    res.send(JSON.parse(body));
  });
});

app.get('/groupList/:id', (req, res) => {
  db.findGroups(req.params.id, data => {
    res.status(200);
    res.send(data);
  });
});

app.post('/groupList', (req, res) => {
  db.addGroup(req.body, () => {
    res.status(201);
    res.send('added');
  });
});

app.delete('/groupList/:id/:groupName', (req, res) => {
  db.deleteGroup(req.params, data => {
    res.status(200);
    res.send(data);
  });
});

app.listen(PORT, function() {
  console.log('listening on port ', PORT);
});
