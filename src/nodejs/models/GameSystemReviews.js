module.exports = function(mongoose) {;
	var Schema = mongoose.Schema;
	
	var GameSystemReviews = mongoose.model("GameSystemReviews", new Schema({
		gameSystemId:     Schema.Types.ObjectId,
		userId:           Schema.Types.ObjectId,
		title:            String,
		rating:           Number,
		content:          String
	}));
	
	return {
		create: function() {
			return new GameSystemReviews();
		}, 
		
		fetchAll: function(callback) {
			GameSystemReviews.find({},function(err,rows) {
				callback(err,rows);
			});
		},
		
		fetchById: function(id, callback) {
			GameSystemReviews.findById(id,function(err,rows) {
				callback(err,rows);
			});
		},
		
		search: function(args, callback) {
			GameSystemReviews.find(args,function(err,rows){
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