'use strict';

angular.module('newsApp.directives')
	.directive('pfMedia', function(){
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'partials/directives/media.tpl.html',
		};
	});