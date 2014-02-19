'use strict';

angular
	.module('newsApp.filters')
	.filter('mediumDate', [function(){
		return function(timestamp){
      var now = new Date();
      var then = new Date(timestamp);
      if(now.getDate() === then.getDate() && now.getMonth() === then.getMonth() && now.getFullYear() === then.getFullYear()){
        return then.getHours() + ':' + ('0' + then.getMinutes()).slice(-2);
      }else{
        return then.getDate() + '.' + ('0' + (then.getMonth() + 1)).slice(-2);
      }
		};
	}]);