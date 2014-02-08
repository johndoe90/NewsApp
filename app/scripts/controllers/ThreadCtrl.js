'use strict';

angular.module('newsApp.controllers')
	.controller('ThreadCtrl', ['$scope', '$state', '$stateParams', 'Cordova', 'Settings', '$timeout', '$ionicActionSheet', function($scope, $state, $stateParams, Cordova, Settings, $timeout, $ionicActionSheet){
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



		$scope.$on('showMediumActionSheet', function(event, arg){
			$ionicActionSheet.show({
				buttons: [
					{ text: 'add to favourites' }
				],
				cancelText: 'cancel',

				cancel: function(){},
				buttonClicked: function(buttonIndex){
					switch(buttonIndex){
						case 0:
							Settings.addFavourite(arg.medium);
							break;
					}

					return true;
				}
			});
		});
	}]);