'use strict';

angular.module('newsApp.controllers')
	.controller('AppCtrl', ['$scope', '$window', 'Settings', function($scope, $window, Settings){
		$window.addEventListener('beforeunload', function(){
			Settings.shutdown();
		});
	}]);