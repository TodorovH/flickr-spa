'use strict';

app.controller('SearchController', ['$scope', 'SearchResultsGetter', 'DescriptionGetter',
  function($scope, SearchResultsGetter, DescriptionGetter){
    $scope.tags = null;
    $scope.picsData = {};
    $scope.photoDesc = null;

    $scope.getTags = function() {
      $scope.tags = document.getElementById('tags').value.split(/[ ,]+/).join(',');

      document.getElementById('tags').value = '';
    }
    	
    $scope.search = function() {
    	$scope.getTags();
    	if($scope.tags !== null) {
    		SearchResultsGetter.searchInfo($scope.tags).then(function(picturesInfo){

          if(picturesInfo.stat === 'ok') {
            $scope.picsData = picturesInfo.photos;
          }
      	});		
    	}
    }

    $scope.getDescription = function(picId) {
      DescriptionGetter.descInfo(picId).then(function(desc){

        if(desc.stat === 'ok') {console.log(document.getElementById(picId));
          //document.getElementById(picId).value = desc.photo.description._content;
          document.getElementById(picId).value = 'HELLOOOO';
        }
      });   
    }
}]);