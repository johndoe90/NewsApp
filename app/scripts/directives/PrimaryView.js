'use strict';

angular
	.module('newsApp.directives')
	.directive('pfPrimaryView', ['$window', function($window){
		return {
			restrict: 'AE',
			replace: true,
			template: '<div class="fp"><iframe ng-if="primaryVisible" class="fp" ng-src="{{url}}"></iframe><div id="primaryLoading" style="position: absolute; top: 50%; top: calc(50% - 32px); left: 50%; left: calc(50% - 32px); font-size: 32px;"><i class="ion-loading-d"></i></div></div>',
			scope: {
				primaryVisible: '=',
				url: '='
			},
			link: function($scope, $element){
				var isVisible = function(){
					if($element.is(':visible')){
						$scope.primaryVisible = true;
					}else{
						$scope.primaryVisible = false;
					}
				};

				$scope.$watch('url', function(){
					if($scope.primaryVisible === true){
						$element.find('#primaryLoading').show();
					}
				});

				$scope.$watch('primaryVisible', function(){
					$element.find('iframe').bind('load', function(){
						$element.find('#primaryLoading').hide();
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