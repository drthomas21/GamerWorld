<nav class="navbar navbar-inverse navbar-static-top" role="navigation" ng-controller="NavAuthController">
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
        <li <?= (isset($activeTab) && $activeTab == "profile" ? "class='active'" : "" )?> ng-show="isAuth"><a href="/profile">Profile</a></li>
        <li <?= (isset($activeTab) && $activeTab == "clans" ? "class='active'" : "" )?>><a href="/clans">Clans / Guilds</a></li>
        <li <?= (isset($activeTab) && $activeTab == "players" ? "class='active'" : "" )?>><a href="/players">Players</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right col-sm-1 loggedin" ng-show="isAuth">      	
        <li class="dropdown pull-left">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-cog"  aria-hidden="true"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li class="settings"><a href="/settings">Account Settings</a></li>
            <li class="signout"><a href="/signout" ng-click="signout()">Sign Out</a></li>
          </ul>
        </li>        
      </ul>
      <ul class="nav navbar-nav navbar-right col-sm-3 not-login" ng-hide="isAuth">
      	<li class="text-center col-lg-12 login"><a href="/login">Log In / Sign Up</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>