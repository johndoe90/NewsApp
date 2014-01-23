'use strict';

angular
	.module('newsApp.filters')
	.filter('in', [function(){
		return function(value, collection){
			collection = angular.isArray(collection) ? collection : [collection];
			for(var i = 0; i < collection.length; i++){
				if(collection[i] === value){
					return true;
				}
			}

			return false;
		};
	}]);