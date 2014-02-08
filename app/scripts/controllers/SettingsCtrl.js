'use strict';

angular
	.module('newsApp.controllers')
	.controller('SettingsCtrl', ['$scope','$ionicActionSheet', '$ionicModal', 'Threads', 'Cordova', 'MediaProviders', 'Categories', 'Settings', function($scope, $ionicActionSheet, $ionicModal, Threads, Cordova, MediaProviders, Categories, Settings){
		$scope.threads = Settings.settings.threads;
		$scope.categories = Categories.categories;
		$scope.categoryCheckboxes = [];
		$scope.mediaProviders = MediaProviders.mediaProviders;

		$scope.addThread = function(){
			$scope.threads.push({
				name: 'Filter ' + ($scope.threads.length + 1),
				filter: {
					categories: [],
					mediaProviders: []
				},
				media: []
			});

			$scope.thread = $scope.threads[$scope.threads.length - 1];
			$scope.openEditFilterModal();
		};

		$scope.toggleMediaProvider = function(mediaProviderIndex){
			var mediaProviderId = MediaProviders.mediaProviders[mediaProviderIndex].id;
			var indexOf = $scope.thread.filter.mediaProviders.indexOf(mediaProviderId);
			if(indexOf === -1){
				$scope.thread.filter.mediaProviders.push(mediaProviderId);
			}else{
				$scope.thread.filter.mediaProviders.splice(indexOf, 1);
			}

			$scope.thread.media = [];
		};

		$scope.addCategory = function(category){
			var indexOf = $scope.thread.filter.categories.indexOf(category.id);
			if(indexOf !== -1) { return; }

			$scope.thread.filter.categories.push(category.id);
			$scope.categoryCheckboxes[Categories.indexOf(category.id)] = true;
		};

		$scope.removeCategory = function(category){
			var indexOf = $scope.thread.filter.categories.indexOf(category.id);
			if(indexOf !== -1){
				$scope.thread.filter.categories.splice(indexOf, 1);
				$scope.categoryCheckboxes[Categories.indexOf(category.id)] = false;
			}
		};

		$scope.addCategories = function(categories){
			angular.forEach(categories, function(category){
				$scope.addCategory(category);
			});
		};

		$scope.removeCategories = function(categories){
			angular.forEach(categories, function(category){
				$scope.removeCategory(category);
			});
		};

		$scope.toggleCategory = function(categoryIndex){
			var parent = Categories.categories[categoryIndex];
			var children = Categories.children(parent.id);
			var indexOf = $scope.thread.filter.categories.indexOf(parent.id);
			if(indexOf === -1){
				$scope.thread.filter.categories.push(parent.id);
				$scope.addCategories(children);
			}else{
				$scope.thread.filter.categories.splice(indexOf, 1);
				$scope.removeCategories(children);
			}

			$scope.thread.media = [];
		};

		$scope.openEditFilterModal = function(){
			$ionicModal.fromTemplateUrl('partials/modals/editFilter.tpl.html', function(editFilterModal){
				$scope.editFilterModal = editFilterModal;
			},
			{
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(){
				$scope.editFilterModal.show();
			});
		};

		$scope.closeEditFilterModal = function(){
			$scope.editFilterModal.hide();
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
							$scope.openEditFilterModal();
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