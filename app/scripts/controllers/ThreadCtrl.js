'use strict';

angular.module('newsApp.controllers')
	.controller('ThreadCtrl', ['$scope', '$state', '$stateParams', 'Cordova', 'Settings', '$timeout', function($scope, $state, $stateParams, Cordova, Settings, $timeout){
		var threadIndex = parseInt($stateParams.index);
		$scope.data.end = false;
		$scope.data.name = Settings.settings.threads[threadIndex].name;
		$scope.data.media = Settings.settings.threads[threadIndex].media;
		$scope.data.categories = Settings.settings.threads[threadIndex].filter.categories;
		$scope.data.mediaProviders = Settings.settings.threads[threadIndex].filter.mediaProviders;

		$scope.navClick.action = function(){
			console.log('B');
			//$state.go('app.settings.editFilter', {index: threadIndex});
		};

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
				$scope.$emit('startLoading');
				Cordova.tick();
				$timeout(function(){
					$scope.goToPrevThread();
				}, 50);
			}
		}];

		$scope.rightButtons = [{
			type: 'button-icon icon ion-chevron-right',
			tap: function(){
				$scope.$emit('startLoading');
				Cordova.tick();
				$timeout(function(){
					$scope.goToNextThread();
				}, 50);
			}
		}];

		$scope.refresh = function(){
			console.log('refresh');
			var params = {
				'categories[]': $scope.data.categories,
				'mediaProviders[]': $scope.data.mediaProviders,
				'quantity': $scope.data.quantity,
				'last': $scope.data.media[0].id
			};

			$scope.prependMedia(params).then(function(){
				$scope.$broadcast('scroll.refreshComplete');
			});
		};

		$scope.loadMore = function(done, arg2){
			if($scope.data.end === false){
				console.log('loadMore');
				var params = {
					'categories[]': $scope.data.categories,
					'mediaProviders[]': $scope.data.mediaProviders,
					'quantity': $scope.data.quantity
				};
				params = $scope.data.media.length > 0 ? angular.extend({'first': $scope.data.media[$scope.data.media.length - 1].id}, params) : params;

				$scope.loadMoreMedia(done, arg2, params);
			}
		};

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

		/*$scope.$on('showMediumActionSheet', function(event, arg){
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
		});*/
	}]);