'use strict';

angular
	.module('newsApp.filters')
	.filter('mediumBackground', [function(){
		return function(categoryId){
			switch(categoryId){
				case 1:
					return { 'background-color' : 'hsla(0, 100%, 50%, 0.08)' };
				case 2:
					return { 'background-color' : 'hsla(36, 100%, 50%, 0.08)' };
				case 3:
					return { 'background-color' : 'hsla(72, 100%, 50%, 0.08)' };
				case 4:
					return { 'background-color' : 'hsla(108, 100%, 50%, 0.08)' };
				case 5:
					return { 'background-color' : 'hsla(144, 100%, 50%, 0.08)' };
				case 6:
					return { 'background-color' : 'hsla(180, 100%, 50%, 0.08)' };
				case 7:
					return { 'background-color' : 'hsla(216, 100%, 50%, 0.08)' };
				case 8:
					return { 'background-color' : 'hsla(252, 100%, 50%, 0.08)' };
				case 9:
					return { 'background-color' : 'hsla(288, 100%, 50%, 0.08)' };
				case 10:
					return { 'background-color' : 'hsla(324, 100%, 50%, 0.08)' };
				default:
					return { 'background-color' : 'hsla(360, 100%, 50%, 0.08)' };
			}
		};
	}]);