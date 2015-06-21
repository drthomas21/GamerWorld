(function() {
	var Instance = null;
	
	app.factory("ProfileRestfulService",['$cookies','$rootScope','RestfulService','AuthRestfulService',function($cookies,$rootScope,RestfulService,AuthRestfulService){
		if(Instance == null) {			
			var ProfileRestfulService = function() {
				var service = "profile/";
				this.getProfile = function(id, callback) {
					var creds = AuthRestfulService.getCreds();
					var args = {
							id: creds.user,
							token: creds.token
					};
					
					RestfulService.post(service+id,args,function(data){
						//SuccessCb
						if(typeof(callback) == "function") {
							callback(data);
						}
					}, function(data) {
						//ErrorCb
						console.log(data);
					});
				}
				
				var that = this;
			};
			
			Instance = new ProfileRestfulService();
		}
		
		return Instance;
	}]);
})();