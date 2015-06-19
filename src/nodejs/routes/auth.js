module.exports = function(server,mongoose,ResponseClass,config) {
	var cors = require('cors');
	var sha256 = require('sha256');
	var Users = require('../models/Users.js')(mongoose);
	var AccountType = require('../models/AccountType.js')();
	var generateToken = function(req) {
		return sha256(req.body.email + req.connection.remoteAddress + (new Date()));
	}
	
	/**
	 * @url /auth/validate
	 * @method GET
	 * @param string rpz_auth_user
	 * @param string rpz_auth_token
	 */
	server.get('/auth/validate',function(req,res) {
		
	});
	
	/**
	 * @url /auth/signup
	 * @method POST
	 * @param string email
	 * @param string password
	 */
	server.post('/auth/signup',cors({origin: config.express.allowedDomain}), function(req,res) {
		var email = req.body.email;
		var password = sha256.x2(req.body.password);
		var Response = new ResponseClass();
		
		if(typeof(req.body.email) == "string" && req.body.email.length > 0 && typeof(req.body.password) == "string" && req.body.password.length > 0) {
			Users.search({email: req.body.email},function(err,items) {
				if(items.length == 0) {
					Model = Users.create();
					Model.email = email;
					Model.password = password;
					Model.token = generateToken(req);
					Model.save(function(error,Instance) {
						if(error) {
							Response.notOkay();
							Response.addError(error);
						} else {
							Response.okay();
							Instance.password = "Haha, i won't show your password";
							Response.setData(Instance);
						}
						res.json(Response.get());
					});
				} else {
					Response.notOkay();
					Response.addError("Email address is already registered");
					res.json(Response.get());
				}
			});
		} else {
			Response.notOkay();
			if(typeof(req.body.email) != "string" || req.body.email.length == 0) {
				Response.addError("Please input an email address");
			}
			
			if(typeof(req.body.password) != "string" || req.body.password.length == 0) {
				Response.addError("Please input a password");
			}
			res.json(Response.get());
		}		
	});
	
	/**
	 * @url /auth/login
	 * @method PUT
	 * @param string email
	 * @param string password
	 */
	server.put('/auth/login',cors({origin: config.express.allowedDomain}), function(req,res) {
		var email = req.body.email;
		var password = sha256.x2(req.body.password);
		var Response = new ResponseClass();
		
		if(typeof(req.body.email) == "string" && req.body.email.length > 0 && typeof(req.body.password) == "string" && req.body.password.length > 0) {
			Users.search({email: req.body.email},function(err,items) {
				if(items.length > 0) {
					if(items.length > 1) {
						console.log("something is not right, we have more than one users with the email: " + req.body.email);
					}
					
					var Model = null;
					items.forEach(function(item) {
						if(item.password == password) {
							Model = item;
						}
					});
					
					if(Model != null) {
						Model.token = Model.token = generateToken(req);
						Model.save(function(error,Instance) {
							if(error) {
								Response.notOkay();
								Response.addError(error);
							} else {
								Response.okay();
								Instance.password = "Haha, i won't show your password";
								Response.setData(Instance);
							}
							
						});
					} else {
						Response.notOkay();
						Response.addError("Invalid email/password");
						res.json(Response.get());
					}
					
				} else {
					Response.notOkay();
					Response.addError("Invalid email/password");
					res.json(Response.get());
				}
			});
		} else {
			Response.notOkay();
			if(typeof(req.body.email) != "string" || req.body.email.length == 0) {
				Response.addError("Please input an email address");
			}
			
			if(typeof(req.body.password) != "string" || req.body.password.length == 0) {
				Response.addError("Please input a password");
			}
			res.json(Response.get());
		}		
	});
};