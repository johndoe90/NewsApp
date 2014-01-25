'use strict';

angular
	.module('newsApp.directives')
	.directive('pfPrimaryView', ['$window', function($window){
		return {
			restrict: 'AE',
			replace: true,
			template: '<div class="fp"><iframe ng-if="primaryViewVisible" class="fp" ng-src="{{url}}"></iframe><div id="primaryViewLoading" style="position: absolute; top: 50%; top: calc(50% - 32px); left: 50%; left: calc(50% - 32px); font-size: 32px;"><i class="ion-loading-d"></i></div></div>',
			scope: {
				primaryViewVisible: '=',
				url: '='
			},
			link: function($scope, $element){
				var isVisible = function(){
					if($element.is(':visible')){
						$scope.primaryViewVisible = true;
					}else{
						$scope.primaryViewVisible = false;
					}
				};

				$scope.$watch('url', function(){
					if($scope.primaryViewVisible === true){
						$element.find('#primaryViewLoading').show();
					}
				});

				$scope.$watch('primaryViewVisible', function(){
					$element.find('iframe').bind('load', function(){
						$element.find('#primaryViewLoading').hide();
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