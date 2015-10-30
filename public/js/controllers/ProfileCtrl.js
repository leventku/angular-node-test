angular.module('main').controller('ProfileController', function (authService, attemptService) {
  this.user = authService.currentUser;

  this.attempts = [];

  attemptService.get().then(function(data) {
    this.attempts = data;
  }.bind(this));
});