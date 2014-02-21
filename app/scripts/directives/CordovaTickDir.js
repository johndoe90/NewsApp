'use strict';

angular
	.module('newsApp.directives')
	.directive('pfTick', ['Cordova', function(Cordova){
		return function link($scope, $element){
			$element.bind('tap', function(){
				console.log('tick');
				Cordova.tick();
			});
		};
	}]);