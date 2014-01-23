'use strict';

angular
	.module('newsApp.controllers')
	.controller('ViewCtrl', ['$scope', '$window', '$state', '$stateParams', '$ionicModal', function($scope, $window, $state, $stateParams, $ionicModal){
		/*$scope.url = $stateParams.url || 'http://10.0.0.38:8080/news/';

		$scope.visible = false;
		$scope.modalVisible = true;

		$scope.$watch('visible', function(){
			console.log('change');
		});

		$scope.$on('changeView', function(event, data){
			$scope.url = data.url;
			//console.log($scope.visible);
			if($scope.visible !== true){
				console.log('show modal');
				$scope.modal.show();
			}
		});

		//simply insert modal here
		$ionicModal.fromTemplateUrl('views/view2.tpl.html', function(modal){
			$scope.modal = modal;
		}, {
			scope: $scope,
			animation: 'slide-in-up'
		});

		$scope.openModal = function(){
			$scope.modal.show();
		};

		$scope.closeModal = function(){
			$scope.modal.hide();
		};*/
		$scope.url = 'http://10.0.0.38:8080/news/';
		$scope.modalVisible = false;
		$scope.primaryVisible = false;

		$scope.$on('changeView', function(event, data){
			$scope.url = data.url;
			if($scope.primaryVisible !== true){
				$scope.modalVisible = true;
				$scope.openModal();
			}else{
				$scope.modalVisible = false;
			}
		});

		$ionicModal.fromTemplateUrl('views/view2.tpl.html', function(modal){
			$scope.modal = modal;
		}, {
			scope: $scope,
			animation: 'slide-in-up'
		});

		$scope.openModal = function(){
			$scope.modal.show();
		};

		$scope.closeModal = function(){
			$scope.modal.hide();
		};

	}]);