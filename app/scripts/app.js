'use strict';

angular.module('newsApp.controllers', []);

angular.module('newsApp.directives', []);

angular.module('newsApp.filters', []);

angular.module('newsApp.services', [])
	.constant('MEDIA_PROVIDER_REPO_CONFIG', {
		url: 'http://aqueous-hollows-5032.herokuapp.com//mediaProviders' //http://quiet-fjord-1432.herokuapp.com
	})
	.constant('CATEGORY_REPO_CONFIG', {
		url: 'http://aqueous-hollows-5032.herokuapp.com/categories'
	})
	.constant('MEDIA_REPO_CONFIG', {
		url: 'http://aqueous-hollows-5032.herokuapp.com/media'
	});

angular.module('newsApp', ['newsApp.services', 'newsApp.controllers', 'newsApp.directives', 'newsApp.filters', 'ionic','ngSanitize', 'pasvaz.bindonce', 'pascalprecht.translate'])
	.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $sceDelegateProvider, $translateProvider){
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://**',
			'https://**'
		]);

		$translateProvider.translations('de', {
			MENU_HOME: 'Home',
			MENU_SEARCH: 'Suche',
			MENU_SETTINGS: 'Einstellungen',
			MENU_BOOKMARK: 'Lesezeichen',
			MENU_HELP: 'Hilfe',

			MEDIA_NO_RESULTS: 'keine Ergebnisse',

			MEDIA_SEARCH_TITLE: 'Suche',
			MEDIA_SEARCH_PLACEHOLDER: 'Suche',
			MEDIA_BOOKMARK_TITLE: 'Lesezeichen',

			SETTINGS_INDEX_TITLE: 'Einstellungen',
			SETTINGS_INDEX_LIST_EDIT_FILTER: 'Filter bearbeiten',
			SETTINGS_INDEX_LIST_ABOUT: 'Impressum',
			SETTINGS_INDEX_LIST_VERSION: 'Version',
			SETTINGS_INDEX_LIST_TERMS_AND_CONDITIONS: 'Nutzungsbedingungen',
			SETTINGS_INDEX_LIST_OTHER: 'Sonstiges',
			SETTINGS_INDEX_LIST_RESET: 'Standardeinstellungen wiederherstellen',
			SETTINGS_INDEX_LIST_LANGUAGE: 'Sprache',

			SETTINGS_EDIT_FILTER_TITLE: 'Filter bearbeiten',
			SETTINGS_EDIT_FILTER_LIST_NAME: 'Filtername',
			SETTINGS_EDIT_FILTER_LIST_SOURCES: 'Quellen',
			SETTINGS_EDIT_FILTER_LIST_CATEGORIES: 'Kategorien',

			SETTINGS_EDIT_FILTER_ACTION_SHEET_EDIT: 'bearbeiten',
			SETTINGS_EDIT_FILTER_ACTION_SHEET_MOVE_UP: 'nach oben verschieben',
			SETTINGS_EDIT_FILTER_ACTION_SHEET_MOVE_DOWN: 'nach unten verschieben',
			SETTINGS_EDIT_FILTER_ACTION_SHEET_REMOVE: 'entfernen',
			SETTINGS_EDIT_FILTER_ACTION_SHEET_CANCEL: 'abbrechen'
		});

		$translateProvider.translations('en', {
			MENU_HOME: 'Home',
			MENU_SEARCH: 'Search',
			MENU_SETTINGS: 'Settings',
			MENU_BOOKMARK: 'Bookmarks',
			MENU_HELP: 'Help',

			MEDIA_NO_RESULTS: 'no Results',

			MEDIA_SEARCH_TITLE: 'Search',
			MEDIA_SEARCH_PLACEHOLDER: 'Search',
			MEDIA_BOOKMARK_TITLE: 'Bookmarks',

			SETTINGS_INDEX_TITLE: 'Settings',
			SETTINGS_INDEX_LIST_EDIT_FILTER: 'Edit filter',
			SETTINGS_INDEX_LIST_ABOUT: 'About',
			SETTINGS_INDEX_LIST_VERSION: 'Version',
			SETTINGS_INDEX_LIST_TERMS_AND_CONDITIONS: 'Terms of use',
			SETTINGS_INDEX_LIST_OTHER: 'Other',
			SETTINGS_INDEX_LIST_RESET: 'Restore default settings',
			SETTINGS_INDEX_LIST_LANGUAGE: 'Language',

			SETTINGS_EDIT_FILTER_TITLE: 'Edit filter',
			SETTINGS_EDIT_FILTER_LIST_NAME: 'Filtername',
			SETTINGS_EDIT_FILTER_LIST_SOURCES: 'Sources',
			SETTINGS_EDIT_FILTER_LIST_CATEGORIES: 'Categories',
//		
			SETTINGS_EDIT_FILTER_ACTION_SHEET_EDIT: 'edit',
			SETTINGS_EDIT_FILTER_ACTION_SHEET_MOVE_UP: 'move up',
			SETTINGS_EDIT_FILTER_ACTION_SHEET_MOVE_DOWN: 'move down',
			SETTINGS_EDIT_FILTER_ACTION_SHEET_REMOVE: 'remove',
			SETTINGS_EDIT_FILTER_ACTION_SHEET_CANCEL: 'cancel'
		});

		$translateProvider.preferredLanguage('de');

		$stateProvider
			.state('app', {
				abstract: true,
				url: '/app',
				controller: 'AppCtrl',
				templateUrl: 'partials/views/app.tpl.html'
			})
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
	}]);
