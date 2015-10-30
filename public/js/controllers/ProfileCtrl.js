angular.module('main').controller('ProfileController', function (authService) {
  this.user = authService.currentUser;
});