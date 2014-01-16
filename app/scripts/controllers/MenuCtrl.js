'use strict';

angular.module('newsApp.controllers')
	.controller('menuCtrl', ['$scope', function($scope){
		$scope.leftButtons = [{
			type: 'button-icon icon ion-navicon',
			tap: function(){
				$scope.sideMenuController.toggleLeft();
			}
		}];
	}]);