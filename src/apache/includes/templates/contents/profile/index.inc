<div class="col-md-2 col-md-offset-1 profile-quick-link">
	<div class="profile-pic thumbnail">
		<a href="#"><img src="/assets/img/profile-pic.jpg" class="img-responsive img-thumbnail"/></a>
	</div>
	<div class="profile-message">
		<a href="/profile/messages"><span class="glyphicon glyphicon-envelope" arial-hidden="true"></span> Messages</a>
	</div>
	<div class="profile-message">
		<a href="/profile/timeline"><i class="fa fa-newspaper-o"></i> Timeline</a>
	</div>
	<div class="profile-friends">
		<a href="/profile/friends"><span class="glyphicon glyphicon glyphicon-user" arial-hidden="true"></span> Friends</a>
	</div>
	<div class="profile-followers">
		<a href="/profile/following"><i class="fa fa-users"></i> Following</a>
	</div>
</div>
<div class="col-md-9 profile-view">
	<?php $this->renderContent($subcontent); ?>
</div>