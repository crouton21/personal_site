var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config')
  // HOW TO NEST ALL CONTROLLERS AND VIEWS IN INDEXCONTROLLER??
  $routeProvider
    .when('/', {
      redirectTo: '/home',
    })
    .when('/home', {
        templateUrl:'/views/home.html',
        controller: 'HomeController as vm',
      })
    .when('/projects', {
        templateUrl:'/views/projects.html',
        controller: 'ProjectController as vm',
      })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);

//links to resume, github, projects (solo and group)