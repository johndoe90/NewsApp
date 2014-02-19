'use strict';

angular
	.module('newsApp.directives')
	.directive('pfView', ['$window', function($window){
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'partials/directives/view.tpl.html',
			scope: {
				visible: '=',
				url: '='
			},
			link: function($scope, $element){
				var isVisible = function(){
					if($element.is(':visible')){
						$scope.visible = true;
					}else{
						$scope.visible = false;
					}
				};

				$scope.$watch('url', function(){
					console.log($scope.visible);
					if($scope.visible === true){
						$element.find('#loading').show();
					}
				});

				$scope.$watch('visible', function(){
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