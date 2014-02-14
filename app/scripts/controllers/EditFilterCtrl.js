'use strict';

angular
	.module('newsApp.controllers')
	.controller('EditFilterCtrl', ['$scope', '$stateParams', 'Categories', 'MediaProviders', function($scope, $stateParams, Categories, MediaProviders){
		//not needed right away but takes some methods from SettingsCtrl and put them here
		$scope.data.thread = $scope.data.threads[parseInt($stateParams.index)];

		//window.alert(parseInt($stateParams.index));

		$scope.toggleMediaProvider = function(mediaProviderIndex){
			var mediaProviderId = MediaProviders.mediaProviders[mediaProviderIndex].id;
			var indexOf = $scope.data.thread.filter.mediaProviders.indexOf(mediaProviderId);
			if(indexOf === -1){
				$scope.data.thread.filter.mediaProviders.push(mediaProviderId);
			}else{
				$scope.data.thread.filter.mediaProviders.splice(indexOf, 1);
			}

			$scope.data.thread.media = [];
		};

		$scope.addCategory = function(category){
			var indexOf = $scope.data.thread.filter.categories.indexOf(category.id);
			if(indexOf !== -1) { return; }

			$scope.data.thread.filter.categories.push(category.id);
			$scope.data.categoryCheckboxes[Categories.indexOf(category.id)] = true;
		};

		$scope.removeCategory = function(category){
			var indexOf = $scope.data.thread.filter.categories.indexOf(category.id);
			if(indexOf !== -1){
				$scope.data.thread.filter.categories.splice(indexOf, 1);
				$scope.data.categoryCheckboxes[Categories.indexOf(category.id)] = false;
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
			var indexOf = $scope.data.thread.filter.categories.indexOf(parent.id);
			if(indexOf === -1){
				$scope.data.thread.filter.categories.push(parent.id);
				$scope.addCategories(children);
			}else{
				$scope.data.thread.filter.categories.splice(indexOf, 1);
				$scope.removeCategories(children);
			}

			$scope.data.thread.media = [];
		};
	}]);