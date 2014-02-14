'use strict';

angular
	.module('newsApp.directives')
	.directive('pfNavClickHandler', ['$ionicGesture', function($ionicGesture){
		return function link($scope, $element){
			$ionicGesture.on('tap', function(){
				//$scope.navClick.action();
				console.log('WTF');
			}, $element);
			/*$timeout(function(){
				$element.on('tap', function(){
					$scope.navClick.action();
				});
			});*/
		};
	}]);