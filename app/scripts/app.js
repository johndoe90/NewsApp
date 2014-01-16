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

angular.module('newsApp', [/*'ngRoute', */'newsApp.services', 'newsApp.controllers', 'newsApp.directives', 'newsApp.filters', 'ionic'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		
		/*$stateProvider
			.state('threads', {
				url: '/threads/:index',
				templateUrl: 'views/threads.html',
				controller: 'ThreadCtrl',
				resolve: {
					data: ['Threads', function(Threads){
						return Threads.initialize();
					}]
				}
			});

		$urlRouterProvider
			.otherwise('/threads/0');*/

		/*$stateProvider
			.state('app', {
				url: '/app',
				views: {
					'navigation': {
						template: '<div style="display: inline-block; height: 100%; width: 40%; background: green;">NAVIGATION<nav-view></nav-view></div>'
					},
					'whatever': {
						template: '<div style="display: inline-block; height: 100%; width: 40%; background: blue;">WHATEVER</div>'
					}
				}
			})
			.state('navigation.threads', {
				template: 'THREADS'
			});*/

		$stateProvider
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



			/*.state('app.navigation', {
				url: '/navigation',
				views: {
					'navigation21': {
						template: '<view title="navigation"><content>NAVIGATION</content></view>'
					}
				}
			});*/

		$urlRouterProvider.otherwise('/navigation/threads/0');
	}]);