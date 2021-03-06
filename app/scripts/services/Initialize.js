'use strict';

angular.module('newsApp.services')
	.factory('Initialize', ['$rootScope', '$q', function($rootScope, $q){
		var initialized = false;
		var initializeFunctions = ['Categories', 'MediaProviders', 'Settings'];
		var registeredInitializeFunctions = {};

		var initializeApplication = function(){
			(function(){
				var promises = [];
				for(var key in registeredInitializeFunctions){
					promises.push(registeredInitializeFunctions[key].initialize());
				}

				return $q.all(promises);
			}()).then(function(){
				initialized = true;
				$rootScope.$broadcast('initialized');
			});
		};

		var initializeApplicationIfReady = function(){
			for(var i = 0; i < initializeFunctions.length; i++){
				if(!registeredInitializeFunctions[initializeFunctions[i]]){
					return;
				}
			}

			initializeApplication();
			registeredInitializeFunctions = {};
		};

		var initialize = function(name, dependencies, callback){
			registeredInitializeFunctions[name] = {
				initialize: function(){
					return $q.all(dependencies).then(callback);
				}
			};

			initializeApplicationIfReady();
		};
		
		return initialize;
	}]);
