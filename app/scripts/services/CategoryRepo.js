'use strict';

angular.module('newsApp.services')
	.factory('CategoryRepo', ['$http', 'CATEGORY_REPO_CONFIG', function($http, CATEGORY_REPO_CONFIG){
		return {
			query: function(params){
				return $http
					.get(CATEGORY_REPO_CONFIG.url, {params: params})
					.then(function(response){
						return response.data;
					});
			}
		};
	}]);