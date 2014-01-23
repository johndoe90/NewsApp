'use strict';

angular.module('newsApp.controllers')
	.controller('ThreadCtrl', ['$scope', '$state', '$stateParams', 'Threads', 'Cordova', '$timeout', function($scope, $state, $stateParams, Threads, Cordova, $timeout){
		var threadIndex = parseInt($stateParams.index);
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
		}];
	}]);