'use strict';

angular.module('newsApp.controllers')
	.controller('ThreadCtrl', ['$scope', '$state', '$stateParams', 'Threads', function($scope, $state, $stateParams, Threads){
		var threadIndex = parseInt($stateParams.index);
		$scope.thread = Threads.threads[$stateParams.index];

		$scope.consume = function(mediumIndex){
			Threads.consume(threadIndex, mediumIndex).then(function(){
				console.log('consumed');
			});
		};

		$scope.load = function(done){
			console.log('LOAD');
			Threads.load(threadIndex).then(function(){
				(done || angular.noop)();
			});
		};

		var goToThread = function(next){
			$state.go('navigation.threads', {index: next});
		};

		$scope.goToNextThread = function(){
			goToThread(threadIndex < (Threads.threads.length - 1) ? (threadIndex + 1) : 0);
		};

		$scope.goToPrevThread = function(){
			goToThread(threadIndex > 0 ? (threadIndex - 1) : (Threads.threads.length - 1));
		};

		$scope.refresh= function(){
			console.log('refresh');
		};
	}]);