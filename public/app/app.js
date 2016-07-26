'use strict';

angular
  .module('contactListApp', [
    'ngRoute'
  ])
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
/*
      .otherwise({
        redirectTo: '/'
      });
*/
  });
