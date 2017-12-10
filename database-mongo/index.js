var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/funWithTwitch');


var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

// var itemSchema = mongoose.Schema({
//   quantity: Number,
//   description: String
// });

// var Item = mongoose.model('Item', itemSchema);

// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

var groupSchema = mongoose.Schema({
  Id: Number,
  userId: Number,
  groupName: String,
  streamers: String
});

var Group = mongoose.model('Group', groupSchema);

var addGroup = (obj, callback) => {
  console.log('--------------------', typeof obj.id)
  var group = new Group({userId: obj.userId, groupName: obj.groupName, streamers: obj.streamers});
  group.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success')
      callback();
    }
  });
};

var findGroups = (id, callback) => {
  Group.find({userId: id}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      callback(data)
    }
  });
};

var deleteGroup = (obj, callback) => {
  Group.remove({userId: obj.id, groupName: obj.groupName} , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  });
};



module.exports = {
  addGroup: addGroup,
  findGroups: findGroups,
  deleteGroup: deleteGroup
};