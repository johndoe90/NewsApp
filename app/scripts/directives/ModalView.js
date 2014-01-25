'use strict';

angular
	.module('newsApp.directives')
	.directive('pfModalView', [function(){
		return {
			restrict: 'AE',
			replace: true,
			template: '<div class="fp"><iframe ng-if="modalViewVisible" class="fp" ng-src="{{url}}"></iframe><div id="modalViewLoading" style="position: absolute; top: 50%; top: calc(50% - 32px); left: 50%; left: calc(50% - 32px); font-size: 32px;"><i class="ion-loading-d"></i></div></div>',
			scope: {
				modalViewVisible: '=',
				url: '='
			},
			link: function($scope, $element){
				$scope.$watch('url', function(){
					if($scope.modalViewVisible === true){
						$element.find('#modalViewLoading').show();
					}
				});

				$scope.$watch('modalViewVisible', function(){
					$element.find('iframe').bind('load', function(){
						$element.find('#modalViewLoading').hide();
					});
				});
			}
		};
	}]);