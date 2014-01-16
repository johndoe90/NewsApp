'use strict';

angular.module('newsApp.services')
	.factory('MediaProviders', ['$q', 'MediaProviderRepo', function($q, MediaProviderRepo){
		var initialized = false;
		var initializeDefer = $q.defer();

		return {
			mediaProviders: [],

			initialize: function(){
				var self = this;
				if(!initialized){
					initialized = true;
					this.fetch({}).then(function(data){
						angular.forEach(data, function(value){
							self.mediaProviders.push(value);
						});

						console.log('MediaProviders initialized');
						initializeDefer.resolve();
					});
				}

				return initializeDefer.promise;
			},

			fetch: function(params){
				return MediaProviderRepo.query(params);
			}
		};

		/*function MediaProviderService(){
			this.mediaProviders = [];

			var self = this;
			var initialized = false;
			var initializeDefer = $q.defer();
			
			this.initialize = function(){
				if(!initialized){
					initialized = true;
					this.fetchMediaProviders({}).then(function(data){
						angular.forEach(data, function(value){
							self.mediaProviders.push(value);
						});

						initializeDefer.resolve();
					});
				}

				return initializeDefer.promise;
			};
		}

		MediaProviderService.prototype.fetchMediaProviders = function(params){
			return mediaProviderRepo.query(params);
		};

		return new MediaProviderService();*/
	}]);