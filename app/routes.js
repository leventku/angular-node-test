var User = require('./models/user');

// Seed users initially if collection is empty
User.seed();

module.exports = function(app, passport) {
  // server routes ===========================================================
  app.post('/api/login', passport.authenticate('local-login'), function (req, res) {
    res.send({
      user: req.user.username,
      isAuthenticated: req.isAuthenticated()
    });
  });

  app.get('/api/logout', function (req, res) {
    req.logout();
    res.send();
  })

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendfile('./public/index.html');
  })
}