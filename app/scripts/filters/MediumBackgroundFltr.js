'use strict';

angular
	.module('newsApp.filters')
	.filter('mediumBackground',['MediaProviders', function(MediaProviders){
		return function(mediaProviderId){
			var mediaProviders = MediaProviders.mediaProviders;
			for(var i = mediaProviders.length - 1; i >= 0; i -= 1){
				if(mediaProviders[i].id === mediaProviderId){
					return { 'background-color' : 'hsla(' + ((i * 60) % 360) + ', 100%, 50%, 0.08)' };
				}
			}
		};
	}]);