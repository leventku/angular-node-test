var User = require('./models/user');

// Seed users initially if collection is empty
User.seed();

module.exports = function(app, passport) {
  // server routes ===========================================================
  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendfile('./public/index.html');
  })
}