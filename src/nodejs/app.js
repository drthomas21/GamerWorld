//Load configurations and dependencies
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var os = require('os');
var ifaces = os.networkInterfaces();

var isProd = false;
Object.keys(ifaces).forEach(function (ifname) {
	var alias = 0;

	ifaces[ifname].forEach(function (iface) {
		if ('IPv4' !== iface.family || iface.internal !== false) {
			// skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
			return;
		}

		if(iface.address == "104.236.172.4") {
			isProd = true;
		}
	});
});

if(isProd) {
	var config = require("./config/prod.config.json");
} else {
	var config = require("./config/dev.config.json");
}

//Connect to Mongo DB
mongoose.connect('mongodb://'+config.mongodb.host+"/"+config.mongodb.database,{
	db: {native_parser: true},
	user: config.mongodb.username,
	pass: config.mongodb.password
});
var db = mongoose.connection;
db.on('error',function(err) {
	console.log(err);
	process.exit(1);
});

//Create Response Object
var ResponseClass = function() {
	var ok = true;
	var data = {};
	var errors = [];
	
	this.okay = function() {
		ok = true;
	};
	
	this.notOkay = function() {
		ok = false;
	};
	
	this.setData = function(_data) {
		data = _data;
	};
	
	this.addError = function(error) {
		errors.push(error);
	};
	
	this.get = function() {
		return {
			ok: ok,
			data: data,
			errors: errors
		};
	}
}

//Create Server and configure server
var server = express();
server.use(bodyParser.json());
//CORS
server.options('*',cors({origin: config.express.allowedDomain}));
require('./routes/auth')(server,mongoose,ResponseClass,config);

//Start server
server.listen(config.express.port,function() {
	console.log("Server is listening on port: " + config.express.port);
});