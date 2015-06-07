var ClanMembers = require('ClanMembers.js');

module.exports = function(mongoose) {;
	var Schema = mongoose.Schema;
	
	var Clans = mongoose.model("Clans", new Schema({
		gameId:         Schema.Types.ObjectId,
		name:           String,	
		creator:        Schema.Types.ObjectId,
		members:        [ClanMembers],
		content:        String
	}));
	
	return {
		create: function() {
			return new Clans();
		}, 
		
		fetchAll: function(callback) {
			Clans.find({},function(err,rows) {
				callback(err,rows);
			});
		},
		
		fetchById: function(id, callback) {
			Clans.findById(id,function(err,rows) {
				callback(err,rows);
			});
		},
		
		search: function(args, callback) {
			Clans.find(args,function(err,rows){
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