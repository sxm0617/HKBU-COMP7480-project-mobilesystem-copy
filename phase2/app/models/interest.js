exports.definition = {
	config: {
		"columns": {
	        "id":"INTEGER PRIMARY KEY",	        
	        "title":"TEXT", 
	        "district": "TEXT",
	        "image":"TEXT",        
	        "area": "INTEGER",
	        "bedroom": "INTEGER",
	        "lift": "TEXT",
	        "guard": "TEXT",
	        "price": "INTEGER",
	        "highlight": "TEXT"
	    },
	    
	    "URL": "http://158.182.109.38:1337/user/interestedHouse",
	    
	    
	    "debug": 1,

		adapter: {
			type: "sqlrest",
			collection_name: "interest",
			"idAttribute" : "id",
			
			"addModifedToUrl": true,
        	"lastModifiedColumn": "modified"
		},
		
		 "deleteAllOnFetch": true
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};