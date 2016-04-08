angular.module('egcApp')
.directive('bottomBar',[ '$location', function($location){
	return {
    	restrict: 'E',
    	templateUrl: 'views/directives/bottom-bar.html',
        link: function(scope, element, attrs){

            scope.links = [
            {url: "#/obras/proyectos-publicos", texto: "Proyectos Públicos"},
            {url: "#/obras/concursos", texto: "Concursos"},
            {url: "#/obras/encargos-privados", texto: "Encargos Privados"},
            {url: "#/obras/casas", texto: "Casas"},
            {url: "#/obras/reformas", texto: "Reformas"},
            {url: "#/obras/objetos", texto: "Objetos"},
            {url: "#/obras/paisajes-enlazados", texto: "Paisajes Enlazados"},
            {url: "#/curriculum-vitae", texto: "CV"},
            {url: "#/contacto", texto: "Contacto"},
            ];
            //Compruebo el estado de location para ver que no este en el root '/'
            scope.hideBottomBar = getLocationStatus();
            scope.$on('$routeChangeStart', function() {
                scope.hideBottomBar = getLocationStatus();
            });
        }
	}

    //Obtiene el estado de location
    function getLocationStatus(){
        return ($location.path() == '/') ? true : false;
    }
}]);