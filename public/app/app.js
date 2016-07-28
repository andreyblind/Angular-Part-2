

angular
  .module('contactListApp', [
    'ngRoute'
  ])
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
/*
      .otherwise({
        redirectTo: '/'
      });
*/
  });
