(function() {
	var Instance = null;
	
	app.factory("AuthRestfulService",['$cookies','RestfulService',function($cookies,RestfulService){
		if(Instance == null) {
			var AuthRestfulService = function() {
				var service = "auth/";
				this.checkLogin = function(callback) {
					var args = {
							username: $cookies.get('rpz_auth_user'),
							token: $cookies.get('rpz_auth_token')
					};
					RestfulService.get(service+'validate',args,function(data){
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
					
				};
				
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
			};
			
			Instance = new AuthRestfulService();
		}
		
		return Instance;
	}]);
})();