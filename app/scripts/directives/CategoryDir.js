'use strict';

angular
	.module('newsApp.directives')
	.directive('pfCategory', [function(){
		return {
			restrict: 'AE',
			replace: true,
			scope: {

			},
			template: '<li class="item item-checkbox"><label class="checkbox"><input type="checkbox" ng-click="clicked()" ng-model="included" ng-init="included = in(category, thread.filter.categories)" ></label>{{category.name}}</li>',
			link: function(){
				
			}
		};
	}]);