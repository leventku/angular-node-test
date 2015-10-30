angular.module('main').factory('authService', function ($http) {
  return {
    login: function (data) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: data
      }).then(function success(resp) {
        this.currentUser = resp.data.user
        return resp.data
      }.bind(this),
      function error(resp) {
        return resp.data
      });
    },
    currentUser: '',
    logout: function () {
      return $http({
        method: 'GET',
        url: '/api/logout'
      }).then(function () {
        this.currentUser = '';
      }.bind(this));
    }
  }
})