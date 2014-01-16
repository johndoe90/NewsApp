'use strict';

angular.module('newsApp.services')
	.factory('Media', ['MediaRepo', function(MediaRepo){
		return {
			media: [],

			fetch: function(params){
				return MediaRepo.query(params);
			},

			consume: function(id){
				return MediaRepo.post('/' + id + '/consume', {});
			},

			indexOf: function(id){
				for(var i = 0; i < this.media.length; i++){
					if(id === this.media[i].id){
						return i;
					}
				}

				return -1;
			},

			insert: function(data){
				var media = angular.isArray(data) ? data : [data];
				angular.forEach(media, function(medium){
					var inserted = false;
					if(this.indexOfMedium(medium) === -1){
						for(var i = 0; i < this.media.length; i++){
							if(medium.date > this.media[i].date){
								inserted = true;
								this.media.splice(i, 0, medium);
								break;
							}else if(medium.date === this.media[i].date){
								if(medium.id > this.media[i].id){
									inserted = true;
									this.media.splice(i, 0, medium);
									break;
								}
							}
						}

						if(!inserted){
							this.media.push(medium);
			      }
					}
				});
			}
		};


		/*function MediaServ(){
			this.media = [];
		}

		MediaServ.prototype.fetch = function(params){
			return mediaRepo.query(params);
		};

		MediaServ.prototype.fetchAndInsert = function(params){
			var self = this;
			return mediaRepo
				.query(params)
				.then(function(media){
					self.insertMedia(media);
				});
		};*/

		/*MediaServ.prototype.fetch = function(mediaFilterIndex){
			var self = this;
			return mediaRepo
				.query({
					'mediaProviders[]': settingsServ.settings.mediaFilters[mediaFilterIndex].mediaProviders,
					'categories[]': settingsServ.settings.mediaFilters[mediaFilterIndex].categories
				}).then(function(media){
					self.insertMedia(media);
				});
		};

		MediaServ.prototype.fetchAfter = function(params){
			var self = this;
			return mediaRepo
				.query(params)
				.then(function(data){
					angular.forEach(data, function(medium){
						//self.media.splice(0,  0, value);
						self.insertMedium(medium);
					});
				});
		};

		MediaServ.prototype.fetchBefore = function(params){
			var self = this;
			return mediaRepo
				.query(params)
				.then(function(data){
					angular.forEach(data, function(medium){
						//self.media.push(value);
						self.insertMedium(medium);
					});
				});
		};*/

		/*MediaServ.prototype.indexOfMedium = function(medium){
			for(var i = 0; i < this.media.length; i++){
				if(medium.id === this.media[i].id){
					return i;
				}
			}

			return -1;
		};

		MediaServ.prototype.insertMedia = function(media){
			var self = this;
			angular.forEach(media, function(medium){
				self.insertMedium(medium);
			});
		};

		//start looking from behind since its more likely to scroll down ie find newer articles
		MediaServ.prototype.insertMedium = function(medium){
			var inserted = false;
			if(this.indexOfMedium(medium) === -1){
				for(var i = 0; i < this.media.length; i++){
					if(medium.date > this.media[i].date){
						inserted = true;
						this.media.splice(i, 0, medium);
						break;
					}else if(medium.date === this.media[i].date){
						if(medium.id > this.media[i].id){
							inserted = true;
							this.media.splice(i, 0, medium);
							break;
						}
					}
				}

				if(!inserted){
					this.media.push(medium);
	      }
			}
		};

		MediaServ.prototype.consume = function(medium){
			return mediaRepo.post('/' + medium.id + '/consume', {});
		};

		return new MediaServ();*/
	}]);