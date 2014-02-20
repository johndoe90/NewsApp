'use strict';

angular
	.module('newsApp.controllers')
	.controller('FavouritesCtrl', ['$scope', '$ionicActionSheet', 'Settings', 'Cordova', function($scope, $ionicActionSheet, Settings, Cordova){
		$scope.data.name = 'Favourites';
		$scope.data.media = Settings.settings.favourites;

		$scope.leftButtons = [{
			type: 'button-icon icon ion-navicon',
			tap: function(){
				Cordova.tick();
				$scope.sideMenuController.toggleLeft();
			}
		}];

		$scope.$on('showMediumActionSheet', function(event, arg){
			$ionicActionSheet.show({
				buttons: [
					{ text: 'remove from favourites' }
				],
				cancelText: 'cancel',

				cancel: function(){},
				buttonClicked: function(buttonIndex){
					switch(buttonIndex){
						case 0:
							Settings.removeFavourite(arg.medium);
							break;
					}

					return true;
				}
			});
		});

		$scope.mediumButtons = [
			{
				content: '<i class="icon ion-document-text"></i>lesen',
				tap: function(event, medium){
					event.stopPropagation();
					$scope.consumeMedium(medium);
				}
			},
			{
				content: '<i class="icon ion-trash-a"></i>entfernen',
				tap: function(event, medium){
					event.stopPropagation();
					$scope.removeFavourite(medium);
				}
			}
		];
	}]);