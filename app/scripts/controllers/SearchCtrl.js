'use strict';

angular
	.module('newsApp.controllers')
	.controller('SearchCtrl', ['$scope', '$timeout', '$ionicActionSheet', 'Settings', 'Categories', 'MediaProviders', function($scope, $timeout, $ionicActionSheet, Settings, Categories, MediaProviders){
		var query;

		$scope.data.searchField = '';
		$scope.data.end = false;
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
				'q': $scope.data.searchField
			}, params || {});

			console.log('searchField: ' + $scope.data.searchField);

			if($scope.data.searchField.length > 0){
				console.log('search');
				query = $scope.data.searchField;
				$scope.data.media = [];
				$scope.data.end = false;
				$scope.appendMedia(params);
			}
		};

		$scope.searchMoreMedia = function(done, arg2){
			
			if(query && $scope.data.end === false && $scope.data.media.length > 0){
				console.log('search more');
				$scope.loadMoreMedia(done, arg2, {
					'q': query,
					'first': $scope.data.media.length > 0 ? $scope.data.media[$scope.data.media.length - 1].id : ''//$scope.data.media[$scope.data.media.length - 1].id || ''
				});
			}else{
				$timeout(function(){
					done();
				}, 100);
			}
		};

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

		$scope.mediumButtons = [
			{
				content: '<i class="icon ion-document-text"></i>lesen',
				tap: function(event, medium){
					event.stopPropagation();
					$scope.consumeMedium(medium);
				}
			},
			{
				content: '<i class="icon ion-android-star"></i>merken',
				tap: function(event, medium){
					event.stopPropagation();
					$scope.addFavourite(medium);
				}
			}
		];
	}]);