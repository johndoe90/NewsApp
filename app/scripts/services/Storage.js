'use strict';

angular.module('newsApp.services')
	.factory('Storage', ['$window', function($window){
		return {
			local: $window.localStorage,
			session: $window.sessionStorage
		};
	}]);