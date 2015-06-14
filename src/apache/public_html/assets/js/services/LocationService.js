(function() {
	var Instance = null;
	
	app.factory("LocationService",['$location',function($location){
		if(Instance == null) {
			var LocationService = function() {
				
			};
			
			Instance = new LocationService();
		}
		
		return Instance;
	}]);
})();