'use strict';

angular.module('newsApp.controllers')
	.controller('AppCtrl', ['$scope', '$ionicLoading', '$window', 'Settings', function($scope, $ionicLoading, $window, Settings){
		$window.addEventListener('beforeunload', function(){
			Settings.shutdown();
		});

		$scope.$on('$stateChangeStart', function(){
			$scope.showLoading();
		});

		$scope.$on('$stateChangeSuccess', function(){
			$scope.hideLoading();
		});

		$scope.showLoading = function(){
			console.log('started state change');
			$scope.loading = $ionicLoading.show({
				content: '<i class="ion-loading-d"></i>',
				animation: 'fade-in',
				showBackdrop: false,
				maxWidth: 200,
				showDelay: 500
			});
		};

		$scope.hideLoading = function(){
			if($scope.loading){
				$scope.loading.hide();
			}
		};
	}]);