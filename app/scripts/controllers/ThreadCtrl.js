'use strict';

angular.module('newsApp.controllers')
	.controller('ThreadCtrl', ['$scope', '$state', '$stateParams', 'Cordova', 'Settings', function($scope, $state, $stateParams, Cordova, Settings){
		var threadIndex = parseInt($stateParams.index);
		$scope.data.name = Settings.settings.threads[threadIndex].name;
		$scope.data.media = Settings.settings.threads[threadIndex].media;
		$scope.data.categories = Settings.settings.threads[threadIndex].filter.categories;
		$scope.data.mediaProviders = Settings.settings.threads[threadIndex].filter.mediaProviders;

		$scope.goToThread = function(next){
			$state.go('app.media.threads', {index: next});
		};

		$scope.goToNextThread = function(){
			$scope.goToThread(threadIndex < (Settings.settings.threads.length - 1) ? (threadIndex + 1) : 0);
		};

		$scope.goToPrevThread = function(){
			$scope.goToThread(threadIndex > 0 ? (threadIndex - 1) : (Settings.settings.threads.length - 1));
		};

		$scope.leftButtons = [{
			type: 'button-icon icon ion-navicon',
			tap: function(){
				Cordova.tick();
				$scope.sideMenuController.toggleLeft();
			}
		},
		{
			type: 'button-icon icon ion-chevron-left',
			tap: function(){
				Cordova.tick();
				$scope.goToPrevThread();
			}
		}];

		$scope.rightButtons = [{
			type: 'button-icon icon ion-chevron-right',
			tap: function(){
				Cordova.tick();
				$scope.goToNextThread();
			}
		}];

		/*var threadIndex = parseInt($stateParams.index);
		$scope.thread = Threads.threads[$stateParams.index];

		$timeout(function(){
			$scope.sideMenuController.close();
		});
		

		$scope.consume = function(medium){
			Threads.consume(medium).then(function(){
				console.log('consumed ' + medium.id);
			});

			$scope.$emit('changeView', {url: medium.url});
		};

		$scope.load = function(done){
			console.log('LOAD');
			Threads.load(threadIndex).then(function(){
				(done || angular.noop)();
			});
		};

		var goToThread = function(next){
			$state.go('app.presentation.navigation.threads', {index: next});
		};

		$scope.goToNextThread = function(){
			goToThread(threadIndex < (Threads.threads.length - 1) ? (threadIndex + 1) : 0);
		};

		$scope.goToPrevThread = function(){
			goToThread(threadIndex > 0 ? (threadIndex - 1) : (Threads.threads.length - 1));
		};

		$scope.refresh= function(){
			console.log('refresh');
		};

		$scope.leftButtons = [{
			type: 'button-icon icon ion-navicon',
			tap: function(){
				Cordova.tick();
				$scope.sideMenuController.toggleLeft();
			}
		},
		{
			type: 'button-icon icon ion-arrow-left-c',
			tap: function(){
				Cordova.tick();
				$scope.goToPrevThread();
			}
		}];

		$scope.rightButtons = [{
			type: 'button-icon icon ion-arrow-right-c',
			tap: function(){
				Cordova.tick();
				$scope.goToNextThread();
			}
		}];*/
	}]);