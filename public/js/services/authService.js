angular.module('main').factory('authService', function ($http, $q, $location) {
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
    },
    isLoggedIn: function () {
      return $http({
        method:'GET',
        url: '/api/checkAuth'
      }).then(function(resp) {
        var deferred = $q.defer();

        this.currentUser = resp.data.user;
        if (resp.data.isAuthenticated) {
          deferred.resolve();
        }
        else {
          deferred.reject();
          $location.url('/');
        }
        return deferred.promise;
      }.bind(this));
    }
  }
})