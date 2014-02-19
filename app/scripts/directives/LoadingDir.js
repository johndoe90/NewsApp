'use strict';

angular.module('newsApp.directives')
	.directive('pfLoading', ['$timeout', function($timeout){
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'partials/directives/loading.tpl.html',
			link: function($scope, $element){
				$timeout(function(){
					$element.hide();
				}, 30000);
			}
		};
	}]);