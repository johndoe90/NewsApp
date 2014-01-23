'use strict';

angular.module('newsApp.directives')
	.directive('pfMedia', function(){
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'views/media.tpl.html',
			scope: {
				media: '=',
				consume: '=',
				display: '='
			},
			link: function(){
			}
		};
	});