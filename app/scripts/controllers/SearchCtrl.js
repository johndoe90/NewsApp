'use strict';

angular
	.module('newsApp.controllers')
	.controller('SearchCtrl', ['$scope', 'Settings', 'Categories', 'MediaProviders', function($scope, Settings, Categories, MediaProviders){
		var query;

		$scope.searchField = '';

		$scope.data.media = [];
		$scope.data.quantity = 10;
		$scope.data.categories = [];
		$scope.data.mediaProviders = [];

		angular.forEach(Categories.categories, function(category){
			$scope.data.categories.push(category.id);
		});

		angular.forEach(MediaProviders.mediaProviders, function(mediaProvider){
			$scope.data.mediaProviders.push(mediaProvider.id);
		});


		$scope.searchMedia = function(params){
			params = angular.extend({
				'q': $scope.searchField
			}, params || {});

			console.log('search: ' + $scope.searchField);
			if($scope.searchField.length > 0){
				console.log('search: ' + $scope.searchField);
				query = $scope.searchField;
				$scope.data.media = [];
				$scope.data.end = false;
				$scope.appendMedia(params);
			}
		};

		$scope.searchMoreMedia = function(done, arg2){
			console.log('search more: ' + query);
			$scope.loadMoreMedia(done, arg2, {'q': query});

			
			/*$scope.appendMedia({'q': query}).then(function(){
				(done || angular.noop)();
			});*/
		};
	}]);