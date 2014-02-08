'use strict';

angular.module('newsApp.directives')
	.directive('pfMedium', ['$ionicGesture', function($ionicGesture){
		return {
			restrict: 'AE',
			templateUrl: 'views/medium.tpl.html',
			scope: {
				medium: '=',
				consumeMedium: '='
			},
			link: function($scope, $element){
				$ionicGesture.on('hold', function(){
					$scope.$emit('showMediumActionSheet', {medium: $scope.medium});
				}, $element);
			}
		};
	}]);