app.controller("NavAuthController",function($scope,$modal) {
	$scope.isAuth = false;
	
	$scope.$on('isUserAuth',function(event,bool) {
		$scope.isAuth = bool;
	});
	
	angular.element(document).ready(function() {
		angular.element("ul.nav.navbar-nav.navbar-right").click(function(e) {
			e.preventDefault;
			$modal.open({
				templateUrl: '/view/login',
				size: 'lg',
				controller: "LoginController"
			});
			
			var timeoutCb = function() {
				var height = 0;
				angular.element(".modal-content").children().each(function(i) {
					height += angular.element(angular.element(".modal-content").children()[i]).height();
				});
				
				if(height > 0) {
					height += 20;
					angular.element(".modal-content").css('height',height+"px");
				}
			}
			setTimeout(timeoutCb, 50);
			setTimeout(timeoutCb, 100);
			setTimeout(timeoutCb, 500);
			return false;
		});
	});
});