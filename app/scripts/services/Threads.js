'use strict';

angular.module('newsApp.services')
	.factory('Threads', ['$q', 'Settings', 'Media', function($q, Settings, Media){
		var initialized = false;
		var initializeDefer = $q.defer();

		return {
			threads : [],

			initialize: function(){
				var self = this;
				if(!initialized){
					initialized = true;
					$q.all([Settings.initialize()]).then(function(){
						angular.forEach(Settings.settings.filters, function(filter){
							self.threads.push({
								filter: filter,
								media: []
							});
						});

						console.log('Threads initialized');
						initializeDefer.resolve();
					});
				}

				return initializeDefer.promise;
			},

			load: function(index){
				var self = this;
				var params = {
					'categories[]': this.threads[index].filter.categories,
					'mediaProviders[]': this.threads[index].filter.mediaProviders
				};

				if(this.threads[index].media.length !== 0){
					params.first = this.threads[index].media[this.threads[index].media.length - 1].id;
				}

				return Media.fetch(params).then(function(media){
					angular.forEach(media, function(medium){
						self.threads[index].media.push(medium);
					});
				});
			},

			consume: function(threadIndex, mediumIndex){
				var medium = this.threads[threadIndex].media[mediumIndex];
				medium.consumed += 1;
				
				return Media.consume(medium.id);
			},

			add: function(){

			},

			remove: function(){

			}
		};
	}]);