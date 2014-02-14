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

angular.module('newsApp', ['newsApp.services', 'newsApp.controllers', 'newsApp.directives', 'newsApp.filters', 'ionic', 'ngSanitize', 'pasvaz.bindonce', 'pascalprecht.translate'])
	.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $sceDelegateProvider, $translateProvider){
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://**',
			'https://**'
		]);

		$translateProvider.translations('de', {
			MENU_SEARCH: 'Suche'
		});

		$translateProvider.translations('en', {
			MENU_SEARCH: 'Search'
		});

		$translateProvider.preferredLanguage('de');

		$stateProvider
			.state('app', {
				abstract: true,
				url: '/app',
				controller: 'AppCtrl',
				templateUrl: 'partials/views/app.tpl.html'
			})
			/*.state('app.settings', {
				url: '/settings',
				controller: 'SettingsCtrl',
				templateUrl: 'partials/views/settings.tpl.html',
				resolve: {
					data: ['Settings', function(Settings){
						return Settings.initialize();
					}]
				}
			})*/
			.state('app.settings', {
				abstract: true,
				url: '/settings',
				controller: 'SettingsCtrl',
				templateUrl: 'partials/views/app.settings.tpl.html',
				resolve: {
					data: ['Settings', function(Settings){
						return Settings.initialize();
					}]
				}
			})
			.state('app.settings.index', {
				url: '/index',
				templateUrl: 'partials/views/app.settings.index.tpl.html'
			})
			.state('app.settings.editFilter', {
				url: '/editFilter/:index',
				controller: 'EditFilterCtrl',
				templateUrl: 'partials/views/app.settings.editFilter.tpl.html'
			})
			.state('app.media', {
				abstract: true,
				url: '/media',
				controller: 'MediaCtrl',
				templateUrl: 'partials/views/media.tpl.html',
				resolve: {
					data: ['Settings', function(Settings){
						return Settings.initialize();
					}]
				}
			})
			.state('app.media.search', {
				url: '/search',
				controller: 'SearchCtrl',
				templateUrl: 'partials/views/search.tpl.html'
			})
			.state('app.media.threads', {
				url: '/threads/:index',
				controller: 'ThreadCtrl',
				templateUrl: 'partials/views/threads.tpl.html'
			})
			.state('app.media.favourites', {
				url: '/favourites',
				controller: 'FavouritesCtrl',
				templateUrl: 'partials/views/favourites.tpl.html'
			});

		$urlRouterProvider.otherwise('/app/media/threads/0');
		/*$stateProvider
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
			.state('app.presentation.navigation.search', {
				url: '/search',
				templateUrl: 'views/search.tpl.html',
				controller: 'SearchCtrl'
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
			});*/


		
	}]);
