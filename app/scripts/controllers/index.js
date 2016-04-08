'use strict';

/**
 * @ngdoc function
 * @name generatorApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the egcApp
 */
angular.module('egcApp')
  .controller('IndexCtrl', [ '$scope', function ($scope) {
    setTimeout(function(){
    	angular.element('#titulo').addClass('animate-bottom');
    }, 50);
    
  }]);
