'use strict';

/**
 * @ngdoc overview
 * @name egcApp
 * @description
 * # App Estudio Gerardo Caballero
 *
 * Main module of the application.
 */
angular
  .module('egcApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/pages/index.html',
          controller: 'IndexCtrl'
      })
      .when('/home', {
        templateUrl: 'views/pages/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'index'
      })
      .when('/curriculum-vitae', {
        templateUrl: 'views/pages/curriculum-vitae.html'
      })
      .when('/contacto', {
        templateUrl: 'views/pages/contacto.html'
      })
      .when('/obras/:categoria', {
        templateUrl: 'views/pages/obras-enum.html',
        controller: 'ObrasEnumCtrl'
      })
      .when('/obras/:categoria/:slug', {
        templateUrl: 'views/pages/obra-layout.html',
        controller: 'ObraLayoutCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin/views/index.html',
        controller: 'IndexAdminCtrl',
        controllerAs: 'indexAdmin'

      })
      .otherwise({
        redirectTo: '/'
      });
  }]).run(['$rootScope', function ($rootScope) {
    $rootScope.welcomeMsg = "Gerardo Caballero - Arquitecto";
    $rootScope.welcomeLink = "#/inicio";
    $rootScope.apiUrl = 'http://localhost/gerardocaballero.com/api/';
    $rootScope.staticUrl = 'http://localhost:8000/'
}]).constant('config', {  
  //apiUrl: 'http://localhost/gerardocaballero.com/api/',
  //staticUrl: 'http://localhost:8000/'
});
