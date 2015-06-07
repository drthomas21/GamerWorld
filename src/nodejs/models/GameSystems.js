module.exports = function(mongoose) {;
	var Schema = mongoose.Schema;
	
	var GameSystems = mongoose.model("GameSystems", new Schema({
		name:           String,	
	}));
	
	return {
		create: function() {
			return new GameSystems();
		}, 
		
		fetchAll: function(callback) {
			GameSystems.find({},function(err,rows) {
				callback(err,rows);
			});
		},
		
		fetchById: function(id, callback) {
			GameSystems.findById(id,function(err,rows) {
				callback(err,rows);
			});
		},
		
		search: function(args, callback) {
			GameSystems.find(args,function(err,rows){
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