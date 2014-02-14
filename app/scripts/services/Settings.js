'use strict';

angular.module('newsApp.services')
	.factory('Settings', ['$q', 'Storage', 'Categories', 'MediaProviders', function($q, Storage, Categories, MediaProviders){
		var initialized = false;
		var initializeDefer = $q.defer();

		return {
			settings: {
				//filters: []
				threads: [],
				favourites: []
			},

			initialize: function(){
				var self = this;
				if(!initialized){
					initialized = true;
					$q.all([Categories.initialize(), MediaProviders.initialize()]).then(function(){
						
						/*var settings;
						if(Storage.local.settings){
							settings = JSON.parse(Storage.local.settings);
							angular.forEach(settings.filters, function(filter){
								self.settings.filters.push(filter);
							});
						}else{
							settings = self.defaultSettings();
							angular.forEach(settings.filters, function(filter){
								self.settings.filters.push(filter);
							});
						}

						console.log('Settings initialized');*/
						var settings;
						if(Storage.local.settings){
							settings = JSON.parse(Storage.local.settings);
							angular.forEach(settings.threads, function(thread){
								self.settings.threads.push(thread);
							});
							angular.forEach(settings.favourites, function(medium){
								self.settings.favourites.push(medium);
							});
						}else{
							settings = self.defaultSettings();
							angular.forEach(settings.threads, function(thread){
								self.settings.threads.push(thread);
							});
						}

						console.log('Settings initialized');

						initializeDefer.resolve();
					});
				}

				return initializeDefer.promise;
			},

			shutdown: function(){
				//dont save media
				var temp = this.settings;
				angular.forEach(temp.threads, function(thread){
					thread.media.splice(0, thread.media.length);
				});

				Storage.local.settings = JSON.stringify(temp);
			},

			defaultSettings: function(){
				var defaultSettings = {
					threads: []
				};

				var categories = (function(){
					var temp = [];
					angular.forEach(Categories.categories, function(category){
						temp.push(category.id);
					});

					return temp;
				}());

				var mediaProviders = MediaProviders.mediaProviders;

				angular.forEach(mediaProviders, function(mediaProvider){
					defaultSettings.threads.push({
						name: mediaProvider.mediaProviderName,
						filter: {
							mediaProviders: [mediaProvider.id],
							categories: categories
						},
						media: []
					});
				});

				return defaultSettings;
			},

			addFavourite: function(medium){
				var index = -1;
				for(var i = this.settings.favourites.length - 1; i >= 0; i -= 1){
					if(this.settings.favourites[i].id === medium.id){
						index = i;
						break;
					}
				}

				if(index === -1){
					this.settings.favourites.push(medium);
				}
			},

			removeFavourite: function(medium){
				var index = -1;
				for(var i = this.settings.favourites.length - 1; i >= 0; i -= 1){
					if(this.settings.favourites[i].id === medium.id){
						index = i;
						break;
					}
				}

				if(index !== -1){
					this.settings.favourites.splice(index, 1);
				}
			}

		};
	}]);
/*'use strict';

angular.module('newsApp.services')
	.factory('Settings', ['$q', 'Storage', 'Categories', 'MediaProviders', function($q, Storage, Categories, MediaProviders){
		var initialized = false;
		var initializeDefer = $q.defer();

		return {
			settings: {
				filters: []
			},

			initialize: function(){
				var self = this;
				if(!initialized){
					initialized = true;
					$q.all([Categories.initialize(), MediaProviders.initialize()]).then(function(){
						var settings;
						if(Storage.local.settings){
							settings = JSON.parse(Storage.local.settings);
							angular.forEach(settings.filters, function(filter){
								self.settings.filters.push(filter);
							});
						}else{
							settings = self.defaultSettings();
							angular.forEach(settings.filters, function(filter){
								self.settings.filters.push(filter);
							});
						}

						console.log('Settings initialized');
						initializeDefer.resolve();
					});
				}

				return initializeDefer.promise;
			},

			shutdown: function(){
				Storage.local.settings = JSON.stringify(this.settings);
			},

			defaultSettings: function(){
				return {
					filters: [
						{
							categories: [6,7,8,9,10],
							mediaProviders: [1,2]
						},
						{
							categories: [1,2,3,4,5],
							mediaProviders: [1,2]
						}
					]
				};
			}
		};
	}]);*/