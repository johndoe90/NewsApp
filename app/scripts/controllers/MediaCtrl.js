'use strict';

angular.module('newsApp.controllers')
	.controller('MediaCtrl', ['$scope', '$ionicModal', 'Media', 'Settings', 'Cordova', function($scope, $ionicModal, Media, Settings, Cordova){
		$scope.modalViewVisible = false;
		$scope.primaryViewVisible = false;
		$scope.url = 'http://10.0.0.38:8080/scoop';

		$scope.data = {
			end: false,
			media: [],
			quantity: 25,
			categories: [],
			mediaProviders: []
		};

		$scope.prependMedia = function(params){
			return Media.fetch(params).then(function(media){
				angular.forEach(media, function(medium){
					$scope.data.media.splice(0, 0, medium);
				});
			});
		};

		$scope.appendMedia = function(params){
			return Media.fetch(params).then(function(media){
				if(media.length === 0 || media.length < $scope.data.quantity){
					$scope.data.end = true;
				}

				angular.forEach(media, function(medium){
					$scope.data.media.push(medium);
				});
			});
		};

		$scope.loadMoreMedia = function(done, arg2, params){
			if($scope.data.end === false){
				$scope.appendMedia(params || {}).then(function(){
					(done || angular.noop)();
				});
			}else{
				(done || angular.noop)();
			}
		};

		$scope.addFavourite = function(medium){
			Settings.addFavourite(medium);
		};

		$scope.removeFavourite = function(medium){
			Settings.removeFavourite(medium);
		};

		$scope.consumeMedium = function(medium){
			Media.consume(medium);
			medium.consumed += 1;
			$scope.changeView(medium.url);
		};

		$ionicModal.fromTemplateUrl('partials/modals/view.tpl.html', function(modal){
			$scope.modal = modal;
		}, {
			scope: $scope,
			animation: 'slide-in-up'
		});

		$scope.changeView = function(url){
			$scope.url = url;
			if($scope.primaryViewVisible !== true){
				$scope.modalViewVisible = true;
				$scope.openModalView();
			}else{
				$scope.modalViewVisible = false;
			}
		};

		$scope.openModalView = function(){
			Cordova.preventSleep();
			$scope.modal.show();
		};

		$scope.closeModalView = function(){
			Cordova.allowSleep();
			$scope.modal.hide();
		};
	}]);