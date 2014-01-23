'use strict';

angular.module('newsApp.controllers')
	.controller('menuCtrl', ['$scope', 'Cordova', function($scope, Cordova){
		$scope.leftButtons = [{
			type: 'button-icon icon ion-navicon',
			tap: function(){
				Cordova.tick();
				$scope.sideMenuController.toggleLeft();
			}
		}];
	}]);