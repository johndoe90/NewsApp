'use strict';

angular.module('newsApp.controllers')
	.controller('MediaCtrl', ['$scope', 'Media', 'Settings', function($scope, Media, Settings){
		$scope.media = Media.media;
		$scope.mediaFilters = Settings.settings.filters;

		//does not work yet
		
		$scope.fetch = function(mediaFilterIndex){
			mediaFilterIndex = mediaFilterIndex || 0;
			Media.fetchAndInsert({
				'mediaProviders[]': Settings.settings.mediaFilters[mediaFilterIndex].mediaProviders,
				'categories[]': Settings.settings.mediaFilters[mediaFilterIndex].categories
			});
		};

		$scope.fetchBefore = function(mediaFilterIndex, firstMediumId){
			mediaFilterIndex = mediaFilterIndex || 0;
			firstMediumId = firstMediumId || 250;
			Media.fetchAndInsert({
				'mediaProviders[]': Settings.settings.mediaFilters[mediaFilterIndex].mediaProviders,
				'categories[]': Settings.settings.mediaFilters[mediaFilterIndex].categories,
				'first': firstMediumId
			});
		};
	}]);