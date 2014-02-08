'use strict';

angular
	.module('newsApp.filters')
	.filter('font', [function(){
		return function(category){
			if(category.sort.split('.').length === 1) { return {'font-weight': 'bold'}; }

			return {'font-weight': 'normal'};
		};
	}]);