module.exports = function(server,mongoose,ResponseClass,config) {
	var cors = require('cors');
	var sha256 = require('sha256');
	var Users = require('../models/Users.js')(mongoose);
	var Profiles = require('../models/Profiles.js')(mongoose);
	var AccountType = require('../models/AccountType.js')();
	var generateToken = function(Model, req) {
		return sha256(Model.email + req.connection.remoteAddress + (Model.tokenDate));
	}
	
	/**
	 * @url /profile/:id
	 * @method post
	 * @param string id
	 * @param string token
	 */
	server.post('/profile/:id',cors({origin: config.express.allowedDomain}),function(req,res) {
		var userId = req.body.id;
		var userToken = req.body.token;
		var id = req.params.id;
		var Response = new ResponseClass();
		
		if(typeof(userId) == "string" && userId.length > 0 && typeof(userToken) == "string" && userToken.length > 0) {
			Users.fetchById(userId,function(err,User) {
				if(!err) {
					if(User && User.token == userToken && Users.auth(User,req)) {
						Profiles.search({userId: id}, function(error, Model) {
							if(!err) {
								//Creating Profile
								if(!Model || Model.length == 0) {
									//Verify that the user exists
									Users.fetchById(id,function(err,User) {
										if(!err && User) {
											Profile = Profiles.create();
											Profile.userId = id;
											Profile.displayName = User.name;
											Profile.save(function(err,Item) {
												if(!err) {
													Response.okay();
													Response.setData(Item);
													res.json(Response.get());
												} else {
													Response.notOkay();
													Response.addError(err);
													res.json(Response.get());
												}
											});
										} else {
											Response.notOkay();
											Response.addError(err);
											res.json(Response.get());
										}
									});
								} else {
									Model = Model[0];
									//Retreive user profile									
									if(Model.userId != userId) {
										//Remove more personal data from the model
										//TODO: go through privacy filters
										Model.friendIds = [];
										Model.followerIds = [];
										
										Response.okay();
										Response.setData(Model);
										res.json(Response.get());
									} else {
										Response.okay();
										Response.setData(Model);
										res.json(Response.get());
									}
								}
							} else {
								Response.notOkay();
								Response.addError(err);
								res.json(Response.get());
							}
						});
					} else {
						Response.notOkay();
						Response.addError("User failed authentication");
						res.json(Response.get());
					}
				} else {
					Response.notOkay();
					Response.addError(err);
					res.json(Response.get());
				}
			});
		} else {
			Response.notOkay();
			Response.addError("Missing request arugments");
			res.json(Response.get());
		}
	});
	
	//server.post('/profile/:id/timeline')
};