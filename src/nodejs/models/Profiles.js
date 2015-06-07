var GamerTags = require('GamerTags.js');

module.exports = function(mongoose) {
	var imagePathValidator = [function(path){
		//TODO: flush out image path validation
		return true;
	}, "Image does not exists"];
	
	var Schema = mongoose.Schema;
	
	var Profiles = mongoose.model("Profiles", new Schema({
		userId:			Schema.Types.ObjectId,
		gamerTags:      [GamerTags],
		friendIds:		[Schema.Types.ObjectId],
		follwerIds:		[Schema.Types.ObjectId],
		displayName:	String,
		profileImage:	{type: String, validator: imagePathValidator},
		description:    String
	}));
	
	return {
		create: function() {
			return new Profiles();
		}, 
		
		fetchAll: function(callback) {
			Profiles.find({},function(err,rows) {
				callback(err,rows);
			});
		},
		
		fetchById: function(id, callback) {
			Profiles.findById(id,function(err,rows) {
				callback(err,rows);
			});
		},
		
		search: function(args, callback) {
			Profiles.find(args,function(err,rows){
				callback(err,rows);
			});
		},
		
		save: function(instance, callback) {
			instance.save(function(err,Model) {
				if(err) {
					callback('There was an issue with saving', Model);
				} else {
					callback(null, Model);
				}
			});
		}
	};
}