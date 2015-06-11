<h3 class="text-center">Other Clans</h3>
<hr />
<div class="clan-search">
	<form class="form-inline">
		<h4>Filters: </h4>
		<div class="form-group">
			<label for="gameSystem">Game System: </label>
			<select class="form-control" name="gameSystem" id="gameSystem">
				<option>Select Game System</option>
			<?php foreach($gameSystems as $i => $gameSystem): ?>
				<option value="<?= $i?>"><?= $gameSystem ?></option>
			<?php endforeach; ?>
			</select>
		</div>
		
		<div class="form-group">
			<label for="gameName">Name of Game: </label>
			<input class="form-control" type="text" name="gameName" id="gameName" placeholder="Name of Game" />
		</div>
		
		<div class="form-group">
			<label for="clanName">Name of Clan: </label>
			<input class="form-control" type="text" name="clanName" id="clanName" placeholder="Name of Clan" />
		</div>
	</form>
	<hr />
	<!-- Sample -->
	<div class="col-lg-12 clan">
		<div class="col-md-2 thumbnail clan-icon">
			<a href="#"><img src="/assets/img/profile-pic.jpg" class="img-responsive img-thumbnail"/></a>
		</div>
		<div class="col-md-2 clan-quick-info">
			<h3>Clan Name</h3>
			<small>(Led by User 1)</small>
			<small>(<?= rand(10,1000); ?> members)</small>
		</div>
		<div class="col-md-8 clan-quick-info">
			<h3>About the Clan</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante et odio finibus tincidunt eget in lorem. Mauris quis sapien eget justo cursus facilisis.</p>
				
		</div>
		<div class="col-xs-12">
			<hr />
		</div>
	</div>
	<div class="col-lg-12 clan">
		<div class="col-md-2 thumbnail clan-icon">
			<a href="#"><img src="/assets/img/profile-pic.jpg" class="img-responsive img-thumbnail"/></a>
		</div>
		<div class="col-md-2 clan-quick-info">
			<h3>Clan Name</h3>
			<small>(Led by User 1)</small>
			<small>(<?= rand(10,1000); ?> members)</small>
		</div>
		<div class="col-md-8 clan-quick-info">
			<h3>About the Clan</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante et odio finibus tincidunt eget in lorem. Mauris quis sapien eget justo cursus facilisis.</p>
				
		</div>
		<div class="col-xs-12">
			<hr />
		</div>
	</div>
	<div class="col-lg-12 clan">
		<div class="col-md-2 thumbnail clan-icon">
			<a href="#"><img src="/assets/img/profile-pic.jpg" class="img-responsive img-thumbnail"/></a>
		</div>
		<div class="col-md-2 clan-quick-info">
			<h3>Clan Name</h3>
			<small>(Led by User 1)</small>
			<small>(<?= rand(10,1000); ?> members)</small>
		</div>
		<div class="col-md-8 clan-quick-info">
			<h3>About the Clan</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante et odio finibus tincidunt eget in lorem. Mauris quis sapien eget justo cursus facilisis.</p>
				
		</div>
		<div class="col-xs-12">
			<hr />
		</div>
	</div>
	<div class="col-lg-12 clan">
		<div class="col-md-2 thumbnail clan-icon">
			<a href="#"><img src="/assets/img/profile-pic.jpg" class="img-responsive img-thumbnail"/></a>
		</div>
		<div class="col-md-2 clan-quick-info">
			<h3>Clan Name</h3>
			<small>(Led by User 1)</small>
			<small>(<?= rand(10,1000); ?> members)</small>
		</div>
		<div class="col-md-8 clan-quick-info">
			<h3>About the Clan</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante et odio finibus tincidunt eget in lorem. Mauris quis sapien eget justo cursus facilisis.</p>
				
		</div>
		<div class="col-xs-12">
			<hr />
		</div>
	</div>
	
	
	<!-- End:Sample -->
</div>