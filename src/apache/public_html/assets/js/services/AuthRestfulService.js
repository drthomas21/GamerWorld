(function() {
	var Instance = null;
	
	app.factory("AuthRestfulService",['$cookie','RestfulService',function($cookie,RestfulService){
		if(Instance == null) {
			var AuthRestfulService = function() {
				var service = "auth/";
				this.checkLogin = function(callback) {
					var args = {
							username: $cookie.get('rpz_auth_user'),
							token: $cookie.get('rpz_auth_token')
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
				}
			};
			
			Instance = new AuthRestfulService();
		}
		
		return Instance;
	}]);
})();