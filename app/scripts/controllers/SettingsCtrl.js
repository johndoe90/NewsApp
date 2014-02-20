'use strict';

angular
	.module('newsApp.controllers')
	.controller('SettingsCtrl', ['$scope','$ionicActionSheet', '$ionicModal', 'Threads', 'Cordova', 'MediaProviders', 'Categories', 'Settings', '$state', function($scope, $ionicActionSheet, $ionicModal, Threads, Cordova, MediaProviders, Categories, Settings, $state){
		$scope.data = {};
		$scope.data.thread = {};
		$scope.data.categoryCheckboxes = [];
		$scope.data.threads = Settings.settings.threads;
		$scope.data.categories = Categories.categories;
		$scope.data.mediaProviders = MediaProviders.mediaProviders;

		$scope.addThread = function(){
			$scope.data.threads.push({
				name: 'Filter ' + ($scope.data.threads.length + 1),
				filter: {
					categories: [],
					mediaProviders: []
				},
				media: []
			});

			$scope.data.thread = $scope.data.threads[$scope.data.threads.length - 1];
			$state.go('app.settings.editFilter', {index: ($scope.data.threads.length - 1)});
		};

		$scope.showFilterActionSheet = function(threadIndex){
			$ionicActionSheet.show({
				buttons: [
					{ text: 'edit' },
					{ text: 'move up' },
					{ text: 'move down' }
				],
				cancelText: 'cancel',
				destructiveText: 'delete',

				cancel: function(){
					Cordova.tick();
				},
				buttonClicked: function(buttonIndex){
					Cordova.tick();

					var temp;
					switch(buttonIndex){
						case 0:
							Cordova.tick();
							$scope.data.thread = $scope.data.threads[threadIndex];
							$state.go('app.settings.editFilter', {index: threadIndex});
							return true;
						case 1:
							Cordova.tick();
							if(threadIndex > 0){
								temp = $scope.data.threads[threadIndex - 1];
								$scope.data.threads[threadIndex - 1] = $scope.data.threads[threadIndex];
								$scope.data.threads[threadIndex] = temp;

								threadIndex -= 1;
							}
							
							return false;
						case 2:
							Cordova.tick();
							if(threadIndex < ($scope.data.threads.length - 1)){
								temp = $scope.data.threads[threadIndex + 1];
								$scope.data.threads[threadIndex + 1] = $scope.data.threads[threadIndex];
								$scope.data.threads[threadIndex] = temp;

								threadIndex += 1;
							}

							return false;
					}
				},
				destructiveButtonClicked: function(){
					Cordova.tick();
					$scope.data.threads.splice(threadIndex, 1);
					return true;
				}
			});
		};
	}]);
