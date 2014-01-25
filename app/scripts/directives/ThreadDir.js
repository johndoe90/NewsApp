'use strict';

angular
	.module('newsApp.directives')
	.directive('pfThread', ['$timeout', '$ionicGesture', function($timeout, $ionicGesture){
		return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div id="pf-thread" ng-transclude></div>',
			/*compile: function(){
				$timeout(function(){
					return function link($scope, $element){

						if($scope.thread.media.length === 0){
							$scope.load();
						}

						$ionicGesture.on('swipeleft', function(){
							$scope.goToNextThread();
						}, $element);

						$ionicGesture.on('swiperight', function(){
							$scope.goToPrevThread();
						}, $element);
					};
				}, 2500);
			}*/
				

			link: function($scope, $element){
				$scope.display = false;
				$timeout(function(){
					$scope.$apply(function(){
						$scope.display = true;
					});
				}, 1000);

				if($scope.data.media.length === 0){
					$scope.appendMedia();
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