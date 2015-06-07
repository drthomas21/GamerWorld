var validator = require('validator');

module.exports = function(mongoose) {
	var emailValidation = [function(email){
		return validator.isEmail(email);
	}, "Please input a valid email"];
	var Schema = mongoose.Schema;
	
	var Users = mongoose.model("Users", new Schema({
		name:           String,
		email:          {type: String, validator: emailValidation},
		created:        {type: Date, default: Date.now},
		type:           {type: Number, default: 2}		
	}));
	
	return {
		create: function() {
			return new Users();
		}, 
		
		fetchAll: function(callback) {
			Users.find({},function(err,rows) {
				callback(err,rows);
			});
		},
		
		fetchById: function(id, callback) {
			Users.findById(id,function(err,rows) {
				callback(err,rows);
			});
		},
		
		search: function(args, callback) {
			Users.find(args,function(err,rows){
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