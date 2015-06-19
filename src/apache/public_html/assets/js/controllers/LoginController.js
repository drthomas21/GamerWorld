app.controller("LoginController",function($scope,AuthRestfulService){	
	
	
	$scope.validEmail = function(model) {
		return model.errors.email;
	}

	$scope.loginModel = {
			email: {text: ""},
			password: {text: ""},
			respError: "",
			errors: {
				email: false,
				password: false
			}
	};
	
	$scope.signupModel = {
			email: {text: ""},
			password: {text: "", minLength: 8},
			repeatPassword: {text: ""},
			respError: "",
			errors: {
				email: false,
				password: false,
				repeatPassword: false
			}
	};
	
	$scope.doLogin = function(send) {
		$scope.loginModel.errors.email = false;
		$scope.loginModel.errors.password = false;
		
		if(typeof($scope.loginModel.email.text) == "undefined" || $scope.loginModel.email.text.length == 0 || !validateEmail($scope.loginModel.email.text)) {
			$scope.loginModel.errors.email = true;
		}
		
		if(typeof($scope.loginModel.password.text) == "undefined" || $scope.loginModel.password.text.length == 0) {
			$scope.loginModel.errors.password = true;
		}
		
		if(!$scope.loginModel.errors.password && !$scope.loginModel.errors.email && send == true) {
			AuthRestfulService.doLogin($scope.loginModel.email.text,$scope.loginModel.password.text,function(resp){
				if(resp.ok) {
					AuthRestfulService.storeCreds(resp.data)
				} else {
					$scope.loginModel.respError = resp.errors;
				}
			}, function(data) {
				console.log('error',data);
			});
		}
	};
	
	$scope.doSignup = function(send) {
		$scope.signupModel.errors.email = false;
		$scope.signupModel.errors.password = false;
		$scope.signupModel.errors.repeatPassword = false;
		
		if(typeof($scope.signupModel.email.text) == "undefined" || $scope.signupModel.email.text.length == 0 || !validateEmail($scope.signupModel.email.text)) {
			$scope.signupModel.errors.email = true;
		}
		
		if(typeof($scope.signupModel.password.text) == "undefined" || $scope.signupModel.password.text.length < $scope.signupModel.password.minLength) {
			$scope.signupModel.errors.password = true;
		}
		
		if((typeof($scope.signupModel.repeatPassword.text) == "undefined" || typeof($scope.signupModel.password.text) == "undefined") || $scope.signupModel.repeatPassword.text != $scope.signupModel.password.text || $scope.signupModel.errors.password == true) {
			$scope.signupModel.errors.repeatPassword = true;
		}
		
		if(!$scope.signupModel.errors.password && !$scope.signupModel.errors.email && !$scope.signupModel.errors.repeatPassword && send == true) {
			AuthRestfulService.doSignup($scope.signupModel.email.text,$scope.signupModel.password.text,function(resp){
				if(resp.ok) {
					AuthRestfulService.storeCreds(resp.data)
				} else {
					$scope.signupModel.respError = resp.errors;
				}
			}, function(data) {
				console.log('error',data);
			});
		}
	};
	
	$scope.doSocial = function(network) {
		
	};
	
});