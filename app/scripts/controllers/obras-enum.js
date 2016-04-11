'use strict';

angular.module('egcApp')
  .controller('ObrasEnumCtrl', [ '$scope', 'ApiService', '$location', '$routeParams', function ($scope, ApiService, $location, $routeParams) {
 
  $scope.categoria = $routeParams.categoria;
  var promise = ApiService.getCategoria($scope.categoria);
	promise.then(function(){
		//La consulta se ejecutó exitosamente
		var data = ApiService.response;
    $scope.obras = data;
    $scope.limitString = function(str){
      if(str.length > 30){
        str = str.substr(0, 25) + " ...";
      }
      return str;
    }

	}, function(){
		//La consulta salió mal
  	})
  	.finally(function(){
  		//La consulta terminó
  });

  }]);
