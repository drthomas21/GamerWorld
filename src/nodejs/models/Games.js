module.exports = function(mongoose) {;
	var Schema = mongoose.Schema;
	
	var Games = mongoose.model("Games", new Schema({
		name:           String,
		systems:        [Schema.Types.ObjectId]		
	}));
	
	return {
		create: function() {
			return new Games();
		}, 
		
		fetchAll: function(callback) {
			Games.find({},function(err,rows) {
				callback(err,rows);
			});
		},
		
		fetchById: function(id, callback) {
			Games.findById(id,function(err,rows) {
				callback(err,rows);
			});
		},
		
		search: function(args, callback) {
			Games.find(args,function(err,rows){
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