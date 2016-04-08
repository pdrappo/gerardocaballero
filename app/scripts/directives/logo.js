angular.module('egcApp')
.directive('logo',[function($location){
	return {
    	restrict: 'E',
    	templateUrl: 'views/directives/logo.html'
	}
}]);