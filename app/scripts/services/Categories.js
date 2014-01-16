'use strict';

angular.module('newsApp.services')
	.factory('Categories', ['$q', 'CategoryRepo', function($q, CategoryRepo){
		var initialized = false;
		var initializeDefer = $q.defer();

		return {
			categories: [],

			initialize: function(){
				var self = this;
				if(!initialized){
					initialized = true;
					this.fetch({}).then(function(data){
						angular.forEach(data, function(value){
							self.categories.push(value);
						});

						console.log('Categories initialized');
						initializeDefer.resolve();
					});
				}

				return initializeDefer.promise;
			},

			fetch: function(params){
				return CategoryRepo.query(params);
			},

			get: function(id){
				for(var i = 0; i < this.categories.length; i++){
					if(this.categories[i].id === id){
						return this.categories[i];
					}
				}
			},

			children: function(id){
				var children = [];
				var category = this.get(id);
		    for(var i = 0; i < this.categories.length; i++){
		      if(this.categories[i].sort.indexOf(category.sort) === 0){
		        children.push(this.categories[i].id);
		      }
		    }

				return children;
			}
		};

		/*function CategoryServ(){
			this.categories = [];
			var self = this;
			var initialized = false;
			var initializeDefer = $q.defer();

			this.initialize = function(){
				if(!initialized){
					initialized = true;
					this.fetchCategories({}).then(function(data){
						angular.forEach(data, function(value){
							self.categories.push(value);
						});

						initializeDefer.resolve();
					});
				}

				return initializeDefer.promise;
			};
		}

		CategoryServ.prototype.fetchCategories = function(params){
			return categoryRepo.query(params);
		};

		CategoryServ.prototype.getCategory = function(categoryId){
      for(var i = 0; i < this.categories.length; i++){
        if(this.categories[i].id === categoryId){
          return this.categories[i];
        }
      }
    };

    CategoryServ.prototype.childrenOf = function(category){
      var children = [];
      for(var i = 0; i < this.categories.length; i++){
        if(this.categories[i].sort.indexOf(category.sort) === 0){
          children.push(this.categories[i].id);
        }
      }

      return children;
    };

		return new CategoryServ();*/
	}]);
	