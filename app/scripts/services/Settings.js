'use strict';

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

		/*function SettingsServ(){
			this.settings = {
				mediaFilters: []
			};

			var self = this;
			var initialized = false;
			var initializeDefer = $q.defer();

			this.initialize = function(){
				if(!initialized){
					initialized = true;
					$q.all([categoryServ.initialize(), mediaProviderServ.initialize()])
						.then(function(){
							var settings;
							if(storageServ.local.settings){
								settings = JSON.parse(storageServ.local.settings);
								angular.forEach(settings.mediaFilters, function(filter){
									self.settings.mediaFilters.push(filter);
								});
							}else{
								settings = self.defaultSettings();
								angular.forEach(settings.mediaFilters, function(filter){
									self.settings.mediaFilters.push(filter);
								});

								//self.settings = self.defaultSettings();
							}

							initializeDefer.resolve();
						});
				}

				return initializeDefer.promise;
			};
		}

		SettingsServ.prototype.shutdown = function(){
			storageServ.local.settings = JSON.stringify(this.settings);
		};

		SettingsServ.prototype.defaultSettings = function(){
			var categories = categoryServ.categories;
			var mediaProviders = mediaProviderServ.mediaProviders;
			var mediaFilters = [
				{
					id: utilityServ.random(),
					categories: [1,2,3,4,5,6,7,8,9,10],
					mediaProviders: [1,2]
				},
				{
					id: utilityServ.random(),
					categories: [1,2,3,4,5],
					mediaProviders: [1,2]
				}
			];

			//angular.forEach(mediaFilters, function(filter){
			//	angular.forEach(categories, function(category){
			//		filter.categories.push(category.id);
			//	});

			//	angular.forEach(mediaProviders, function(mediaProvider){
			//		filter.mediaProviders.push(mediaProvider.id);
			//	});
			//});

			return {
				mediaFilters: mediaFilters
			};
			//return {
			//	mediaFilters: [
			//		{
			//			categories: categoryServ.categories,
			//			mediaProviders: mediaProviderServ.mediaProviders
			//		},
			//		{
			//			categories: categoryServ.categories,
			//			mediaProviders: mediaProviderServ.mediaProviders
			//		}
			//	]
			//};
		};

		return new SettingsServ();*/
	}]);