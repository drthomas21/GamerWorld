(function() {
	var Instance = null;
	
	app.factory("RestfulService",['$http',function($http){
		if(Instance == null) {
			var RestfulService = function() {
				var backend = config.backend;
				
				var request = function(type,service,arguments,successCb,errorCb) {
					$http({
						method: type,
						url: backend+('/'+service).replace("//",'/'),
						data: arguments
					})
					.success(successCb)
					.error(errorCb);
				};
				
				this.get = function(service,arguments,successCb,errorCb) {
					request("GET",service,arguments,successCb,errorCb);
				};
				
				this.post = function(service,arguments,successCb,errorCb) {
					request("POST",service,arguments,successCb,errorCb);
				};
				
				this.put = function(service,arguments,successCb,errorCb) {
					request("PUT",service,arguments,successCb,errorCb);
				};
				
				this.delete = function(service,arguments,successCb,errorCb) {
					request("DELETE",service,arguments,successCb,errorCb);
				};
			};
			
			Instance = new RestfulService();
		}
		
		return Instance;
	}]);
})();