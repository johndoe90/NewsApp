'use strict';

	/*document.addEventListener('deviceready', function(){
		navigator.splashscreen.hide();
	}, false);*/


(function(window){
	if(window.cordova){
		var app = {
			initialize: function() {
				this.bindEvents();
			},
			bindEvents: function() {
				document.addEventListener('deviceready', this.onDeviceReady, false);
			},
			onDeviceReady: function() {
				app.receivedEvent('deviceready');
			},
			receivedEvent: function(id) {
				var parentElement = document.getElementById(id);
				var listeningElement = parentElement.querySelector('.listening');
				var receivedElement = parentElement.querySelector('.received');

				listeningElement.setAttribute('style', 'display:none;');
				receivedElement.setAttribute('style', 'display:block;');

				console.log('Received Event: ' + id);
			}
		};

		app.initialize();
	}
})(window);

/*(function(window){
	if(window.angular){

		angular.element(window.document).ready(function(){
			angular.module('newsApp.controllers', []);
			angular.module('newsApp.directives', []);
			angular.module('newsApp.filters', []);
			angular.module('newsApp.services', []);
			angular.module('pasvaz.bindonce', []);

			angular.module('ngAnimate', ['ng']);
			angular.module('ngTouch', []);
			angular.module('ngSanitize', []);

			angular.module('ui.router.util', ['ng']);
			angular.module('ui.router.router', ['ui.router.util']);
			angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);
			angular.module('ui.router', ['ui.router.state']);
			angular.module('ui.router.compat', ['ui.router']);

			angular.module('ionic.ui.actionSheet', []);
			angular.module('ionic.service.platform', []);
			angular.module('ionic.service.templateLoad', []);
			angular.module('ionic.service.actionSheet', ['ionic.ui.actionSheet', 'ionic.service.platform', 'ionic.service.templateLoad', 'ngAnimate']);
			angular.module('ionic.service.gesture', []);
			angular.module('ionic.ui.loading', []);
			angular.module('ionic.service.loading', ['ionic.ui.loading']);
			angular.module('ionic.service.modal', ['ionic.service.templateLoad', 'ionic.service.platform', 'ngAnimate']);
			angular.module('ionic.service.popup', ['ionic.service.templateLoad']);
			angular.module('ionic.service.view', ['ui.router']);
			angular.module('ionic.service', ['ionic.service.platform', 'ionic.service.actionSheet', 'ionic.service.gesture', 'ionic.service.loading', 'ionic.service.modal', 'ionic.service.popup', 'ionic.service.templateLoad', 'ionic.service.view']);

			angular.module('ionic.ui.service.scrollDelegate', []);
			angular.module('ionic.ui.service.slideBoxDelegate', []);
			angular.module('ionic.ui.service', ['ionic.ui.service.scrollDelegate', 'ionic.ui.service.slideBoxDelegate']);

			angular.module('ionic.ui.content', ['ionic.ui.service']);
			angular.module('ionic.ui.scroll', []);
			angular.module('ionic.ui.tabs', ['ionic.service.view']);
			angular.module('ionic.ui.viewState', ['ionic.service.view', 'ionic.service.gesture']);
			angular.module('ionic.ui.header', ['ngAnimate']);
			angular.module('ionic.ui.sideMenu', ['ionic.service.gesture']);
			angular.module('ionic.ui.slideBox', []);
			angular.module('ionic.ui.list', ['ngAnimate']);
			angular.module('ionic.ui.checkbox', []);
			angular.module('ionic.ui.toggle', []);
			angular.module('ionic.ui.radio', []);
			angular.module('ionic.ui', ['ionic.ui.radio', 'ionic.ui.toggle', 'ionic.ui.checkbox', 'ionic.ui.content', 'ionic.ui.scroll', 'ionic.ui.tabs', 'ionic.ui.viewState', 'ionic.ui.header', 'ionic.ui.sideMenu', 'ionic.ui.slideBox', 'ionic.ui.list']);

			angular.module('ionic', ['ionic.service', 'ionic.ui.service', 'ionic.ui', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router']);

			angular.module('newsApp', ['newsApp.services', 'newsApp.controllers', 'newsApp.directives', 'newsApp.filters', 'ionic', 'pasvaz.bindonce']);

			angular.bootstrap(document, ['newsApp']);
		});
	}
})(window);*/

/*	var app = {
		initialize: function() {
			this.bindEvents();
		},
		bindEvents: function() {
			document.addEventListener('deviceready', this.onDeviceReady, false);
		},
		onDeviceReady: function() {
			app.receivedEvent('deviceready');
		},
		receivedEvent: function(id) {
			var parentElement = document.getElementById(id);
			var listeningElement = parentElement.querySelector('.listening');
			var receivedElement = parentElement.querySelector('.received');

			listeningElement.setAttribute('style', 'display:none;');
			receivedElement.setAttribute('style', 'display:block;');

			console.log('Received Event: ' + id);
		}
	};

	if(window.cordova !== undefined){
		app.initialize();
	}*/

