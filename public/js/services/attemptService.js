angular.module('main').factory('attemptService', function ($http) {
  return {
    get: function () {
      return $http({
        method: 'GET',
        url: '/api/attempts'
      }).then(function (resp) {
        return resp.data;
      });
    }
  }
})