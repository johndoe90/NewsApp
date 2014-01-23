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
						/*angular.forEach(Settings.settings.filters, function(filter, index){
							self.threads.push({
								name: 'Name' + index,
								filter: filter,
								media: []
							});
						});

						console.log('Threads initialized');*/

						self.threads = Settings.settings.threads;
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
					'mediaProviders[]': this.threads[index].filter.mediaProviders,
					quantity: 25
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

			consume: function(medium){
				medium.consumed += 1;
				
				return Media.consume(medium.id);
			},

			toggleMediaProvider: function(thread, mediaProviderId){
				var indexOf = thread.filter.mediaProviders.indexOf(mediaProviderId);
				if(indexOf === -1){
					thread.filter.mediaProviders.push(mediaProviderId);
				}else{
					thread.filter.mediaProviders.splice(indexOf, 1);
				}
			},

			toggleCategory: function(thread, categoryId){
				var indexOf = thread.filter.categories.indexOf(categoryId);
				if(indexOf === -1){
					thread.filter.categories.push(categoryId);
				}else{
					thread.filter.categories.splice(indexOf, 1);
				}
			},

			removeMedia: function(thread){
				thread.media.splice(0, thread.media.length);
			},

			add: function(){
				this.threads.push({
					name: 'Thread ' + this.threads.length,
					filter: {
						categories: [],
						mediaProviders: []
					},
					media: []
				});
			},

			remove: function(){

			}
		};
	}]);
/*'use strict';

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
						angular.forEach(Settings.settings.filters, function(filter, index){
							self.threads.push({
								name: 'Name' + index,
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

			consume: function(medium){
				medium.consumed += 1;
				
				return Media.consume(medium.id);
			},

			add: function(){

			},

			remove: function(){

			}
		};
	}]);*/