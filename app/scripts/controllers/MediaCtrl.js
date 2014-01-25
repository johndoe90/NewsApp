'use strict';

angular.module('newsApp.controllers')
	.controller('MediaCtrl', ['$scope', '$ionicModal', 'Media', function($scope, $ionicModal, Media){
		$scope.modalViewVisible = false;
		$scope.primaryViewVisible = false;
		$scope.url = 'http://10.0.0.38:8080/news';

		$scope.data = {
			end: false,
			media: [],
			quantity: 10,
			categories: [],
			mediaProviders: []
		};

		$scope.prependMedia = function(params){
			params = angular.extend({
				'categories[]': $scope.data.categories,
				'mediaProviders[]': $scope.data.mediaProviders,
				'quantity': $scope.data.quantity,
				'last': $scope.data.media[0].id
			}, params || {});

			return Media.fetch(params).then(function(media){
				angular.forEach(media, function(medium){
					$scope.data.media.splice(0, 0, medium);
				});
			});
		};

		$scope.appendMedia = function(params){
			params = angular.extend({
				'categories[]': $scope.data.categories,
				'mediaProviders[]': $scope.data.mediaProviders,
				'quantity': $scope.data.quantity
			}, params || {});
			params = $scope.data.media.length > 0 ? angular.extend({'first': $scope.data.media[$scope.data.media.length - 1].id}, params) : params;

			return Media.fetch(params).then(function(media){
				if(media.length === 0){
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
			$scope.modal.show();
		};

		$scope.closeModalView = function(){
			$scope.modal.hide();
		};
	}]);