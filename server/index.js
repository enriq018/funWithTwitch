let express = require('express');
let bodyParser = require('body-parser');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// let items = require('../database-mysql');
let db = require('../database-mongo');

let twitchData = require('./twitchData.js');
let request = require('request');

let PORT = process.env.PORT || 3000;

let app = express();
// UNCOMMENT FOR REACT
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
    // console.log('got names!', JSON.parse(body))
    res.status(200);
    res.send(JSON.parse(body));
  });
});

app.get('/groupList/:id', (req, res) => {
  // console.log('HERE SERVER')
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
  console.log('------------------', req.params)
  db.deleteGroup(req.params, data => {
    res.status(200);
    res.send(data);
  });
});

app.listen(PORT, function() {
  console.log('listening on port ', PORT);
});

