app.controller("NavAuthController",function($scope,$modal) {
	angular.element(document).ready(function() {
		angular.element("ul.nav.navbar-nav.navbar-right").click(function(e) {
			e.preventDefault;
			$modal.open({
				templateUrl: '/view/login',
				size: 'lg',
				controller: "LoginController"
			});
			setTimeout(function() {
				var height = 0;
				angular.element(".modal-content").children().each(function(i) {
					height += angular.element(angular.element(".modal-content").children()[i]).height();
				});
				
				if(height > 0) {
					height += 20;
					angular.element(".modal-content").css('height',height+"px");
				}
			}, 50);
			return false;
		});
	});
});