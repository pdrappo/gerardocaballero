'use strict';

angular.module('egcApp')
  .controller('ObrasEnumCtrl', [ '$scope', 'ApiService', '$location', function ($scope, ApiService, $location) {
  var url = $location.url();
  var obra = url.split('/')[2];
  
  var promise = ApiService.getCategoria(obra);
	promise.then(function(){
		//La consulta se ejecutó exitosamente
		var data = ApiService.response;
    $scope.obras = data;
    console.log(data);

	}, function(){
		//La consulta salió mal
  	})
  	.finally(function(){
  		//La consulta terminó
  });

  }]);
