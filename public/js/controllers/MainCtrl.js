angular.module('main', []).controller('MainController', function (authService, $location) {
  this.login = function () {
    authService.login({
      username: this.username.toLowerCase(),
      password: this.password.toLowerCase()
    }).then(function (resp) {
      if (resp !== 'Unauthorized') {
        $location.path('/profile')
      }
    });
  }
});