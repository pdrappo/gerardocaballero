angular.module('egcApp')
.service("ApiService",  ['config', '$http', '$q', 
  function (config, $http, $q) {
  	var api = config.apiUrl;
    var self = this;
    self.response = {};

    this.getCategoria = function(categoria) {
      var promise = $q(function(resolve, reject){
        //$http.get(api + 'obras/' + categoria).then(
        $http.get('data/proyectos-publicos.json').then(
          //Si el request funciona hago esto
          function(response){
            var result = response.data;
            self.response = result;
            resolve(); 
          },
          //Ocurrio un error en el request
          function(){
            reject();
          });
      });
      return promise;
    };

}]);