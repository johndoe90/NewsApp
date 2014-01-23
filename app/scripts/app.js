'use strict';

angular.module('newsApp.controllers', []);

angular.module('newsApp.directives', []);

angular.module('newsApp.filters', []);

angular.module('newsApp.services', [])
	.constant('MEDIA_PROVIDER_REPO_CONFIG', {
		url: 'http://10.0.0.38:8080/news/mediaProviders'
	})
	.constant('CATEGORY_REPO_CONFIG', {
		url: 'http://10.0.0.38:8080/news/categories'
	})
	.constant('MEDIA_REPO_CONFIG', {
		url: 'http://10.0.0.38:8080/news/media'
	});

angular.module('newsApp', ['newsApp.services', 'newsApp.controllers', 'newsApp.directives', 'newsApp.filters', 'ionic', 'pasvaz.bindonce'])
	.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', function($stateProvider, $urlRouterProvider, $sceDelegateProvider){
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://**',
			'https://**'
		]);

		$stateProvider
			.state('app', {
				abstract: true,
				url: '/app',
				templateUrl: 'views/app.tpl.html'
			})
			.state('app.settings', {
				url: '/settings',
				templateUrl: 'views/settings.tpl.html',
				controller: 'SettingsCtrl',
				resolve: {
					data: ['Threads', function(Threads){
						return Threads.initialize();
					}]
				}
			})
			.state('app.view', {
				url: '/view/?url',
				templateUrl: 'views/view.tpl.html',
				controller: 'ViewCtrl'
			})
			.state('app.presentation', {
				abstract: true,
				url: '/presentation',
				templateUrl: 'views/presentation.tpl.html',
				controller: 'ViewCtrl'
			})
			.state('app.presentation.navigation', {
				abstract: true,
				url: '/navigation',
				templateUrl: 'views/navigation.tpl.html'
			})
			.state('app.presentation.navigation.threads', {
				url: '/threads/:index',
				templateUrl: 'views/threads.tpl.html',
				controller: 'ThreadCtrl',
				resolve: {
					data: ['Threads', function(Threads){
						return Threads.initialize();
					}]
				}
			});

		/*$stateProvider
			.state('presentation', {
				abstract: true,
				url: '/presentation', 
				templateUrl: 'views/presentation.tpl.html'
			})
			.state('presentation.navigation', {
				//abstract: true,
				url: '/navigation',
				templateUrl: 'views/navigation.tpl.html'
			});*/
			/*.state('presentation.navigation.settings', {
				url: '/settings',
				templateUrl: 'views/settings.tpl.html',
				resolve: {
					data: ['Settings', function(Settings){
						return Settings.initialize();
					}]
				}
			})
			.state('presentation.navigation.threads', {
				url: '/threads/:index',
				templateUrl: 'views/threads.tpl.html',
				controller: 'ThreadCtrl',
				resolve: {
					data: ['Threads', function(Threads){
						return Threads.initialize();
					}]
				}
			});*/

		$urlRouterProvider.otherwise('/app/presentation/navigation/threads/0');

		/*$stateProvider
			.state('navigation', {
				url: '/navigation',
				abstract: true,
				templateUrl: 'views/navigation.tpl.html'
			})
			.state('navigation.settings', {
				url: '/settings',
				templateUrl: 'views/settings.tpl.html',
				resolve: {
					data: ['Settings', function(Settings){
						return Settings.initialize();
					}]
				}
			})
			.state('navigation.threads', {
				url: '/threads/:index',
				templateUrl: 'views/threads.tpl.html',
				controller: 'ThreadCtrl',
				resolve: {
					data: ['Threads', function(Threads){
						return Threads.initialize();
					}]
				}
			});



		$urlRouterProvider.otherwise('/navigation/threads/0');*/
	}]);