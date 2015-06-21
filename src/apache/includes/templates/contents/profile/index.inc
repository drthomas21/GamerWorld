<div class="col-xs-2 col-md-offset-1 profile-quick-link">	
	<div class="profile-pic thumbnail">
		<a href="#"><img ng-src="{{Profile.profileImage}}" class="img-responsive img-thumbnail"/></a>
	</div>
	<section ng-show="Profile.isUser" class="col-lg-12">
		<div class="profile-message">
			<a href="" ng-click="getMessages()"><span class="glyphicon glyphicon-envelope" arial-hidden="true"></span> Messages</a>
		</div>
		<div class="profile-message">
			<a href="" ng-click="getTimeline()"><i class="fa fa-newspaper-o"></i> Timeline</a>
		</div>
		<div class="profile-friends">
			<a href="" ng-click="getFriends()"><span class="glyphicon glyphicon glyphicon-user" arial-hidden="true"></span> Friends</a>
		</div>
		<div class="profile-followers">
			<a href="" ng-click="getFollowers()"><i class="fa fa-users"></i> Following</a>
		</div>
	</section>
	<section ng-hide="Profile.isUser" class="col-lg-12">
		<div class="profile-message">
			<a href="#messages"><span class="glyphicon glyphicon-envelope" arial-hidden="true"></span> Send Message</a>
		</div>
		<div class="profile-friends">
			<a href="#friends"><span class="glyphicon glyphicon glyphicon-user" arial-hidden="true"></span> Become Friends</a>
		</div>
		<div class="profile-followers">
			<a href="#following"><i class="fa fa-users"></i> Start Following</a>
		</div>
	</section>
</div>
<div class="col-xs-9 profile-view">
	<section ng-include="" onload=""></section>
</div>