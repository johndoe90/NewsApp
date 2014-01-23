'use strict';

angular
	.module('newsApp.directives')
	.directive('pfModalView', [function(){
		return {
			restrict: 'AE',
			replace: true,
			template: '<div class="fp"><iframe ng-if="modalVisible" class="fp" ng-src="{{url}}"></iframe><div id="modalLoading" style="position: absolute; top: 50%; top: calc(50% - 32px); left: 50%; left: calc(50% - 32px); font-size: 32px;"><i class="ion-loading-d"></i></div></div>',
			scope: {
				modalVisible: '=',
				url: '='
			},
			link: function($scope, $element){
				$scope.$watch('url', function(){
					if($scope.modalVisible === true){
						$element.find('#modalLoading').show();
					}
				});

				$scope.$watch('modalVisible', function(){
					$element.find('iframe').bind('load', function(){
						$element.find('#modalLoading').hide();
					});
				});
			}
		};
	}]);