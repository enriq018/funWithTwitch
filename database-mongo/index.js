var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');


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
  userId: Number,
  groupName: String,
  streamers: String
});

// var addGroup = (obj) => {
//   var group = mongoose.model('')
// }

module.exports.selectAll = selectAll;