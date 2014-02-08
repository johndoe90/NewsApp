'use strict';

angular
	.module('newsApp.directives')
	.directive('pfCategories', [function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/directives/categories.tpl.html'

			/*restrict: 'AE',
			replace: true,
			scope: {
				thread: '='
			},
			template: '<li class="item item-checkbox" ng-repeat="category in categories"><label class="checkbox"><input type="checkbox" ng-click="toggleCategory($index, include)" ng-model="include" ng-init="include = (category.id | in : thread.filter.categories)" ></label>{{category.name}}</li>',
			link: function($scope){
				$scope.categories = Categories.categories;

				$scope.toggleCategory = function(index, include){
					include = !include;

					console.log('include: ' + include);

					var id = Categories.categories[index].id;

					console.log('id: ' + id);

					var indexOf = $scope.thread.filter.categories.indexOf(id);

					console.log('indexOf: ' + indexOf);

					if(include === true){
						if(indexOf === -1){
							$scope.thread.filter.categories.push(id);
						}
					}else{
						if(indexOf !== -1){
							$scope.thread.filter.categories.splice(indexOf, 1);
						}
					}
				};
			}*/
		};
	}]);