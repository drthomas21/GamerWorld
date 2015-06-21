var validator = require('validator');
var sha256 = require('sha256');
var generateToken = function(Model,req) {
	return sha256(Model.email + req.connection.remoteAddress + (Model.tokenDate));
};
var emailValidation = [function(email){
	return validator.isEmail(email);
}, "Please input a valid email"];
var Users = null;
module.exports = function(mongoose) {
	if(Users == null) {
		var Schema = mongoose.Schema;
		
		Users = mongoose.model("Users", new Schema({
			name:           {type: String, default: "New User"},
			email:          {type: String, validator: emailValidation, lowercase: true, unique: true},
			password:		{type: String, minlength: [5,"The {PATH} has less than {MINLENGTH} characters"]},
			token:			{type: String, default: ''},
			created:        {type: Date, default: Date.now},
			type:           {type: Number, default: 2},
			tokenDate:		{type: Date, default: Date.now}
		}));
	}
	
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
					callback(err, Model);
				} else {
					callback(null, Model);
				}
			});
		},
		
		auth: function(Model, req) {
			return Model.token == generateToken(Model,req);
		}
	};
}