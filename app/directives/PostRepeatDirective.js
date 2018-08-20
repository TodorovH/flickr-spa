'use strict';

app.directive('myPostRepeatDirective', function(DescriptionGetter) {
	return function($scope, element, attrs) {
		if ($scope.$last){

			angular.forEach($scope.picsData.photo, function(obj) {
				
				DescriptionGetter.descInfo(obj.id).then(function(desc){

					if(desc.stat === 'ok') {

						var text = desc.photo.description._content || 'No description';
						document.getElementById(obj.id).innerHTML = text;
					}
				});
			});
		}
	};
});