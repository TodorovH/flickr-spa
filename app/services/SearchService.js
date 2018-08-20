'use strict';

app.service('SearchResultsGetter', function($q, $http, SEARCH_URL){
  	this.searchInfo = function(params) {
	    var deferred = $q.defer();
	 	$http.get(SEARCH_URL + params).then(function(searchResults){
	   		var searchResults = searchResults.data;
			deferred.resolve(searchResults);
		}, function() {
			deferred.reject(arguments);
		});

		return deferred.promise;
  	} 
});