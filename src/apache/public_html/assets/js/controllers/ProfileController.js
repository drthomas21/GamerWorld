app.controller('ProfileController',function($scope,$routeParams,AuthRestfulService,ProfileRestfulService) {
	$scope.Profile = {
			userId: '',
			gamerTags: [],
			displayName: '',
			profileImage: '/assets/img/profile-pic.jpg',
			description: '',
			isUser: false,
			messageIds: [],
			timelineIds: [],
			friendIds: [],
			followerIds: [],
	};
	
	var blankProfile = function() {
		$scope.Profile = {
				userId: '',
				gamerTags: [],
				displayName: '',
				profileImage: '/assets/img/profile-pic.jpg',
				description: '',
				isUser: false,
				messageIds: [],
				timelineIds: [],
				friendIds: [],
				followerIds: [],
		};
	};
	
	var init = function() {
		if(typeof($routeParams.id) == "string") {
			$scope.Profile.userId = $routeParams.id;
		} else {
			var creds = AuthRestfulService.getCreds();
			$scope.Profile.userId = creds.user;
		}
		
		if(typeof($scope.Profile.userId) == "string" && $scope.Profile.userId.length > 0) {
			//We have an id
			ProfileRestfulService.getProfile($scope.Profile.userId,function(resp) {
				if(resp.ok) {
					//Merge objects
					for(var i in resp.data) {
						$scope.Profile[i] = resp.data[i];
					}

					if($scope.Profile.profileImage.length == 0) {
						$scope.Profile.profileImage = "/assets/img/profile-pic.jpg";
					}
					
					var creds = AuthRestfulService.getCreds();
					$scope.Profile.isUser = $scope.Profile.userId == creds.user;
				} else {
					console.log(resp.errors);
				}
			})
		} else {
			//Redirect to homepage
		}
	};
	
	$scope.getMessages = function() {
		
	};
	
	$scope.getTimeline = function() {
		
	};
	
	$scope.getFriends = function() {
		
	};
	
	$scope.getFollowers = function() {
		
	};
	
	init();
});
