app.controller("LoginController",function($scope){	
	
	
	$scope.validEmail = function(model) {
		return model.errors.email;
	}

	$scope.loginModel = {
			email: {text: ""},
			password: {text: "", minLength: 8},
			errors: {
				email: false,
				password: false
			}
	};
	
	$scope.signupModel = {
			email: {text: ""},
			password: {text: ""},
			repeatPassword: {text: ""},
			errors: {
				email: false,
				password: false,
				repeatPassword: false
			}
	};
	
	$scope.doLogin = function() {
		$scope.loginModel.errors.email = false;
		$scope.loginModel.errors.password = false;
		
		if(typeof($scope.loginModel.email.text) == "undefined" || $scope.loginModel.email.text.length == 0 || !validateEmail($scope.loginModel.email.text)) {
			$scope.loginModel.errors.email = true;
		}
		
		if(typeof($scope.loginModel.password.text) == "undefined" || $scope.loginModel.password.text.length < $scope.loginModel.password.minLength) {
			$scope.loginModel.errors.password = true;
		}
	};
	
	$scope.doSignup = function() {
		
	};
	
	$scope.doSocial = function(network) {
		
	};
	
});