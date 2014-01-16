'use strict';

angular.module('newsApp.services')
	.factory('MediaProviderRepo', ['$http', 'MEDIA_PROVIDER_REPO_CONFIG', function($http, MEDIA_PROVIDER_REPO_CONFIG){
		return {
			query: function(params){
				return $http
					.get(MEDIA_PROVIDER_REPO_CONFIG.url, {params: params})
					.then(function(response){
						return response.data;
					});
			}
		};

		/*function MediaProviderRepo(){}

		MediaProviderRepo.prototype.query = function(params){
			return $http
				.get(MEDIA_PROVIDER_REPO_CONFIG.url, {params: params})
				.then(function(response){
					return response.data;
				});
		};

		return new MediaProviderRepo();*/
	}]);