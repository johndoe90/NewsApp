'use strict';

angular
	.module('newsApp.directives')
	.directive('pfPrimaryView', ['$window', 'Cordova', function($window, Cordova){
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'partials/directives/primaryView.tpl.html',
			scope: {
				primaryViewVisible: '=',
				url: '='
			},
			link: function($scope, $element){
				var isVisible = function(){
					if($element.is(':visible')){
						Cordova.preventSleep();
						$scope.primaryViewVisible = true;
					}else{
						Cordova.allowSleep();
						$scope.primaryViewVisible = false;
					}
				};

				$scope.$watch('url', function(){
					if($scope.primaryViewVisible === true){
						$element.find('#loading').show();
					}
				});

				$scope.$watch('primaryViewVisible', function(){
					$element.find('iframe').bind('load', function(){
						$element.find('#loading').hide();
					});

					angular.element($window).bind('resize', function(){
						$scope.$apply(function(){
							isVisible();
						});
					});
				});

				isVisible();
			}
		};
	}]);