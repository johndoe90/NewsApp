'use strict';

angular.module('newsApp.directives')
	.directive('pfMedium', function(){
		return {
			restrict: 'AE',
			templateUrl: 'views/medium.tpl.html',
			scope: {
				medium: '=',
				consumeMedium: '='
			},
			link: function(){
			}
		};
	});