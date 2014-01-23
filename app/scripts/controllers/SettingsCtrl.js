'use strict';

angular
	.module('newsApp.controllers')
	.controller('SettingsCtrl', ['$scope','$ionicActionSheet', '$ionicModal', '$timeout', 'Threads', 'Cordova', 'MediaProviders', 'Categories', function($scope, $ionicActionSheet, $ionicModal, $timeout, Threads, Cordova, MediaProviders, Categories){
		$timeout(function(){
			$scope.sideMenuController.close();
		});

		$scope.threads = Threads.threads;
		$scope.categories = Categories.categories;
		$scope.mediaProviders = MediaProviders.mediaProviders;

		$scope.addThread = function(){
			Threads.add();
			$scope.thread = $scope.threads[$scope.threads.length - 1];
			$scope.openModal();
		};

		$scope.toggleMediaProvider = function(index){
			var mediaProviderId = MediaProviders.mediaProviders[index].id;
			Threads.toggleMediaProvider($scope.thread, mediaProviderId);
			Threads.removeMedia($scope.thread);
		};

		$scope.toggleCategory = function(index){
			var categoryId = Categories.categories[index].id;
			Threads.toggleCategory($scope.thread, categoryId);
			Threads.removeMedia($scope.thread);
		};

		$scope.openModal = function(){
			$ionicModal.fromTemplateUrl('views/filter.tpl.html', function(modal){
				$scope.modal = modal;
			},
			{
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(){
				$scope.modal.show();
			});

			//$scope.modal.show();
		};

		$scope.closeModal = function(){
			$scope.modal.hide();
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
							$scope.thread = $scope.threads[threadIndex];
							$scope.openModal();
							/*$ionicModal.fromTemplateUrl('views/filter.tpl.html', function(modal){
								$scope.modal = modal;
							},
							{
								scope: $scope,
								animation: 'slide-in-up'
							}).then(function(){
								$scope.openModal();
							});*/

							//$scope.thread = $scope.threads[threadIndex];
							/*$scope.modal.scope.thread = $scope.threads[threadIndex];
							$scope.openModal();*/
							return true;
						case 1:
							if(threadIndex > 0){
								temp = $scope.threads[threadIndex - 1];
								$scope.threads[threadIndex - 1] = $scope.threads[threadIndex];
								$scope.threads[threadIndex] = temp;

								threadIndex -= 1;
							}
							
							return false;
						case 2:
							if(threadIndex < ($scope.threads.length - 1)){
								temp = $scope.threads[threadIndex + 1];
								$scope.threads[threadIndex + 1] = $scope.threads[threadIndex];
								$scope.threads[threadIndex] = temp;

								threadIndex += 1;
							}

							return false;
					}
				},
				destructiveButtonClicked: function(){
					Cordova.tick();
					$scope.threads.splice(threadIndex, 1);
					return true;
				}
			});
		};
	}]);