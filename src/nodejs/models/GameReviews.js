module.exports = function(mongoose) {;
	var Schema = mongoose.Schema;
	
	var GameReviews = mongoose.model("GameReviews", new Schema({
		gameId:     Schema.Types.ObjectId,
		userId:     Schema.Types.ObjectId,
		title:      String,
		rating:     Number,
		content:    String
	}));
	
	return {
		create: function() {
			return new GameReviews();
		}, 
		
		fetchAll: function(callback) {
			GameReviews.find({},function(err,rows) {
				callback(err,rows);
			});
		},
		
		fetchById: function(id, callback) {
			GameReviews.findById(id,function(err,rows) {
				callback(err,rows);
			});
		},
		
		search: function(args, callback) {
			GameReviews.find(args,function(err,rows){
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