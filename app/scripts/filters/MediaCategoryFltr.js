'use strict';

angular
	.module('newsApp.filters')
	.filter('mediaCategory', ['Categories', function(Categories){
		return function(id){
			return Categories.get(id).name;
		};
	}]);