module.exports = function() {
	var SocialAPIs = function(id,name,type,url) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.apiUrl = url;
	}
	var list = [];

	list.push(new SocialAPIs(0,"Steam","game")); // https://developer.valvesoftware.com/wiki/Steam_Web_API
	list.push(new SocialAPIs(1,"PSN","game")); // https://psnapi.codeplex.com/
	list.push(new SocialAPIs(2,"Xbox Live","game")); // https://xboxapi.com/
	
	list.push(new SocialAPIs(3,"Facebook","social")); // https://developers.facebook.com/
	list.push(new SocialAPIs(4,"Twitter","social")); // https://dev.twitter.com/overview/documentation
	
	list.push(new SocialAPIs(5,"YouTube","media")); // https://developers.google.com/youtube/
	list.push(new SocialAPIs(6,"Twitch","media")); // https://github.com/justintv/twitch-api

	return list;
}