'use strict';

angular.module('newsApp.filters')
	.filter('mediaFltr', ['Settings', 'Wtf', function(Settings, Wtf){
		return function(media, mediaFilterIndex){
			Wtf.temp.length = 0;

			console.log('Index: ' + mediaFilterIndex);

			var result = Wtf.temp;


			console.log('Result: ' + result);
			var mediaProviders = Settings.settings.mediaFilters[mediaFilterIndex].mediaProviders;
			var categories = Settings.settings.mediaFilters[mediaFilterIndex].categories;

			//console.log('MediaProviders: ' + mediaProviders);
			console.log('Categories: ' + categories);

			for(var i = 0; i < media.length; i++){
				if((mediaProviders.indexOf(media[i].mediaProvider.id) !== -1) && (categories.indexOf(media[i].category.id) !== -1)){
					result.push(media[i]);
				}
			}

			console.log(result);

			return result;
		};
	}]);