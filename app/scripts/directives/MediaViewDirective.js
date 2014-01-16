'use strict';

angular
.module('newsApp.directives')
.directive('pfMediaView', [function(){
	return {
		restrict: 'AE',
		replace: true,
		templateUrl: 'views/media-view.tpl.html',
		link: function(){

		}
	};
}]);
	/*.directive('mediaView', ['$window', function($window){
		return {
			scope: {
				url: '@url'
			},
			restrict: 'AE',
			template: '<iframe id="media-view-frame" ng-src="{{url}}"></iframe><div id="media-view-spinner"></div>',
			link: function($scope){
				var document = $window.document;
				var view = document.getElementById('media-view');
				var $frame = angular.element(document.getElementById('media-view-frame'));
				var $spinner = angular.element(document.getElementById('media-view-spinner'));

				$scope.$watch('url', function(newUrl){
					if($window.getComputedStyle(view).getPropertyValue('display') !== 'none'){
						$spinner.removeClass('hide');
						$frame.attr('ng-src', newUrl);
					}else{
						$window.open(newUrl, '_blank');
					}
				});

				$frame.bind('load', function(){
					$spinner.addClass('hide');
				});
			}
		};
	}]);*/