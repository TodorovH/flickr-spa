'use strict';

app.service('DescriptionGetter', function($q, $http, DESC_URL){
  	this.descInfo = function(params) {
	    var deferred = $q.defer();
	 	$http.get(DESC_URL + params).then(function(desc){
	   		var desc = desc.data;
			deferred.resolve(desc);
		}, function() {
			deferred.reject(arguments);
		});

		return deferred.promise;
  	} 
});