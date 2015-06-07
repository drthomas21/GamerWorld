<?php
class RequestHandler {
	public static function parseRequest(array $args = array()) {		
		if(empty($args)) {
			//welcome page
			
			$Controller = Controller::getInstance("HomepageController");
			$Controller->actionIndex();
			$Controller->renderPage();
		} elseif(strtolower($args[0]) == "profile" || strtolower($args[1]) == "profile") {
			//profile page
			
			$Controller = Controller::getInstance("ProfileController");
			$Controller->actionIndex();
			$Controller->renderPage();
		} elseif(strtolower($args[0]) == "clans" || strtolower($args[1]) == "clans" || strtolower($args[0]) == "guilds" || strtolower($args[1]) == "guilds") {
			//clans/guilds browse page
			
			$Controller = Controller::getInstance("BrowseClansController");
			$Controller->actionIndex();
			$Controller->renderPage();
		} elseif(strtolower($args[0]) == "clan" || strtolower($args[1]) == "clan" || strtolower($args[0]) == "guild" || strtolower($args[1]) == "guild") {
			//clans/guilds profile page
			
			$Controller = Controller::getInstance("ClanProfileController");
			$Controller->actionIndex();
			$Controller->renderPage();
		} elseif(strtolower($args[0]) == "players" || strtolower($args[1]) == "players") {
			//players browse page
			
			$Controller = Controller::getInstance("BrowsePlayersController");
			$Controller->actionIndex();
			$Controller->renderPage();
		} elseif(strtolower($args[0]) == "player" || strtolower($args[1]) == "player") {
			//player profile page
			
			$Controller = Controller::getInstance("PlayerProfileController");
			$Controller->actionIndex();
			$Controller->renderPage();
		} else {
			//404 page
			$Controller = Controller::getInstance("NotFoundController");
			$Controller->actionIndex();
			$Controller->renderPage();
		} 
	}
}