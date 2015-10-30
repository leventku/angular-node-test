angular.module('main')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'MainController'
      })

      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileController',
        controllerAs: 'ProfileController'
      })

      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
