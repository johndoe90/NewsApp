'use strict';

angular
	.module('newsApp.services')
	.factory('Cordova', ['$window', function($window){
		var isPresent = $window.cordova !== undefined;
		var cordova = $window.cordova || {};

		cordova.tick = function(){
			if(isPresent){
				this.exec(
					function(){},
					function(){},
					'SoundEffects',
					'click',
					[]
				);
			}
		};

		cordova.preventSleep = function(){
			if(isPresent){
				$window.plugins.insomnia.keepAwake();
			}
		};

		cordova.allowSleep = function(){
			if(isPresent){
				$window.plugins.insomnia.allowSleepAgain();
			}
		};

		return cordova;
	}]);