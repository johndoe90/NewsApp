'use strict';

angular.module('newsApp.services')
	.factory('Settings', ['$q', 'Storage', 'Categories', 'MediaProviders', function($q, Storage, Categories, MediaProviders){
		var initialized = false;
		var initializeDefer = $q.defer();

		return {
			settings: {
				//filters: []
				threads: []
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
				return {
					threads: [
						{
							name: 'Thread 1',
							media: [],
							filter: {
								categories: [6,7,8,9,10],
								mediaProviders: [1,2]
							}
						},
						{
							name: 'Thread 2',
							media: [],
							filter: {
								categories: [1,2,3,4,5],
								mediaProviders: [1,2]
							}
						}
					]
				};
				/*return {
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
				};*/
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