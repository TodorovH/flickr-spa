'use strict';

app.controller('HomeController', ['$scope', '$location', function($scope, $location){
	$scope.go = function ( path ) {
  		$location.path( path );
	};
}]);
