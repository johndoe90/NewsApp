'use strict';

angular
	.module('newsApp.directives')
	.directive('pfMediumControls', [function(){
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'partials/directives/mediumControls.tpl.html'
		};
	}]);