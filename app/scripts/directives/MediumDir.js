'use strict';

angular.module('newsApp.directives')
	.directive('pfMedium', [function(){
		return {
			restrict: 'AE',
			templateUrl: 'partials/directives/medium.tpl.html',
			scope: {
				medium: '=',
				consumeMedium: '=',
				addFavourite: '=',
				mediumButtons: '='
			},
			link: function($scope, $element){
				$scope.controls = false;
				var before, after, expanded = false;

				$element.on('tap', function(){
					if(expanded){
						expanded = false;
						$element.animate({height: before + 'px'}, 300, function(){
							$scope.$apply(function(){	$scope.controls = false; });
						});
					}else{
						expanded = true;
						before = $element.outerHeight();
						$scope.$apply(function(){ $scope.controls = true; });
						after = $element.css({height: 'auto'}).outerHeight();
						$element.css({height: before + 'px'}).animate({height: after + 'px'}, 300);
					}
				});
			}
		};
	}]);