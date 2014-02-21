'use strict';

angular.module('newsApp.directives')
	.directive('pfSearchBox', [function(){
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'partials/directives/searchBox.tpl.html',
			link: function($scope, $element){
				$element.on('keydown', function(event){
					/*$scope.$apply(function(){
						$scope.data.searchField = $element.val();
						if(event.keyCode === 13){
							$scope.searchMedia();
							$element.blur();
						}
					});*/

					if(event.keyCode === 13){
						$scope.$apply(function(){
							$element.blur();
							$scope.searchMedia();
							//$element.blur();
						});
					}
				});
			}
		};
	}]);