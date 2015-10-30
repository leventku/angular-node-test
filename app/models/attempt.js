var mongoose = require('mongoose');

var attemptSchema = mongoose.Schema({
  ip: String,
  datetime: { type: Date, default: Date.now },
  action: String,
  username: String
});

var attemptModel = mongoose.model('Attempt', attemptSchema);

module.exports = {
  model: attemptModel
};