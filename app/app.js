'use strict';

var app = angular.module('FlickrPhotoStream', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/search', {
		templateUrl: 'views/search.html',
		controller: 'SearchController'
	});
	$routeProvider.otherwise({
        redirectTo: '/'
    });
}])
.constant('FLICKR_KEY', '79793fa0c6ab12747dc7ccc48ed2bed8')
.constant('SECRET', '1d4af34fed6561e6')
.constant('SEARCH_URL', 'https://api.flickr.com/services/rest/?method=flickr.photos.search' +
	'&api_key=79793fa0c6ab12747dc7ccc48ed2bed8&safe_search=1&per_page=50&format=json&nojsoncallback=1&tags=')
.constant('DESC_URL', 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo' +
	'&api_key=79793fa0c6ab12747dc7ccc48ed2bed8&format=json&nojsoncallback=1&photo_id=');
