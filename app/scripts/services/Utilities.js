'use strict';

angular.module('newsApp.services')
	.factory('Utilities', [function(){
		return {
			random: function(charset, length){
				var result = '';
				length = length || 12;
				charset = charset || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890';
			
				for(var i = 0; i < length; i++){
					result += charset[Math.floor(Math.random() * charset.length)];
				}

				return result;
			}
		};
	}]);
