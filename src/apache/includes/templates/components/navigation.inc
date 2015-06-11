<nav class="navbar navbar-inverse navbar-static-top" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">Gamer World</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="navbar-collapse">
      <ul class="nav navbar-nav">
        <!-- li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li -->
        <?php if($Auth->isLoggedIn()): ?>
        <li <?= ($activeTab == "profile" ? "class='active'" : "" )?>><a href="/profile">Profile</a></li>
        <?php endif;?>
        <li <?= ($activeTab == "clans" ? "class='active'" : "" )?>><a href="/clans">Clans / Guilds</a></li>
        <li <?= ($activeTab == "players" ? "class='active'" : "" )?>><a href="/players">Players</a></li>
      </ul>
      <?php if($Auth->isLoggedIn()): ?>
      <ul class="nav navbar-nav navbar-right col-sm-1">      	
        <li class="dropdown pull-left">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-cog"  aria-hidden="true"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="/settings">Account Settings</a></li>
            <li><a href="/signout">Sign Out</a></li>
          </ul>
        </li>        
      </ul>
      <?php else: ?>
      <ul class="nav navbar-nav navbar-right col-sm-2">
      	<li class="pull-left"><a href="/login">Log In / Signup</a></li>
      </ul>
      <?php endif; ?>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>