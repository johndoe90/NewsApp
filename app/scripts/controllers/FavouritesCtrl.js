'use strict';

angular
	.module('newsApp.controllers')
	.controller('FavouritesCtrl', ['$scope', 'Settings', function($scope, Settings){
		$scope.data.media = Settings.settings.favourites;
	}]);