'use strict';

angular
	.module('newsApp.filters')
	.filter('mediumDate', [function(){
		return function(timestamp){
			var diff = Math.round((new Date().getTime() - timestamp) / 1000);
      if(diff < 3600) {
        return 'vor ' + Math.floor(diff / 60) + 'm';
      }else if(diff < 86400){
        return 'vor ' + Math.floor(diff / 3600) + 'h';
      }else{
        return 'alt';
      }
		};
	}]);