'use strict';

angular
	.module('newsApp.filters')
	.filter('subCategories', [function(){
		return function(categories, level, parent){
			var result = [];
			angular.forEach(categories, function(category){
				if(category.sort.indexOf(parent ? parent.sort : '') === 0 && category.sort.split('.').length === level){
					result.push(category);
				}
			});

			return result;
		};
	}]);