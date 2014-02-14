'use strict';

angular
	.module('newsApp.directives')
	.directive('pfThread', ['$timeout', '$ionicGesture', function($timeout, $ionicGesture){
		return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div id="pf-thread" ng-transclude></div>',
			link: function($scope, $element){
				$scope.display = false;
				$timeout(function(){
					$scope.$apply(function(){
						$scope.display = true;
					});
				}, 1000);

				if($scope.data.media.length === 0){
					$scope.loadMore();
				}

				$ionicGesture.on('swipeleft', function(){
					$scope.goToNextThread();
				}, $element);

				$ionicGesture.on('swiperight', function(){
					$scope.goToPrevThread();
				}, $element);
			}
		};
	}]);