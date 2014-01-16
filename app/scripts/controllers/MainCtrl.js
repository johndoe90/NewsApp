'use strict';

angular.module('newsApp.controllers')
	.controller('mainCtrl', ['$scope', '$window', 'Categories', 'MediaProviders', 'Settings', function($scope, $window,  Categories, MediaProviders, Settings){
		$window.addEventListener('beforeunload', function(){
			Settings.shutdown();
		});

		//Überlegen wozu ich initialize service überhaupt brauche!! Einfach am besten mit categoryService.initialize().then() arbeiten

		/*initialize('Categories', Categories.initialize(), function(){
			console.log('Categories Initialized: ' + Categories.categories);
		});

		initialize('MediaProviders', MediaProviders.initialize(), function(){
			console.log('MediaProviders initialized:' + MediaProviders.mediaProviders);
		});

		initialize('Settings', Settings.initialize(), function(){
			console.log('Settings initialized: ' + Settings.settings);
		});*/

	

		/*Categories.initialize().then(function(){
			console.log('Categories initializes');
		});

		MediaProviders.initialize().then(function(){
			console.log('MediaProviders initializes');
		});

		Settings.initialize().then(function(){
			console.log('Settings initializes');
		});

		Threads.initialize().then(function(){
			console.log(Threads.threads);
		});*/
	}]);