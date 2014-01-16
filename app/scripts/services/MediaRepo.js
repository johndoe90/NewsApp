'use strict';

angular.module('newsApp.services')
	.factory('MediaRepo', ['$http', 'MEDIA_REPO_CONFIG', function($http, MEDIA_REPO_CONFIG){
		return {
			query: function(params){
				return $http
					.get(MEDIA_REPO_CONFIG.url, {params: params})
					.then(function(response){
						return response.data;
					});
			},

			post: function(location, params){
				return $http
					.post(MEDIA_REPO_CONFIG.url + location, {params: params})
					.then(function(response){
						return response.data;
					});
			}
		};
		/*function MediaRepo(){}

		MediaRepo.prototype.query = function(params){
			return $http
				.get(MEDIA_REPO_CONFIG.url, {params: params})
				.then(function(response){
					return response.data;
				});
		};

		MediaRepo.prototype.post = function(location, params){
			return $http
				.post(MEDIA_REPO_CONFIG.url + location, {params: params})
				.then(function(response){
					return response.data;
				});
		};

		return new MediaRepo();*/
	}]);