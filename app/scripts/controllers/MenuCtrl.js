'use strict';

angular.module('newsApp.controllers')
	.controller('MenuCtrl', ['$scope', 'Cordova', function($scope, Cordova){
		$scope.navClick = {
			action: function(){
				alert('clicked');
			}
		};

		$scope.leftButtons = [{
			type: 'button-icon icon ion-navicon',
			tap: function(){
				Cordova.tick();
				$scope.sideMenuController.toggleLeft();
			}
		}];

		$scope.$on('$stateChangeSuccess', function(){
			$scope.sideMenuController.close();
		});
	}]);