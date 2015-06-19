(function() {
	var Instance = null;
	
	app.factory("AuthRestfulService",['$cookies','$rootScope','RestfulService',function($cookies,$rootScope,RestfulService){
		if(Instance == null) {
			var userCookie = "rpz_auth_user";
			var tokenCookie = "rpz_auth_token";
			
			var AuthRestfulService = function() {
				var service = "auth/";
				this.checkLogin = function(callback) {
					var args = {
							id: $cookies[userCookie],
							token: $cookies[tokenCookie]
					};
					RestfulService.post(service+'validate',args,function(data){
						//SuccessCb
						if(typeof(callback) == "function") {
							callback(data);
						}
					}, function(data) {
						//ErrorCb
						console.log(data);
					});
				};
				
				this.storeCreds = function(UserModel) {
					$cookies[userCookie] = UserModel._id;
					$cookies[tokenCookie] = UserModel.token;
					that.checkLogin(function(resp){
						if(resp.ok) {
							$rootScope.$broadcast("isUserAuth",resp.data);
						}
					})
				};
				
				this.releaseCreds = function() {
					delete $cookies[userCookie];
					delete $cookies[tokenCookie];
				}
				
				this.doSignup = function(email, password, callback) {
					var args = {
							email: email,
							password: password
					};
					RestfulService.post(service+"signup",args,function(data) {
						//SuccessCb
						if(typeof(callback) == "function") {
							callback(data);
						}
					}, function(data) {
						//ErrorCb
						console.log(data);
					});
				};
				
				this.doLogin = function(email, password, callback) {
					var args = {
							email: email,
							password: password
					};
					RestfulService.put(service+"login",args,function(data) {
						//SuccessCb
						if(typeof(callback) == "function") {
							callback(data);
						}
					}, function(data) {
						//ErrorCb
						console.log(data);
					});
				};
				
				var that = this;
			};
			
			Instance = new AuthRestfulService();
		}
		
		return Instance;
	}]);
})();