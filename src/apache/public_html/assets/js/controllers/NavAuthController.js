app.controller("NavAuthController",function($scope,$modal,AuthRestfulService) {
	$scope.isAuth = false;
	var modalInstance;
	
	var init = function() {
		AuthRestfulService.checkLogin(function(resp) {
			if(resp.ok) {
				$scope.isAuth = resp.data;
			}
		});
	};
	
	$scope.signout = function() {
		AuthRestfulService.releaseCreds();
		$scope.isAuth = false;
		return false;
	}
	
	$scope.$on('isUserAuth',function(event,bool) {
		$scope.isAuth = bool;
		
		if($scope.isAuth) {
			modalInstance.close();
		}
	});
	
	angular.element(document).ready(function() {
		angular.element("ul.nav.navbar-nav.navbar-right.not-login").click(function(e) {
			e.preventDefault;
			modalInstance = $modal.open({
				templateUrl: '/view/login?modal=true',
				size: 'lg',
				controller: "LoginController"
			});
			
			return false;
		});
	});
	
	init();
});