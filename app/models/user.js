var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String
});

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return password === this.password;
};

var userModel = mongoose.model('User', userSchema);

function seedUsers () {
  userModel.find({}).exec(function (err, collection) {
    // if no users in the DB, seed them
    if (collection.length === 0) {
      userModel.create({ username: 'user', password: 'password'});
      userModel.create({ username: 'manager', password: 'password'});
      userModel.create({ username: 'admin', password: 'password'});
      userModel.create({ username: 'developer', password: 'password'});
      userModel.create({ username: 'tester', password: 'password'});
    }
  });
}

module.exports = {
  model: userModel,
  seed: seedUsers
};