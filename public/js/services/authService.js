angular.module('main').factory('authService', function ($http) {
  return {
    login: function (data) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: data
      });
    }
  }
})