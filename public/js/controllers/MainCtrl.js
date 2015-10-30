angular.module('main', []).controller('MainController', function (authService) {
  this.login = function () {
    authService.login({
      username: this.username.toLowerCase(),
      password: this.password.toLowerCase()
    });
  }
});