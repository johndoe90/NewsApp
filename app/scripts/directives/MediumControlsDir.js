'use strict';

angular
	.module('newsApp.directives')
	.directive('pfMediumControls', ['Settings', function(Settings){
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: 'partials/directives/mediumControls.tpl.html',
			link: function($scope, $element){
				/*console.log($scope.mediumButtons);

				var $buttons = $element.find('.tab-item'),
				    $favourite = $buttons.eq(0),
				    $consume = $buttons.eq(1);



				$favourite.on('tap', function(e){
					e.stopPropagation();
					$scope.addFavourite($scope.medium);
					//Settings.addFavourite($scope.medium);
				});

				$consume.on('tap', function(e){
					e.stopPropagation();
					$scope.consumeMedium($scope.medium);
				});*/
			}
		};
	}]);