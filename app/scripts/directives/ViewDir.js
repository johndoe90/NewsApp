'use strict';

angular
	.module('newsApp.directives')
	.directive('pfView', ['$window', function($window){
		return {
			restrict: 'AE',
			replace: true,
			//templateUrl: 'views/view.tpl.html',
			template: '<div class="fp"><iframe ng-if="visible" class="fp" ng-src="{{url}}"></iframe><div id="loading" style="position: absolute; top: 50%; top: calc(50% - 32px); left: 50%; left: calc(50% - 32px); font-size: 32px;"><i class="ion-loading-d"></i></div></div>',
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
						//$scope.url21 = $scope.url;

						console.log($scope.visible);
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

				/*$element.find('iframe').bind('load', function(){
					$element.find('#loading').hide();
				});

				angular.element($window).bind('resize', function(){
					$scope.$apply(function(){
						isVisible();
					});
				});*/

				isVisible();
			}
		};
	}]);