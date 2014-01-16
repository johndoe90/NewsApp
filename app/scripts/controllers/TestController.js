'use strict';

angular.module('newsApp.controllers')
	.controller('testController', ['$scope', function($scope){
		$scope.headerTitle = 'Das ist der Titel';
		$scope.leftButtons = [
			{
				type: 'button-positive',
				content: '<i class="icon ion-navicon"></i>',
				tap: function(){
					$scope.sideMenuController.toggleLeft();
				}
			}
		];

		$scope.orders = ['OrderA', 'OrderB', 'OrderC', 'OrderD', 'OrderE', 'OrderF', 'OrderG'];

		$scope.loadMore = function(){
			window.alert('Load More');
		};
	}]);