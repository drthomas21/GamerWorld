(function() {
	var Instance = null;
	
	app.factory("PageDataContainer",[function(){
		if(Instance == null) {
			var PageDataContainer = function() {
				
			};
			
			Instance = new PageDataContainer();
		}
		
		return Instance;
	}]);
})();